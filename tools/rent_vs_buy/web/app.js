// 🧠 Calculator Logic (Refactor for "Buy Later" Flow)
window.__scenarioYearsTouched = false;

function calculateRentVsBuy(inputs) {
    const {
        currentAge,
        yearsWait, // X
        yearsOwn,  // Y
        loanTerm,
        // Rent
        monthlyRent,
        mgmtFeeRent,
        renewalFeeMonths,
        detailsInitialRentMonths, // Move-in cost (months of rent)
        // Buy
        propertyPrice,
        interestRatePct,
        initialBuyCostPct,
        monthlyMgmtBuy,
        yearlyPropertyTax,
        resaleValuePct
    } = inputs;

    const totalYears = yearsWait + yearsOwn;

    // --- SCENARIO A: RENT FOREVER (X + Y years) ---
    // 1. Initial Move-in
    const rentInitialCost = monthlyRent * detailsInitialRentMonths;
    // 2. Monthly Costs
    const rentMonthlyTotal = (monthlyRent + mgmtFeeRent) * 12 * totalYears;
    // 3. Renewal Fees (every 2 years)
    // Simple logic: occur at year 2, 4, 6...
    const renewalCountTotal = Math.floor(totalYears / 2);
    const rentRenewalTotal = (monthlyRent * renewalFeeMonths) * renewalCountTotal;

    const scenarioRentForever = rentInitialCost + rentMonthlyTotal + rentRenewalTotal;


    // --- SCENARIO B: BUY LATER (Rent X years -> Buy & Hold Y years) ---

    // Phase 1: Renting for X years
    const rentWaitMonthly = (monthlyRent + mgmtFeeRent) * 12 * yearsWait;
    const renewalCountWait = Math.floor(yearsWait / 2);
    const rentWaitRenewal = (monthlyRent * renewalFeeMonths) * renewalCountWait;
    // Note: We pay initial rent cost once at start of timeline
    const costPhase1 = rentInitialCost + rentWaitMonthly + rentWaitRenewal;

    // Phase 2: Buying (Y years ownership)
    // -- 2a. Initial Buy Costs
    const buyInitialCost = propertyPrice * (initialBuyCostPct / 100);

    // -- 2b. Mortgage
    const principal = propertyPrice;
    const r = (interestRatePct / 100) / 12;
    const n = Math.max(1, loanTerm * 12); // Safety: prevent n=0

    let monthlyPmt = 0;
    if (r > 0) {
        monthlyPmt = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
        monthlyPmt = principal / n;
    }

    // Safety check for NaN payment
    if (isNaN(monthlyPmt)) monthlyPmt = 0;

    // We pay mortgage for Y years (or until loan ends if Y > loanTerm)
    const monthsPaying = Math.min(yearsOwn * 12, n);
    const totalMortgagePaid = monthlyPmt * monthsPaying;

    // -- 2c. Recurring Ownership Costs (Mgmt + Tax) for Y years
    const buyRecurring = (monthlyMgmtBuy * 12 * yearsOwn) + (yearlyPropertyTax * yearsOwn);

    // -- 2d. Resale & Equity after Y years
    // Remaining Debt Calc
    let remainingDebt = 0;
    const monthsElapsed = yearsOwn * 12; // Time since purchase

    if (monthsElapsed < n) {
        if (r > 0) {
            remainingDebt = principal * (Math.pow(1 + r, n) - Math.pow(1 + r, monthsElapsed)) / (Math.pow(1 + r, n) - 1);
        } else {
            remainingDebt = principal - (principal / n * monthsElapsed);
        }
    }

    // New Resale Logic (Requirement Step 2)
    // resalePrice = propertyPrice * (resaleValuePct/100)
    const resalePrice = propertyPrice * (resaleValuePct / 100);
    const sellingCost = resalePrice * 0.04;
    const netAfterSale = resalePrice - remainingDebt - sellingCost;

    // Equity for total cost calculation (net gain from selling)
    const equity = netAfterSale;

    // Net Cost of Phase 2
    // Cash Out = Initial + Mortgage + Recurring
    // Net = Cash Out - Equity
    const cashOutPhase2 = buyInitialCost + totalMortgagePaid + buyRecurring;
    const netCostPhase2 = cashOutPhase2 - equity;

    const scenarioBuyLater = costPhase1 + netCostPhase2;


    // --- RESULT ---
    // Positive savings means Rent Forever is cheaper? No, usually we calc Savings of Buying.
    // Let's define "savings" as (RentForever - BuyLater).
    // If positive, Buy Later is cheaper (Winner = Buy).
    // If negative, Rent Forever is cheaper (Winner = Rent).

    const diff = scenarioRentForever - scenarioBuyLater;
    const winner = diff > 0 ? 'buy' : 'rent';

    return {
        totalYears,
        yearsWait,
        yearsOwn,
        winner,
        diff: Math.abs(diff),
        rentForever: {
            total: scenarioRentForever,
            breakdown: {
                monthly: rentMonthlyTotal,
                renewal: rentRenewalTotal,
                initial: rentInitialCost
            }
        },
        buyLater: {
            total: scenarioBuyLater,
            phase1Rent: costPhase1,
            phase2Net: netCostPhase2,
            phase2Cash: cashOutPhase2,
            equity: equity,
            breakdown: {
                initialBuy: buyInitialCost,
                mortgage: totalMortgagePaid,
                recurring: buyRecurring,
                resalePrice: resalePrice,
                sellingCost: sellingCost,
                debt: remainingDebt,
                netAfterSale: netAfterSale
            }
        }
    };
}

// 🎮 UI Interaction

let committedInputs = null;

function getInputsFromUI() {
    const getVal = (id, fallback = 0) => {
        const el = document.getElementById(id);
        if (!el) return fallback;
        const val = parseFloat(el.value);
        return isNaN(val) ? fallback : val;
    };

    const getValInt = (id, fallback = 0) => {
        const el = document.getElementById(id);
        if (!el) return fallback;
        const val = parseInt(el.value, 10);
        return isNaN(val) ? fallback : val;
    };

    // Robust retrieval for resale percentage with fallback
    const resaleValuePct = getVal('buy-resale', 85);

    return {
        currentAge: getValInt('current-age', 30),
        yearsWait: getValInt('years-wait', 0),
        yearsOwn: getValInt('years-own', 35),
        loanTerm: getValInt('loan-term-input', 35),
        monthlyRent: getVal('rent-monthly', 0),
        mgmtFeeRent: getVal('rent-mgmt', 0),
        renewalFeeMonths: getVal('rent-renewal', 1.0),
        detailsInitialRentMonths: getVal('rent-initial', 4.0),
        propertyPrice: getVal('buy-price', 0) * 10000,
        interestRatePct: getVal('buy-rate', 0.5),
        initialBuyCostPct: getVal('buy-initial-pct', 7.0),
        monthlyMgmtBuy: getVal('buy-mgmt', 0),
        yearlyPropertyTax: getVal('buy-tax', 0),
        resaleValuePct: resaleValuePct
    };
}

function checkInputsChanged() {
    validateLoanTermImmediate();

    if (!committedInputs) return;

    const currentInputs = getInputsFromUI();
    const hint = document.getElementById('update-hint');

    const changed = JSON.stringify(currentInputs) !== JSON.stringify(committedInputs);
    hint.style.display = changed ? 'block' : 'none';
}

function validateLoanTermImmediate() {
    const currentAge = parseInt(document.getElementById('current-age').value) || 0;
    const yearsWait = parseInt(document.getElementById('years-wait').value) || 0;
    const loanInput = document.getElementById('loan-term-input');
    if (!loanInput) return;

    const buyAge = currentAge + yearsWait;
    const maxLoanAllowed = Math.max(0, 84 - buyAge);

    // Update .max attribute dynamically
    loanInput.setAttribute('max', maxLoanAllowed);

    // Strict Clamp immediately
    let loanTerm = parseInt(loanInput.value) || 0;
    if (loanTerm > maxLoanAllowed) {
        loanTerm = maxLoanAllowed;
        loanInput.value = loanTerm;
    }

    // Warnings
    const maxLoan79 = 79 - buyAge;
    const extendedWarning = document.getElementById('loan-extended-warning');
    const possibleWarning = document.getElementById('loan-not-possible-warning');

    if (buyAge >= 79) {
        possibleWarning.style.display = 'block';
        extendedWarning.style.display = 'none';
    } else {
        possibleWarning.style.display = 'none';
        if (loanTerm > maxLoan79) {
            extendedWarning.style.display = 'block';
        } else {
            extendedWarning.style.display = 'none';
        }
    }
}

