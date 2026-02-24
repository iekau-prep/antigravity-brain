// 🧠 Calculator Logic (Refactor for "Buy Later" Flow)

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
    const n = loanTerm * 12;

    let monthlyPmt = 0;
    if (r > 0) {
        monthlyPmt = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
        monthlyPmt = principal / n;
    }

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

    const resaleValue = propertyPrice * (resaleValuePct / 100);
    const equity = resaleValue - remainingDebt;

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
                resale: resaleValue,
                debt: remainingDebt
            }
        }
    };
}

// 🎮 UI Interaction

let committedInputs = null;

function getInputsFromUI() {
    const getVal = (id) => parseFloat(document.getElementById(id).value) || 0;
    const getValInt = (id) => parseInt(document.getElementById(id).value) || 0;

    return {
        currentAge: getValInt('current-age'),
        yearsWait: getValInt('years-wait'),
        yearsOwn: getValInt('years-own'),
        loanTerm: getValInt('loan-term-input'),
        monthlyRent: getVal('rent-monthly'),
        mgmtFeeRent: getVal('rent-mgmt'),
        renewalFeeMonths: getVal('rent-renewal'),
        detailsInitialRentMonths: getVal('rent-initial'),
        propertyPrice: getVal('buy-price') * 10000,
        interestRatePct: getVal('buy-rate'),
        initialBuyCostPct: getVal('buy-initial-pct'),
        monthlyMgmtBuy: getVal('buy-mgmt'),
        yearlyPropertyTax: getVal('buy-tax'),
        resaleValuePct: getVal('buy-resale')
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

function runDiagnosis() {
    validateLoanTermImmediate(); // Final safety check
    const inputs = getInputsFromUI();

    // 2. Commit State
    committedInputs = { ...inputs };

    // 3. UI Updates
    document.getElementById('total-years-display').textContent = inputs.yearsWait + inputs.yearsOwn;
    document.getElementById('update-hint').style.display = 'none';
    document.getElementById('submit-button').textContent = '診断を更新する';

    // Show results section
    document.querySelector('.results-section').style.display = 'block';

    // 4. Calculate & Render
    const result = calculateRentVsBuy(inputs);
    renderResults(result, inputs);
    renderCautionBox(inputs);
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

    if (res.winner === 'buy') {
        resultHeader.className = 'winner-buy';
        resultHeader.textContent = '🎉 購入プランがお得！';
        resultText.innerHTML = `${timelineText}プランの方が、<br>ずっと賃貸より<strong>${fmt(res.diff)}</strong>安く済みそうです。`;
    } else {
        resultHeader.className = 'winner-rent';
        resultHeader.textContent = '📉 賃貸継続がお得！';
        resultText.innerHTML = `無理に${timelineText}よりも、<br>ずっと賃貸の方が<strong>${fmt(res.diff)}</strong>安く済みそうです。`;
    }

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

    document.getElementById('buy-breakdown').innerHTML = `
        ${phase1Text}
        購入期間(${res.yearsOwn}年): 実質${fmt(res.buyLater.phase2Net)}<br>
        <span style="color:#64748b; font-size:0.75rem;">(資産価値: -${fmt(res.buyLater.equity)} を控除済)</span>
    `;

    updatePersonalityResult(res, inputs); // Pass inputs for age context if needed
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
});