function runDiagnosis(options = {}) {
    validateLoanTermImmediate(); // Final safety check

    // If years-own was manually touched by slider/nudge, ensure we don't overwrite it with defaults
    if (window.__scenarioYearsTouched) {
        // Optionally sync from slider if it exists to ensure current UI value is used
        const scnSlider = document.getElementById('scenario-years-slider');
        const mainInp = document.getElementById('years-own');
        if (scnSlider && mainInp) mainInp.value = scnSlider.value;
    } else {
        // Here you could add logic to auto-calculate yearsOwn (e.g. 65 - age) if not touched
    }

    const inputs = getInputsFromUI();

    // Comprehensive Debug Logs (Requirement Step 1)
    console.log('--- Diagnosis Inputs ---');
    console.log('propertyPrice:', inputs.propertyPrice);
    console.log('interestRatePct:', inputs.interestRatePct);
    console.log('loanTerm:', inputs.loanTerm);
    console.log('resaleValuePct:', inputs.resaleValuePct);
    console.log('yearsWait:', inputs.yearsWait);
    console.log('yearsOwn:', inputs.yearsOwn);
    console.log('------------------------');

    // 2. Commit State
    committedInputs = { ...inputs };

    // 3. UI Updates
    document.getElementById('total-years-display').textContent = inputs.yearsWait + inputs.yearsOwn;
    document.getElementById('update-hint').style.display = 'none';
    document.getElementById('submit-button').textContent = '結果を更新する';

    // Show results section
    document.querySelector('.results-section').style.display = 'block';
    // Show accuracy card
    const accCard = document.getElementById('accuracy-card');
    if (accCard) accCard.style.display = 'block';

    // Add class to container for reordering
    document.querySelector('.container').classList.add('has-results');

    // Add class to container for reordering
    document.querySelector('.container').classList.add('has-results');

    // 4. Calculate & Render
    document.body.classList.add('has-results');
    const result = calculateRentVsBuy(inputs);
    renderResults(result, inputs);
    renderCautionBox(inputs);
    updateAccuracy();
    mountScenarioLab();

    // ✅ Breakeven Point Analysis
    updateBreakevenAnalysis(inputs);

    // Phase 2: Auto-scroll to results
    if (!options.skipScroll) {
        document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateAccuracy() {
    const fields = [
        'current-age', 'years-wait', 'years-own', 'loan-term-input',
        'rent-monthly', 'rent-mgmt', 'buy-price', 'buy-rate',
        'buy-mgmt', 'buy-tax', 'buy-resale'
    ];

    let filledCount = 0;
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value && el.value !== '0' && el.value !== '') {
            filledCount++;
        }
    });

    const totalFields = fields.length;
    const accuracy = Math.round((filledCount / totalFields) * 100);

    const pctEl = document.getElementById('accuracy-pct');
    const barEl = document.getElementById('accuracy-bar-fill');
    const suggestionEl = document.getElementById('accuracy-suggestion');

    if (pctEl) pctEl.textContent = accuracy;
    if (barEl) barEl.style.width = accuracy + '%';

    if (suggestionEl) {
        if (accuracy < 70) {
            const needed = Math.ceil(totalFields * 0.7);
            const needCount = Math.max(0, needed - filledCount);
            suggestionEl.textContent = `あと ${needCount}項目 入れると 70% になります（おすすめ）`;
            suggestionEl.style.display = 'block';
        } else {
            suggestionEl.style.display = 'none';
        }
    }
}

function renderCautionBox(inputs) {
    const container = document.getElementById('caution-box-container');
    const { currentAge, yearsWait, loanTerm } = inputs;

    const buyAge = currentAge + yearsWait;
    const payoffAge = buyAge + loanTerm;

    let cautions = [];

    // Condition A: Payoff Age > 80
    if (payoffAge > 80) {
        cautions.push({
            title: `完済年齢が高めです（${payoffAge}歳）`,
            body: "ローン年数の調整や頭金、購入時期の見直しで負担が変わります。無理のない計画になっているか一度確認しましょう。"
        });
    }

    // Condition B & C: Danshin (Group Credit Life Insurance)
    if (buyAge >= 50) {
        cautions.push({
            title: "団信（もしもの備え）は早め確認が安心",
            body: "病歴や通院がなくても、加入条件が変わるケースがあります。50歳を超えると選択肢が狭まることがあるため、購入前に『事前確認』をしておくと計画が立てやすいです。"
        });
    } else if (buyAge >= 40) {
        cautions.push({
            title: "団信（もしもの備え）は早め確認が安心",
            body: "年齢が上がるほど、健康状態によって条件が変わることがあります。気になる方は事前に相談・確認しておくと安心です。"
        });
    }

    // Render
    if (cautions.length > 0) {
        container.style.display = 'block';

        const itemsHtml = cautions.map(c => `
            <div class="caution-item">
                <div class="caution-title">⚠️ ${c.title}</div>
                <div class="caution-body">${c.body}</div>
            </div>
        `).join('');

        container.innerHTML = `
            <details class="caution-details" open>
                <summary>確認ポイント（年齢・ローン）</summary>
                <div class="caution-content">
                    ${itemsHtml}
                </div>
            </details>
        `;
    } else {
        container.style.display = 'none';
        container.innerHTML = '';
    }
}

function renderResults(res, inputs) {
    const fmt = (num) => '¥' + Math.round(num).toLocaleString();

    // Summary
    const resultHeader = document.getElementById('result-header');
    const resultText = document.getElementById('result-text');

    // Text generation logic
    let timelineText = "";
    if (res.yearsWait === 0) {
        timelineText = `今すぐ購入して<strong>${res.yearsOwn}年間</strong>住む`;
    } else {
        timelineText = `<strong>${res.yearsWait}年後</strong>に購入して、<strong>${res.yearsOwn}年間</strong>住む`;
    }

    const diffVal = fmt(res.diff);
    const diffDisplay = document.getElementById('result-diff-display');
    const conclusionEl = document.getElementById('result-conclusion-line');
    const reasonEl = document.getElementById('result-reason-line');
    const resultsContainer = document.querySelector('.results-section');

    if (res.winner === 'buy') {
        resultHeader.className = 'winner-buy';
        if (resultsContainer) {
            resultsContainer.classList.add('winner-buy');
            resultsContainer.classList.remove('winner-rent');
        }
        resultHeader.textContent = '🎉 購入プランがお得！';
        resultText.innerHTML = `${timelineText}プランの方が、<br>ずっと賃貸より<strong>${diffVal}</strong>安く済みそうです。`;

        if (diffDisplay) diffDisplay.textContent = `+${diffVal}`;
        if (conclusionEl) conclusionEl.innerHTML = `結論：今は<span class="result-buy">「購入」</span>優位`;
        if (reasonEl) reasonEl.textContent = `理由：${res.totalYears}年計で総コストが賃貸より低い`;
    } else {
        resultHeader.className = 'winner-rent';
        if (resultsContainer) {
            resultsContainer.classList.add('winner-rent');
            resultsContainer.classList.remove('winner-buy');
        }
        resultHeader.textContent = '📉 賃貸継続がお得！';
        resultText.innerHTML = `無理に${timelineText}よりも、<br>ずっと賃貸の方が<strong>${diffVal}</strong>安く済みそうです。`;

        if (diffDisplay) diffDisplay.textContent = `+${diffVal}`;
        if (conclusionEl) conclusionEl.innerHTML = `結論：今は<span class="result-rent">「賃貸」</span>継続が有利`;
        if (reasonEl) reasonEl.textContent = `理由：${res.totalYears}年計で総コストが購入より低い`;
    }

    // Show CTA and Sticky Bar (Phase 3)
    const ctaContainer = document.getElementById('cta-container');
    const stickyBar = document.getElementById('diagnosis-conditions-sticky');
    if (ctaContainer) ctaContainer.style.display = 'block';
    if (stickyBar) stickyBar.style.display = 'block';

    const safety = calculateSafetyScore(inputs, res);
    const safetyContainer = document.getElementById('safety-score-container');
    if (safetyContainer) {
        safetyContainer.innerHTML = `
            <div class="safety-score-badge rank-${safety.rank.toLowerCase()}">${safety.rank}</div>
            <div class="safety-score-info">
                <div class="safety-score-label">プランの安全度：ランク${safety.rank}</div>
                <div class="safety-score-desc">${safety.message}</div>
            </div>
        `;
    }

    const comment = getGuideComment(res, safety);
    const commentContainer = document.getElementById('guide-comment-container');
    if (commentContainer) {
        commentContainer.innerHTML = `
            <div class="guide-comment-box">
                <div class="guide-comment-title">アドバイス</div>
                <div class="guide-comment-text">${comment}</div>
            </div>
        `;
    }

    /**
     * Helper to render Share Section
     */
    function renderShareSection() {
        const shareContainer = document.getElementById('share-section-container');
        if (!shareContainer) return;

        shareContainer.innerHTML = `
            <div class="share-section">
                <button class="share-btn share-save" id="btn-save-img">
                    📸 結果を画像保存
                </button>
                <button class="share-btn share-share" id="btn-share-result">
                    📤 この診断をシェア
                </button>
            </div>
        `;

        document.getElementById('btn-save-img').addEventListener('click', saveResultAsImage);
        document.getElementById('btn-share-result').addEventListener('click', shareResult);
    }

    /**
     * Save result card as image using html2canvas
     */
    function saveResultAsImage() {
        const target = document.querySelector('.result-card');
        if (!target) return;

        // Visual feedback
        const btn = document.getElementById('btn-save-img');
        const originalText = btn.textContent;
        btn.textContent = '⌛ 生成中...';
        btn.disabled = true;

        html2canvas(target, {
            scale: 2, // Better quality
            backgroundColor: '#f8fafc',
            logging: false,
            useCORS: true
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'my-home-diagnosis.png';
            link.href = canvas.toDataURL('image/png');
            link.click();

            btn.textContent = originalText;
            btn.disabled = false;
        }).catch(err => {
            console.error('Save failed:', err);
            btn.textContent = originalText;
            btn.disabled = false;
            alert('保存に失敗しました。');
        });
    }

    /**
     * Share current page
     */
    function shareResult() {
        const shareData = {
            title: '賃貸 vs 持ち家 シミュレーション結果',
            text: 'マイホーム購入と賃貸継続を比較しました。結果をチェックしてみてください！',
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData).catch(err => {
                if (err.name !== 'AbortError') console.error('Share failed:', err);
            });
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                const btn = document.getElementById('btn-share-result');
                const originalText = btn.textContent;
                btn.textContent = '✅ URLをコピーしました';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            });
        }
    }

    renderPersonalityType(safety);
    renderShareSection();
    renderLineSection();
    updateScenarioStatus(); // Populate bar

    // Detail Grid Update
    // Left: Rent Forever
    document.getElementById('rent-total').textContent = fmt(res.rentForever.total);
    document.getElementById('rent-breakdown').innerHTML = `
        期間: ${res.totalYears}年間 (賃貸のみ)<br>
        家賃更新料込: ${fmt(res.rentForever.breakdown.monthly + res.rentForever.breakdown.renewal)}<br>
        初期費用: ${fmt(res.rentForever.breakdown.initial)}
    `;

    // Right: Buy Later Plan
    document.getElementById('buy-net').textContent = fmt(res.buyLater.total);
    let phase1Text = res.yearsWait > 0 ? `賃貸期間(${res.yearsWait}年): ${fmt(res.buyLater.phase1Rent)}<br>` : "";

    // Improved Two-line Summary (Requirement Step 4)
    const totalPayment = res.buyLater.phase1Rent + res.buyLater.phase2Cash;
    const netCost = res.buyLater.total;

    document.getElementById('buy-breakdown').innerHTML = `
        ${phase1Text}
        支払い総額: ${fmt(totalPayment)}<br>
        実質コスト: ${fmt(netCost)} (${res.yearsOwn}年居住)<br>
        <div style="margin-top: 4px; border-top: 1px dotted #ccc; padding-top: 4px; font-size: 0.75rem; color: #64748b;">
            売却時の想定価格: ${fmt(res.buyLater.breakdown.resalePrice)}<br>
            ローン残債: -${fmt(res.buyLater.breakdown.debt)}<br>
            売却諸経費(4%): -${fmt(res.buyLater.breakdown.sellingCost)}<br>
            <strong>売却手取り額: ${fmt(res.buyLater.breakdown.netAfterSale)}</strong>
        </div>
    `;

    updatePersonalityResult(res, inputs); // Pass inputs for age context if needed
    renderCTASection(res, inputs);

    // ✅ Sync new UI (Phase 2)
    syncResultUI(res, inputs);
}

function renderCTASection(res, inputs) {
    const ctaContainer = document.getElementById('cta-section');
    if (!ctaContainer) return;

    // Minimal logic for payment level
    // calculate monthly loan payment from breakdown
    const monthlyLoan = res.buyLater.breakdown.mortgage / (inputs.loanTerm * 12);
    let advice = "";
    if (monthlyLoan > 150000) {
        advice = "返済額がやや高めです。家計に余裕があるか再確認しましょう。";
    } else {
        advice = "無理のない返済水準です。借入条件をより具体的に詰めましょう。";
    }

    ctaContainer.innerHTML = `
        <div class="next-steps">
            <h3>次に進む（無料）</h3>
            <p class="next-steps-subtitle">いまの結果をもとに、次のステップをチェックできます。</p>
            
            <div class="payment-level">
                <span class="result-badge">あなたの診断結果</span>
                <div class="payment-level-title">支払い水準チェック</div>
                <div class="payment-level-body">${advice}</div>
                <div class="payment-disclaimer">※あくまで目安です。実際は家計状況や借入条件で変わります。</div>
                <p class="payment-note">※購入タイミングや返済額の設定次第で、生涯支出が500万〜1000万円以上変わるケースもあります。</p>
            </div>

            <div class="cta-buttons">
                <a href="#" class="cta-btn cta-btn-primary">
                    <span class="cta-label">まずはここから</span>
                    <span class="cta-btn-text">借りられる目安チェック</span>
                    <span class="cta-arrow">›</span>
                </a>
                <a href="#" class="cta-btn">
                    <span class="cta-label">安心返済は？</span>
                    <span class="cta-btn-text">無理ない返済額診断</span>
                    <span class="cta-arrow">›</span>
                </a>
                <a href="#" class="cta-btn">
                    <span class="cta-label">迷わない軸づくり</span>
                    <span class="cta-btn-text">物件の優先順位診断</span>
                    <span class="cta-arrow">›</span>
                </a>
            </div>
        </div>
    `;
}

function updatePersonalityResult(res, inputs) {
    const box = document.getElementById('explanation-box');
    const title = document.getElementById('reason-title');
    const text = document.getElementById('reason-text');
    box.style.display = 'block';

    const threshold = res.rentForever.total * 0.05;
    let type = "";

    if (res.winner === 'rent') {
        if (res.diff > threshold || res.yearsOwn < 5) {
            type = 'wait';
        } else {
            type = 'balanced';
        }
    } else {
        if (res.diff > threshold && res.yearsOwn >= 10) {
            type = 'owner';
        } else {
            type = 'balanced';
        }
    }

    // Advisors
    let content = {};
    if (type === 'wait') {
        box.className = 'explanation-section type-wait';
        content.title = '🐰 「今は貯める」が賢い選択';
        content.body = `
            <strong>今の条件では、賃貸継続が安全です。</strong><br>
            ${inputs.yearsWait > 0 ? '購入時期を遅らせても、' : ''}まだ購入コストの重さが目立ちます。
            無理に資産を持つリスクを取るより、賃貸で貯蓄を最大化する方が合理的です。<br>
            <br>
            <span class="advisor-badge">おすすめアクション</span><br>
            「${inputs.yearsWait + 3}年後」など、もう少し頭金が貯まったタイミングで再度試算してみましょう。
        `;
    } else if (type === 'owner') {
        box.className = 'explanation-section type-owner';
        content.title = '🦁 「買い」の計画を立てましょう';
        content.body = `
            <strong>資産形成のメリットが大きく出ています。</strong><br>
            ${inputs.yearsWait > 0 ? `${inputs.yearsWait}年間の賃貸コストを払ってもなお、` : ''}
            最終的に資産を持つ方が有利です。家賃を掛け捨てにする期間をなるべく短くするのがカギです。<br>
            <br>
            <span class="advisor-badge">おすすめアクション</span><br>
            物件価格の高騰リスクも考慮し、早めの物件探しをおすすめします。
        `;
    } else {
        box.className = 'explanation-section type-balanced';
        content.title = '⚖️ ライフスタイルで選べます';
        content.body = `
            <strong>損得は五分五分です。</strong><br>
            「転勤のしやすさ（賃貸）」か「リフォームの自由（持ち家）」か、お金以外の価値観で決めて良いでしょう。<br>
            <br>
            <span class="advisor-badge">おすすめアクション</span><br>
            ${inputs.yearsWait > 0 ? '購入までの期間を「3年」に短縮した場合どうなるか試してみましょう。' : '「絶対に譲れない条件」を整理しましょう。'}
        `;
    }

    title.textContent = content.title;
    text.innerHTML = content.body;
}

// Attach listeners
document.addEventListener('DOMContentLoaded', () => {
    const loanInput = document.getElementById('loan-term-input');
    const loanPreset = document.getElementById('loan-term-preset');
    const submitBtn = document.getElementById('submit-button');

    // Sync Preset -> Input
    if (loanPreset && loanInput) {
        loanPreset.addEventListener('change', (e) => {
            if (e.target.value) {
                loanInput.value = e.target.value;
                checkInputsChanged();
            }
        });

        loanInput.addEventListener('input', checkInputsChanged);
    }

    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        if (input.id !== 'loan-term-input' && input.id !== 'loan-term-preset') {
            input.addEventListener('input', checkInputsChanged);
        }
    });

    submitBtn.addEventListener('click', runDiagnosis);

    // Initial validation to set max attributes and initial warnings
    validateLoanTermImmediate();

    // ---------------------------------------------------------
    // UI REFINEMENTS (Ref: Step 855)
    // ---------------------------------------------------------

    // 1. Real-time Age Previews
    const updateAgePreviews = () => {
        const currentAge = parseInt(document.getElementById('current-age').value) || 0;
        const yearsWait = parseInt(document.getElementById('years-wait').value) || 0;
        const yearsOwn = parseInt(document.getElementById('years-own').value) || 0;

        const buyAgeEl = document.getElementById('buyAge');
        const sellAgeEl = document.getElementById('sellAge');
        const totalDispEl = document.getElementById('total-years-display');

        if (buyAgeEl) buyAgeEl.textContent = currentAge + yearsWait;
        if (sellAgeEl) sellAgeEl.textContent = currentAge + yearsWait + yearsOwn;
        if (totalDispEl) totalDispEl.textContent = yearsWait + yearsOwn;
    };

    const simInputs = ['current-age', 'years-wait', 'years-own'];
    simInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', updateAgePreviews);
    });
    updateAgePreviews();

    // ---------------------------------------------------------
    // Philosophy Modal Logic
    // ---------------------------------------------------------
    const philBtn = document.getElementById('philosophy-btn');
    window.closePhilosophyModal = () => {
        document.getElementById('philosophy-modal').style.display = 'none';
        document.getElementById('philosophy-backdrop').style.display = 'none';
    };
    window.openPhilosophyModal = () => {
        document.getElementById('philosophy-modal').style.display = 'block';
        document.getElementById('philosophy-backdrop').style.display = 'block';
    };
    if (philBtn) philBtn.addEventListener('click', openPhilosophyModal);

    // ---------------------------------------------------------
    // Light Diagnosis Wiring (Phase 1 & 3)
    // ---------------------------------------------------------
    const lightAge = document.getElementById('light-age');
    const lightIncome = document.getElementById('light-income');
    const lightRent = document.getElementById('light-rent');
    const baseAge = document.getElementById('current-age');
    const baseRent = document.getElementById('rent-monthly');

    if (lightAge && baseAge) {
        lightAge.addEventListener('input', (e) => {
            baseAge.value = e.target.value;
            // Removed runDiagnosis() for manual control (Phase 3)
        });
    }

    if (lightRent && baseRent) {
        lightRent.addEventListener('input', (e) => {
            baseRent.value = e.target.value;
        });
    }

    // Income sync (Mental model only as per previous plan, but let's sync if target exists)
    // In this codebase, income doesn't map to a specific calc input, but we keep the structure.

    // 2. Tooltip Logic
    const TOOLTIP_TEXTS = {
        maintenance: `• マンションは 管理費＋修繕積立金 の合計目安です。\n• 戸建ては管理費がないため、将来の外壁・屋根・給湯器などに備えて 修繕積立（自分で積む） を推奨します。\n\n目安：\n・築浅〜60㎡：2.0〜3.0万/月\n・築古〜60㎡：2.6〜3.8万/月\n・築浅70㎡〜：2.5〜3.5万/月\n・築古70㎡〜：3.0〜4.0万/月\n・戸建て積立：2.0〜4.0万/月（迷ったら2.5万）`,
        tax: `• 固定資産税は 自治体・評価額・新築軽減で金額が変わります。\n\n目安：\n・マンション：6〜16万/年（広さ・築年で変動）\n・戸建て：10〜25万/年（建物＋土地。迷ったら15万）`,
        resale: `• 「購入価格の何％で売れるか」の目安です（相場や築年数で変動）。\n\n目安：\n・楽観：100〜110%\n・現実：80〜90%\n・最悪：60〜70%\n\n戸建ては 建物は下がりやすく、\n土地は残りやすいため立地で差が出ます。`
    };

    window.closeModal = () => {
        document.getElementById('coming-soon-modal').style.display = 'none';
        document.getElementById('modal-backdrop').style.display = 'none';
    };
    window.openModal = () => {
        document.getElementById('coming-soon-modal').style.display = 'block';
        document.getElementById('modal-backdrop').style.display = 'block';
    };

    document.querySelectorAll('.info-icon').forEach(icon => {
        const handler = () => {
            const key = icon.getAttribute('data-tooltip');
            const text = TOOLTIP_TEXTS[key] || "";
            if (text) alert(text); // Basic alert as fallback for "existing system"
        };
        icon.addEventListener('click', handler);
        icon.addEventListener('mouseenter', () => { icon.style.opacity = "1"; });
        icon.addEventListener('mouseleave', () => { icon.style.opacity = "0.7"; });
    });


});

// --- Scenario Lab (Robust Implementation) ---

function mountScenarioLab() {
    const resultsSection = document.querySelector('.results-section');
    if (!resultsSection) return;

    // resultsSection が表示されていない場合でも、runDiagnosis内で display:block にしている想定
    // 念のため
    if (resultsSection.style.display === 'none') resultsSection.style.display = 'block';

    // 既存があれば再利用
    let lab = document.getElementById('scenario-lab');
    const isNewLab = !lab;
    if (isNewLab) {
        lab = document.createElement('div');
        lab.id = 'scenario-lab';
        lab.className = 'scenario-lab';
        // 初期は閉じる
        lab.dataset.collapsed = "1";
        lab.style.display = "none";
    }

    // ✅ トグルボタンの追加（重複防止）
    let toggleBtn = document.getElementById('more-diagnosis-toggle');
    if (!toggleBtn) {
        toggleBtn = document.createElement('button');
        toggleBtn.id = 'more-diagnosis-toggle';
        toggleBtn.className = 'more-diagnosis-toggle';
        toggleBtn.type = 'button';
        toggleBtn.textContent = (lab.style.display === 'none') ? 'さらに診断する！' : '詳細設定を閉じる';

        // 挿入位置：resultsSection の最初の要素（通常見出しや結論メッセージ）の直後に挿入
        if (resultsSection.firstChild) {
            resultsSection.insertBefore(toggleBtn, resultsSection.firstChild.nextSibling);
        } else {
            resultsSection.appendChild(toggleBtn);
        }

        toggleBtn.onclick = () => {
            const isHidden = lab.style.display === 'none';
            if (isHidden) {
                lab.style.display = 'block';
                lab.dataset.collapsed = "0";
                toggleBtn.textContent = '詳細設定を閉じる';
                // スムーズスクロール
                setTimeout(() => {
                    lab.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
            } else {
                lab.style.display = 'none';
                lab.dataset.collapsed = "1";
                toggleBtn.textContent = 'さらに診断する！';
            }
        };
    }

    // ✅ “結果直下（トグルボタンの下）” を保証
    const recalcPlaceholder = document.getElementById('recalc-panel');
    if (recalcPlaceholder) {
        recalcPlaceholder.appendChild(lab);
        lab.style.display = 'block';
    } else {
        resultsSection.insertBefore(lab, toggleBtn.nextSibling);
    }

    // UI描画（毎回上書きでOK）
    lab.innerHTML = `
    <div class="scenario-lab__inner">
      <div class="scenario-tabs">
        <button type="button" class="scenario-tab active" data-mode="simple">かんたん</button>
        <button type="button" class="scenario-tab" data-mode="pro">実務</button>
      </div>

      <div class="scenario-lab__grid">
        <!-- Sliders -->
        <div class="scenario-item-full is-pro-only">
            <label class="scenario-slider-label">ローン年数: <span id="loan-term-display">${document.getElementById('loan-term-input')?.value || 35}</span>年</label>
            <div class="scenario-slider-container">
              <input type="range" class="scenario-slider" min="1" max="50" value="${document.getElementById('loan-term-input')?.value || 35}" 
                     oninput="document.getElementById('loan-term-input').value = this.value; document.getElementById('loan-term-display').textContent = this.value; checkInputsChanged();"
                     onchange="runDiagnosis({ skipScroll: true }); updateScenarioStatus();">
            </div>
        </div>
        <div class="scenario-item-full" style="order: -1;">
            <label class="scenario-residency-label">居住年数（売却タイミング）: <span id="scenario-years-display">${document.getElementById('years-own')?.value || 35}</span>年</label>
            <div class="scenario-slider-container" style="position: relative;">
                <input type="range" id="scenario-years-slider" class="scenario-years-slider" min="1" max="50" step="1" 
                    value="${document.getElementById('years-own')?.value || 35}">
                <div id="scenario-breakeven-marker" class="scenario-breakeven-marker" title="損益分岐点" style="display:none;"></div>
            </div>
        </div>

        <!-- 2-column Nudges -->
        <div class="scenario-item">
            <div class="scenario-label-mini">物件価格</div>
            <div class="scenario-nudge">
                <button type="button" class="scenario-nudge-btn" data-nudge="price" data-dir="-1">−</button>
                <div class="scenario-nudge-val">${(Number(document.getElementById('buy-price')?.value) || 5000).toLocaleString()}万</div>
                <button type="button" class="scenario-nudge-btn" data-nudge="price" data-dir="1">＋</button>
            </div>
        </div>
        <div class="scenario-item">
            <div class="scenario-label-mini">金利</div>
            <div class="scenario-nudge">
                <button type="button" class="scenario-nudge-btn" data-nudge="rate" data-dir="-1">−</button>
                <div class="scenario-nudge-val">${(Number(document.getElementById('buy-rate')?.value) || 0.5).toFixed(1)}%</div>
                <button type="button" class="scenario-nudge-btn" data-nudge="rate" data-dir="1">＋</button>
            </div>
        </div>
        <div class="scenario-item">
            <div class="scenario-label-mini">管理費・修繕費</div>
            <div class="scenario-nudge">
                <button type="button" class="scenario-nudge-btn" data-nudge="mgmt" data-dir="-1">−</button>
                <div class="scenario-nudge-val">${(Number(document.getElementById('buy-mgmt')?.value) / 1000 || 25).toLocaleString()}k</div>
                <button type="button" class="scenario-nudge-btn" data-nudge="mgmt" data-dir="1">＋</button>
            </div>
        </div>
        <div class="scenario-item is-pro-only">
            <div class="scenario-label-mini">売却補正</div>
            <div class="scenario-nudge">
                <button type="button" class="scenario-nudge-btn" data-nudge="resale" data-dir="-1">−</button>
                <div class="scenario-nudge-val">${document.getElementById('buy-resale')?.value || 85}%</div>
                <button type="button" class="scenario-nudge-btn" data-nudge="resale" data-dir="1">＋</button>
            </div>
        </div>
      </div>
      
      <div class="scenario-lab__footer">
        <div id="scenario-active-label" class="scenario-active-label"></div>
        <div class="scenario-reset-container">
            <div class="scenario-reset-note">※ 居住年数・ローン年数は保持されます</div>
            <button id="scenario-reset" class="scenario-reset" type="button" style="display:none;">詳細条件だけ初期値に戻す</button>
        </div>
      </div>
    </div>
    `;

    // タブ切り替えロジック
    lab.querySelectorAll('.scenario-tab').forEach(tab => {
        tab.onclick = () => {
            lab.querySelectorAll('.scenario-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.mode === 'pro') {
                lab.classList.add('is-pro-mode');
            } else {
                lab.classList.remove('is-pro-mode');
            }
        };
    });

    // イベント付与
    lab.querySelectorAll('button[data-scn]').forEach(btn => {
        btn.onclick = () => applyScenario(btn.dataset.scn, btn.textContent);
    });

    // 金利プリセットのイベント
    lab.querySelectorAll('.scenario-preset-btn').forEach(btn => {
        btn.onclick = () => {
            const ids = ['buy-rate', 'interestRate', 'interest-rate', 'loanRate', 'rate', 'loan-rate', 'interestRatePct'];
            const rateInput = findElByIds(ids);
            if (rateInput) {
                rateInput.value = btn.dataset.rate;
                // 保存
                if (!window.__scenarioOriginalInputs) {
                    const fields = ['current-age', 'years-wait', 'years-own', 'loan-term-input', 'rent-monthly', 'rent-mgmt', 'rent-renewal', 'rent-initial', 'buy-price', 'buy-rate', 'buy-initial-pct', 'buy-mgmt', 'buy-tax', 'buy-resale'];
                    window.__scenarioOriginalInputs = {};
                    fields.forEach(id => {
                        const el = document.getElementById(id);
                        if (el) window.__scenarioOriginalInputs[id] = el.value;
                    });
                    const rbtn = document.getElementById('scenario-reset');
                    if (rbtn) rbtn.style.display = 'block';
                }
                if (typeof runDiagnosis === 'function') runDiagnosis();
                if (typeof updateScenarioStatus === 'function') updateScenarioStatus();
            }
        };
    });

    const resetBtn = document.getElementById('scenario-reset');
    if (resetBtn) {
        resetBtn.onclick = resetScenario;
        // Always show if Scenario Lab is open (user requirement)
        resetBtn.style.display = 'block';
    }

    // ステータス復元
    if (window.__scenarioActiveLabel) {
        const labelEl = document.getElementById('scenario-active-label');
        if (labelEl) labelEl.textContent = `適用中：${window.__scenarioActiveLabel}`;
    }

    // Residency Slider Sync
    const scnSlider = document.getElementById('scenario-years-slider');
    const scnDisplay = document.getElementById('scenario-years-display');
    const mainYearsInp = document.getElementById('years-own');
    if (scnSlider && mainYearsInp) {
        scnSlider.value = mainYearsInp.value;
        if (scnDisplay) scnDisplay.textContent = mainYearsInp.value;

        // Ensure slider is interactive and above marker
        scnSlider.style.position = 'relative';
        scnSlider.style.zIndex = '2';
        scnSlider.style.pointerEvents = 'auto';

        const scnMarkerEl = document.getElementById('scenario-breakeven-marker');
        if (scnMarkerEl) {
            scnMarkerEl.style.pointerEvents = 'none';
            scnMarkerEl.style.zIndex = '1';
        }

        scnSlider.oninput = () => {
            window.__scenarioYearsTouched = true;
            mainYearsInp.value = scnSlider.value;
            if (scnDisplay) scnDisplay.textContent = scnSlider.value;
        };

        scnSlider.onchange = () => {
            if (typeof runDiagnosis === 'function') runDiagnosis({ skipScroll: true });
            if (typeof updateScenarioStatus === 'function') updateScenarioStatus();
        };

        // main -> scn sync
        mainYearsInp.addEventListener('input', () => {
            window.__scenarioYearsTouched = true;
            scnSlider.value = mainYearsInp.value;
            if (scnDisplay) scnDisplay.textContent = mainYearsInp.value;
        });

        // Final Verify (SelfCheck)
        setTimeout(() => {
            if (typeof selfCheckScenarioUI === 'function') selfCheckScenarioUI();
        }, 100);
    }

    // ===== Nudge (Press & Hold) - Safe Stop Guard =====
    if (typeof __stopNudge === 'undefined') {
        window.__nudgeTimer = null;
        window.__nudgeHold = false;

        window.__stopNudge = function () {
            window.__nudgeHold = false;
            if (window.__nudgeTimer) {
                clearInterval(window.__nudgeTimer);
                window.__nudgeTimer = null;
            }
        };

        window.__startNudge = function (fn) {
            window.__stopNudge();
            window.__nudgeHold = true;
            fn(); // 1回目は即時
            window.__nudgeTimer = setInterval(() => {
                if (!window.__nudgeHold) return;
                fn();
            }, 120);
        };

        window.__bindNudgeStopEvents = function () {
            const stopEvents = ['pointerup', 'pointercancel', 'mouseup', 'touchend', 'touchcancel'];
            stopEvents.forEach(ev => window.addEventListener(ev, window.__stopNudge, { passive: true }));
            window.addEventListener('blur', window.__stopNudge);
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) window.__stopNudge();
            });
        };

        if (!window.__scenarioNudgeStopBound) {
            window.__scenarioNudgeStopBound = true;
            window.__bindNudgeStopEvents();
        }
    }

    lab.querySelectorAll('.scenario-nudge-btn').forEach(btn => {
        const kind = btn.dataset.nudge;
        const dir = Number(btn.dataset.dir || 0);

        // クリック（単発）
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.__stopNudge();
            nudgeScenarioValue(kind, dir);
        });

        // 長押し開始
        btn.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            if (btn.setPointerCapture) btn.setPointerCapture(e.pointerId);
            window.__startNudge(() => nudgeScenarioValue(kind, dir));
        });

        // 保険の停止
        btn.addEventListener('pointerup', window.__stopNudge);
        btn.addEventListener('pointercancel', window.__stopNudge);
    });

    // 詳細条件表示の更新
    updateScenarioStatus();
}

// 既存UIの入力欄IDが環境により揺れている可能性があるので、候補を複数持ちます
function applyScenario(scnKey, label) {
    const getEl = (ids) => {
        for (const id of ids) {
            const el = document.getElementById(id);
            if (el) return el;
        }
        return null;
    };

    // 1. 初回適用時に現在の入力値を保存
    if (!window.__scenarioOriginalInputs) {
        const fields = [
            'current-age', 'years-wait', 'years-own', 'loan-term-input',
            'rent-monthly', 'rent-mgmt', 'rent-renewal', 'rent-initial',
            'buy-price', 'buy-rate', 'buy-initial-pct', 'buy-mgmt', 'buy-tax', 'buy-resale'
        ];
        window.__scenarioOriginalInputs = {};
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) window.__scenarioOriginalInputs[id] = el.value;
        });
    }

    // 主要フィールド候補
    const elBuyRate = getEl(['buy-rate', 'interest-rate', 'interestRate', 'interestRatePct']);
    const elRentMonthly = getEl(['rent-monthly', 'light-rent', 'rentMonthly']);
    const elResalePct = getEl(['buy-resale', 'resale-value', 'resaleValuePct']);
    const elBuyMgmt = getEl(['buy-mgmt', 'management-fee', 'buyMgmt']);
    const elRentMgmt = getEl(['rent-mgmt', 'rentMgmt']);

    // 値の更新（存在するものだけ更新）
    if (scnKey === 'rate_up' && elBuyRate) {
        const v = parseFloat(elBuyRate.value || '0');
        elBuyRate.value = String(v + 0.1);
    }

    if (scnKey === 'rent_up' && elRentMonthly) {
        const v = parseFloat(elRentMonthly.value || '0');
        elRentMonthly.value = String(v + 5000);
    }

    if (scnKey === 'resale_down' && elResalePct) {
        const v = parseFloat(elResalePct.value || '0');
        if (!Number.isNaN(v)) elResalePct.value = String(Math.max(0, v - 10));
    }

    if (scnKey === 'mgmt_up') {
        const target = elBuyMgmt || elRentMgmt;
        if (target) {
            const v = parseFloat(target.value || '0');
            target.value = String(v + 5000);
        }
    }

    // 適用中ラベルを保存
    window.__scenarioActiveLabel = label;

    // ✅ 既存ロジックで再計算
    setTimeout(() => {
        if (typeof runDiagnosis === 'function') {
            runDiagnosis({ skipScroll: true });
            updateScenarioStatus();
        }
    }, 0);
}

function resetScenario() {
    if (!window.__scenarioOriginalInputs) return;

    // Reset touch flag
    window.__scenarioYearsTouched = false;

    // 保存しておいた値を反映
    Object.keys(window.__scenarioOriginalInputs).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = window.__scenarioOriginalInputs[id];
    });

    // Sync Scenario Lab UI (Residency)
    const scnSlider = document.getElementById('scenario-years-slider');
    const scnDisplay = document.getElementById('scenario-years-display');
    const originalYears = (window.__scenarioOriginalInputs && window.__scenarioOriginalInputs['years-own']) || 35;
    if (scnSlider) scnSlider.value = String(originalYears);
    if (scnDisplay) scnDisplay.textContent = String(originalYears);

    // 状態クリア
    window.__scenarioOriginalInputs = null;
    window.__scenarioActiveLabel = null;
    window.__scenarioYearsTouched = false;

    // 再計算
    if (typeof runDiagnosis === 'function') {
        runDiagnosis({ skipScroll: true });
        updateScenarioStatus();
    }
}

function nudgeScenarioValue(kind, dir) {
    // dir: +1 or -1
    const bump = (idList, delta, min, max, step) => {
        // 代表inputを拾う（既存のID揺れ吸収ロジックに合わせる）
        let el = null;
        for (const id of idList) {
            el = document.getElementById(id);
            if (el) break;
        }
        if (!el) return;

        // 保存（元に戻す機能を活かすため初回のみ保存）
        if (!window.__scenarioOriginalInputs) {
            const fields = [
                'current-age', 'years-wait', 'years-own', 'loan-term-input',
                'rent-monthly', 'rent-mgmt', 'rent-renewal', 'rent-initial',
                'buy-price', 'buy-rate', 'buy-initial-pct', 'buy-mgmt', 'buy-tax', 'buy-resale'
            ];
            window.__scenarioOriginalInputs = {};
            fields.forEach(id => {
                const inp = document.getElementById(id);
                if (inp) window.__scenarioOriginalInputs[id] = inp.value;
            });
            // 元に戻すボタンを表示
            const resetBtn = document.getElementById('scenario-reset');
            if (resetBtn) resetBtn.style.display = 'block';
        }

        const cur = Number(el.value || 0);
        const nextRaw = cur + (delta * dir);
        const clamped = Math.max(min, Math.min(max, nextRaw));
        const snapped = Math.round(clamped / step) * step;
        el.value = String(snapped);
    };

    // UI微調整の量（計算ロジックは既存のまま）
    if (kind === 'rate') {
        bump(['buy-rate', 'interestRate', 'interest-rate', 'loanRate', 'rate'], 0.1, 0, 20, 0.1);
    }
    if (kind === 'rent') {
        bump(['rent-monthly', 'light-rent', 'rentMonthly', 'rent', 'currentRent', 'monthlyRent'], 5000, 0, 1000000, 1000);
    }
    if (kind === 'resale') {
        bump(['buy-resale', 'resale-value', 'resaleValuePct', 'resaleValue'], 1, -100, 100, 1);
    }
    if (kind === 'mgmt') {
        bump(['buy-mgmt', 'management-fee', 'maintenanceFee', 'mgmtFee', 'rent-mgmt', 'rentMgmt', 'maintenance', 'monthlyMaintenance'], 5000, 0, 500000, 1000);
    }
    if (kind === 'price') {
        bump(['buy-price', 'propertyPrice', 'price'], 100, 100, 50000, 50); // 万単位
    }
    if (kind === 'loan_term') {
        bump(['loan-term-input', 'loanTerm', 'years'], 1, 1, 50, 1);
    }

    // 再計算
    if (typeof runDiagnosis === 'function') runDiagnosis({ skipScroll: true });
    if (typeof updateScenarioStatus === 'function') updateScenarioStatus();
}

function findElByIds(ids) {
    for (const id of ids) {
        const el = document.getElementById(id);
        if (el) return el;
    }
    return null;
}

function readNumberValue(ids) {
    const el = findElByIds(ids);
    if (!el) return null;
    const v = (el.value ?? "").toString().replace(/,/g, "").trim();
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
}

function fmtYen(n) {
    if (n == null) return "—";
    return "¥" + Math.round(n).toLocaleString("ja-JP");
}

function fmtPct(n) {
    if (n == null) return "—";
    return (Math.round(n * 1000) / 1000) + "%";
}

function updateScenarioStatus() {
    const box = document.getElementById("scenario-status-body");
    const stickyText = document.getElementById("sticky-status-text");
    if (!box && !stickyText) return;

    // applyScenario の getEl と同じ優先順位で取得
    const rate = readNumberValue(['buy-rate', 'interest-rate', 'interestRate', 'interestRatePct', 'loanRate', 'rate', 'loan-rate']);
    const rent = readNumberValue(['rent-monthly', 'light-rent', 'rentMonthly', 'rent', 'currentRent', 'monthlyRent']);
    const price = readNumberValue(['buy-price', 'buyPrice', 'price', 'purchasePrice', 'propertyPrice']);
    const resalePct = readNumberValue(['buy-resale', 'resale-value', 'resaleValuePct']);
    const maint = readNumberValue(['buy-mgmt', 'management-fee', 'buyMgmt', 'rent-mgmt', 'rentMgmt', 'maintenance', 'maintenanceFee', 'mgmtFee', 'monthlyMaintenance', 'repairMonthly']);

    // 物件価格は「万円」単位なので表示時に調整
    const displayPrice = price != null ? price * 10000 : null;

    const statusStr = `ローン金利: ${fmtPct(rate)} / 家賃: ${fmtYen(rent)} / 購入価格: ${fmtYen(displayPrice)} / 売りやすさ: ${resalePct != null ? resalePct + '%' : '—'} / 維持費: ${fmtYen(maint)}`;

    if (box) box.textContent = statusStr;
    if (stickyText) stickyText.textContent = statusStr;
}

(function setupRangeSync() {
    function clamp(v, min, max) {
        return Math.max(min, Math.min(max, v));
    }

    function initOne(rangeEl) {
        const targetId = rangeEl.getAttribute('data-target');
        const numEl = document.getElementById(targetId);
        if (!numEl) return;

        const min = Number(rangeEl.min);
        const max = Number(rangeEl.max);

        // 初期同期（number優先）
        const start = (numEl.value !== '' ? Number(numEl.value) : Number(rangeEl.value));
        const safe = clamp(start, min, max);
        numEl.value = String(safe);
        rangeEl.value = String(safe);

        // range -> number
        rangeEl.addEventListener('input', () => {
            const step = Number(rangeEl.step || 1);
            const raw = Number(rangeEl.value || 0);
            const clamped = clamp(raw, min, max);
            const snapped = Math.round(clamped / step) * step;
            rangeEl.value = String(snapped);
            numEl.value = String(snapped);
        });

        // number -> range
        numEl.addEventListener('input', () => {
            const step = Number(rangeEl.step || 1);
            const raw = Number(numEl.value || 0);
            const clamped = clamp(raw, min, max);
            const snapped = Math.round(clamped / step) * step;
            numEl.value = String(snapped);
            rangeEl.value = String(snapped);
        });
    }

    // DOM準備後に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.range-sync').forEach(initOne);
        });
    } else {
        document.querySelectorAll('.range-sync').forEach(initOne);
    }
})();

// ===== Breakeven Analysis & Dynamic UI (Strict PhC) =====
function updateBreakevenAnalysis(baseInputs) {
    const resultsSection = document.querySelector('.results-section');
    const yearsOwnInp = document.getElementById('years-own');
    const badge = document.getElementById('breakeven-badge');
    if (!resultsSection || !yearsOwnInp || !badge) return;

    // 2. Ensure Residency Slider & Marker
    let wrapper = yearsOwnInp.closest('.residency-slider-wrapper');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className = 'residency-slider-wrapper';
        yearsOwnInp.parentNode.insertBefore(wrapper, yearsOwnInp.nextSibling);

        // Create range slider
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.className = 'range-sync';
        slider.dataset.target = 'years-own';
        slider.min = '1';
        slider.max = '50';
        slider.step = '1';
        slider.value = yearsOwnInp.value;
        slider.style.width = '100%';
        wrapper.appendChild(slider);

        // Create marker
        const marker = document.createElement('div');
        marker.className = 'breakeven-marker';
        marker.id = 'breakeven-marker';
        marker.style.display = 'none';
        wrapper.appendChild(marker);

        // Initialize sync (since it's dynamically added)
        if (window.setupRangeSyncOne) {
            window.setupRangeSyncOne(slider);
        } else {
            // Manual sync fallback
            slider.addEventListener('input', () => { yearsOwnInp.value = slider.value; checkInputsChanged(); });
            yearsOwnInp.addEventListener('input', () => { slider.value = yearsOwnInp.value; });
        }
    }

    // 3. Calculation Search (1-50 years)
    let breakevenYear = null;
    for (let y = 1; y <= 50; y++) {
        // Clone inputs and test
        const testInputs = { ...baseInputs, yearsOwn: y };
        const res = calculateRentVsBuy(testInputs);
        if (res.winner === 'buy') {
            breakevenYear = y;
            break;
        }
    }

    // 4. Update Badge UI
    if (breakevenYear) {
        badge.innerHTML = `<span>⚖️ 損益分岐点</span> <strong>${breakevenYear}年目</strong>`;
        badge.style.display = 'flex';
    } else {
        badge.innerHTML = `<span>⚖️ 損益分岐点</span> <strong>未到達</strong>`;
        badge.style.border = '1px solid #fecaca';
        badge.style.background = '#fef2f2';
    }

    // 5. Update Marker Positioning
    const marker = document.getElementById('breakeven-marker');
    const scnMarker = document.getElementById('scenario-breakeven-marker');

    // Robust year retrieval: try internal var, then try parsing DOM
    let finalBreakeven = breakevenYear;
    if (finalBreakeven === null) {
        const badgeText = badge.textContent || "";
        const m = badgeText.match(/(\d+)\s*年目/);
        if (m) finalBreakeven = parseInt(m[1], 10);
    }

    const updatePos = (m) => {
        if (!m) return;
        if (finalBreakeven && finalBreakeven <= 50) {
            m.style.display = 'block';
            // Correct mapping for 1-50 years on the slider track
            const pct = (Math.max(1, Math.min(50, finalBreakeven)) - 1) / (49) * 100;
            m.style.left = `calc(${pct}% + 4px)`;
            m.style.pointerEvents = 'none'; // Ensure no blocking
            m.style.zIndex = '1';
        } else {
            m.style.display = 'none';
        }
    };

    updatePos(marker);
    updatePos(scnMarker);
}

// Support for dynamic slider sync
if (typeof window.setupRangeSyncOne === 'undefined') {
    window.setupRangeSyncOne = function (rangeEl) {
        function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
        const targetId = rangeEl.getAttribute('data-target');
        const numEl = document.getElementById(targetId);
        if (!numEl) return;
        const min = Number(rangeEl.min);
        const max = Number(rangeEl.max);
        rangeEl.addEventListener('input', () => {
            const step = Number(rangeEl.step || 1);
            const raw = Number(rangeEl.value || 0);
            const snapped = Math.round(clamp(raw, min, max) / step) * step;
            numEl.value = String(snapped);
            if (typeof checkInputsChanged === 'function') checkInputsChanged();
        });
        numEl.addEventListener('input', () => {
            rangeEl.value = numEl.value;
        });
    };
}

// Developer Self-Check (Safety Verification)
function selfCheckScenarioUI() {
    const slider = document.getElementById('scenario-years-slider');
    const marker = document.getElementById('scenario-breakeven-marker');
    if (slider) {
        if (getComputedStyle(slider).pointerEvents === 'none') {
            console.warn('Slider pointer-events is "none"! Forcing "auto".');
            slider.style.setProperty('pointer-events', 'auto', 'important');
        }
        if (getComputedStyle(slider).zIndex === 'auto' || parseInt(getComputedStyle(slider).zIndex) < 5) {
            slider.style.zIndex = '10';
        }
    }
    if (marker) {
        marker.style.pointerEvents = 'none';
        if (parseInt(getComputedStyle(marker).zIndex) >= parseInt(getComputedStyle(slider).zIndex)) {
            marker.style.zIndex = '1';
        }
    }
}

/**
 * Phase 2: Sync calculated results to the new comparison table and handle modals.
 * Does NOT change calculation logic.
 */
function syncResultUI(res, inputs) {
    const fmt = (num) => '¥' + Math.round(num).toLocaleString('ja-JP');

    // 1. Map Monthly Stats
    const rentMonthlyEl = document.getElementById('rent-monthly-result');
    const buyMonthlyEl = document.getElementById('buy-monthly-result');

    if (rentMonthlyEl) {
        // Rent Monthly = Rent + Mgmt
        rentMonthlyEl.textContent = fmt(inputs.monthlyRent + inputs.mgmtFeeRent);
    }
    if (buyMonthlyEl) {
        // Buy Monthly = Mortgage + Mgmt + (Tax/12)
        // Recalculate monthlyPmt for comparison table display
        const principal = inputs.propertyPrice;
        const r = (inputs.interestRatePct / 100) / 12;
        const n = Math.max(1, inputs.loanTerm * 12);
        let monthlyPmt = 0;
        if (r > 0) {
            monthlyPmt = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        } else {
            monthlyPmt = principal / n;
        }
        const buyMonthlyTotal = monthlyPmt + inputs.monthlyMgmtBuy + (inputs.yearlyPropertyTax / 12);
        buyMonthlyEl.textContent = fmt(buyMonthlyTotal);
    }

    // 2. Map Total Stats
    const rentTotalEl = document.getElementById('rent-total');
    const buyNetEl = document.getElementById('buy-net');
    if (rentTotalEl) rentTotalEl.textContent = fmt(res.rentForever.total);
    if (buyNetEl) buyNetEl.textContent = fmt(res.buyLater.total);

    // 3. Map Win Labels (Disabled for new UI)
    /*
    const rentWin = document.getElementById('rent-win-label');
    const buyWin = document.getElementById('buy-win-label');
    const rowLabelWin = document.querySelector('.win-row .row-label');

    // Clear center label if it exists in HTML
    if (rowLabelWin) rowLabelWin.textContent = '';

    if (rentWin && buyWin) {
        // Comparison based on res.winner (Total Cost)
        rentWin.textContent = res.winner === 'rent' ? 'win!' : '';
        buyWin.textContent = res.winner === 'buy' ? 'win!' : '';
    }
    */

    // 4. Setup Breakdown Modal Triggers
    const rentLink = document.getElementById('rent-breakdown-link');
    const buyLink = document.getElementById('buy-breakdown-link');

    if (rentLink) {
        rentLink.onclick = () => {
            const content = document.getElementById('rent-breakdown');
            if (content) showBreakdownModal('賃貸プランの内訳', content.innerHTML);
        };
    }
    if (buyLink) {
        buyLink.onclick = () => {
            const content = document.getElementById('buy-breakdown');
            if (content) showBreakdownModal('購入プランの内訳', document.getElementById('buy-breakdown').innerHTML);
        };
    }
}

function showBreakdownModal(title, html) {
    const modal = document.getElementById('breakdown-modal');
    const backdrop = document.getElementById('breakdown-backdrop');
    const body = document.getElementById('breakdown-modal-body');
    const header = document.getElementById('breakdown-modal-header');

    if (modal && backdrop && body) {
        header.textContent = title;
        body.innerHTML = html;
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    }
}

function closeBreakdown() {
    const modal = document.getElementById('breakdown-modal');
    const backdrop = document.getElementById('breakdown-backdrop');
    if (modal) modal.style.display = 'none';
    if (backdrop) backdrop.style.display = 'none';
}

// Result CTA Scroll Interaction (Phase 3)
document.addEventListener('DOMContentLoaded', () => {
    const ctaBtn = document.getElementById('cta-to-details');
    const recalcPanel = document.getElementById('recalc-panel');

    if (ctaBtn && recalcPanel) {
        ctaBtn.addEventListener('click', () => {
            const yOffset = -80;
            const y = recalcPanel.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    }
});

/**
 * Calculates a safety score (A-E) based on risk factors in inputs and results.
 * @param {Object} inputs 
 * @param {Object} res 
 * @returns {Object} { rank, message }
 */
function calculateSafetyScore(inputs, res) {
    let score = 100;
    const penalties = [];

    // 1. Loan Term Risk
    if (inputs.loanTerm > 40) {
        score -= 30;
        penalties.push("返済期間が非常に長いです");
    } else if (inputs.loanTerm > 35) {
        score -= 15;
        penalties.push("返済期間が長めです");
    }

    // 2. Interest Rate Risk
    if (inputs.interestRatePct > 2.5) {
        score -= 25;
        penalties.push("金利負担が大きいです");
    } else if (inputs.interestRatePct > 1.2) {
        score -= 10;
        penalties.push("金利上昇リスクがあります");
    }

    // 3. Asset Value Risk (Resale)
    if (inputs.resaleValuePct < 60) {
        score -= 30;
        penalties.push("資産価値が残りにくい想定です");
    } else if (inputs.resaleValuePct < 80) {
        score -= 15;
        penalties.push("売却時の価格下落リスクがあります");
    }

    // 4. Fixed Cost Risk
    const buyMgmt = inputs.monthlyMgmtBuy || 0;
    if (buyMgmt > 35000) {
        score -= 10;
        penalties.push("毎月の維持費が高いです");
    }

    // 5. Margin Risk (Buy winner but small difference)
    if (res.winner === 'buy') {
        const marginPct = (res.diff / inputs.propertyPrice) * 100;
        if (marginPct < 3) {
            score -= 5;
        }
    }

    // Results Mapping
    let rank = 'A';
    let message = '非常に安定した買い方です。';

    if (score >= 90) {
        rank = 'A';
        message = '非常に安定したプランです。将来のリスクも低く抑えられています。';
    } else if (score >= 75) {
        rank = 'B';
        message = '堅実なプランです。標準的なリスク範囲内に収まっています。';
    } else if (score >= 55) {
        rank = 'C';
        message = '調整次第でより安全になります。完済年齢や金利設定に注目しましょう。';
    } else if (score >= 35) {
        rank = 'D';
        message = '注意が必要です。変動リスクに弱いため、条件の再検討をお勧めします。';
    } else {
        rank = 'E';
        message = '今は慎重になるべきです。無理な購入は将来の家計を圧迫する恐れがあります。';
    }

    if (penalties.length > 0 && score < 75) {
        message = `注意点：${penalties.slice(0, 2).join('・')}${penalties.length > 2 ? 'など' : ''}。${message}`;
    }

    return { rank, message };
}

/**
 * Returns a short guide comment based on results and safety rank.
 * @param {Object} res 
 * @param {Object} safety 
 * @returns {string} content
 */
function getGuideComment(res, safety) {
    if (safety.rank === 'D' || safety.rank === 'E') {
        return "まずは安全に買える条件かを優先して確認しましょう。価格や期間の調整がお勧めです。";
    }

    if (res.winner === 'buy') {
        if (safety.rank === 'A' || safety.rank === 'B') {
            return "購入を前向きに検討しやすい条件です。金利上昇時のシミュレーションも試しておきましょう。";
        } else {
            return "購入優位ですが、維持費の変動に注意が必要です。プロモードで詳細条件を確認しましょう。";
        }
    } else {
        return "今は賃貸継続も合理的な選択です。条件を変えて、どこまでなら安全に買えるか探ってみましょう。";
    }
}

/**
 * Helper to render LINE Section
 */
function renderLineSection() {
    const lineContainer = document.getElementById('line-section-container');
    if (!lineContainer) return;

    lineContainer.innerHTML = `
        <div class="line-section">
            <div class="line-section-header">🐰 住宅判断ノートを受け取る</div>
            <div class="line-section-desc">
                LINE登録で以下の特典を無料プレゼント中！
            </div>
            <ul class="line-rewards-list">
                <li>住宅判断チェックリスト</li>
                <li>金利上昇シミュレーター</li>
                <li>住宅タイプ診断（戸建 vs マンション）</li>
            </ul>
            <a href="https://line.me/R/ti/p/@placeholder" target="_blank" class="line-cta-btn">
                LINEで受け取る
            </a>
        </div>
    `;
}

/**
 * Helper to render Personality Type Section
 */
function renderPersonalityType(safety) {
    const container = document.getElementById('personality-type-container');
    if (!container) return;

    let typeName = '合理型';
    let typeClass = 'type-rational';
    let typeIcon = '⚖️';
    let typeDesc = 'コストとリスクのバランスを重視する判断タイプです。';

    if (safety.rank === 'A') {
        typeName = '安全型';
        typeClass = 'type-safe';
        typeIcon = '🛡️';
        typeDesc = '石橋を叩いて渡る、非常に手堅い判断タイプです。';
    } else if (safety.rank === 'B') {
        typeName = '合理型';
        typeClass = 'type-rational';
        typeIcon = '⚖️';
        typeDesc = '根拠に基づき、最適な選択を導き出すバランス重視タイプです。';
    } else if (safety.rank === 'C') {
        typeName = '慎重型';
        typeClass = 'type-cautious';
        typeIcon = '🧐';
        typeDesc = '検討を重ね、納得感を大切にするリスク回避タイプです。';
    } else {
        typeName = '挑戦型';
        typeClass = 'type-challenger';
        typeIcon = '🚀';
        typeDesc = 'チャンスを逃さず、果敢にチャレンジするアクティブタイプです。';
    }

    container.innerHTML = `
        <div class="personality-type-wrapper ${typeClass}">
            <div class="personality-card">
                <div class="personality-card-header">あなたの住宅判断タイプ</div>
                <div class="personality-card-body">
                    <div class="personality-icon-placeholder">${typeIcon}</div>
                    <div class="personality-type-name">${typeName}</div>
                    <div class="personality-type-desc">${typeDesc}</div>
                </div>
            </div>
        </div>
    `;
}
