// --- ロジック層 ---

// 1. 計算の基本関数（最小限のロジック）
function calculateRentVsBuy(inputs) {
    const {
        currentRent,
        buyPrice,
        downPayment,
        interestRatePct,
        loanTerm,
        yearsOwned
    } = inputs;

    // --- 賃貸シナリオ ---
    // 管理費込の家賃 * 12ヶ月 * 居住年数
    // （※初期バージョンとして更新料などは省略または簡略化）
    const rentMonthlyTotal = currentRent * 12 * yearsOwned;
    // 2年に1回の更新料(1ヶ月分)を一旦概算追加(legacyから移植)
    const renewalCount = Math.floor(yearsOwned / 2);
    const rentRenewalTotal = currentRent * renewalCount;
    const scenarioRentTotal = rentMonthlyTotal + rentRenewalTotal;

    // --- 購入シナリオ ---
    const loanAmount = Math.max(0, buyPrice - downPayment);
    // 初期費用（物件価格の7%と仮定）
    const initialCost = buyPrice * 0.07;

    // ローン計算
    const r = (interestRatePct / 100) / 12;
    const n = Math.max(1, loanTerm * 12);
    let monthlyPmt = 0;
    if (r > 0) {
        monthlyPmt = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
        monthlyPmt = loanAmount / n;
    }
    if (isNaN(monthlyPmt)) monthlyPmt = 0;

    // 支払いトータル（居住年数分、ただしローン年数を上限とする）
    const monthsPaying = Math.min(yearsOwned * 12, n);
    const totalMortgagePaid = monthlyPmt * monthsPaying;

    // 残債計算
    let remainingDebt = 0;
    if (monthsPaying < n) {
        if (r > 0) {
            remainingDebt = loanAmount * (Math.pow(1 + r, n) - Math.pow(1 + r, monthsPaying)) / (Math.pow(1 + r, n) - 1);
        } else {
            remainingDebt = loanAmount - (loanAmount / n * monthsPaying);
        }
    }

    // ランニングコスト（管理費修繕積立金 2.5万円/月、固定資産税 1.5万円/年と仮定。本来は入力だが今回は簡略化して固定）
    // NOTE: minimal requirement asked for only limited inputs
    const monthlyMgmtBuy = 25000;
    const yearlyTax = 150000;
    const buyRecurring = (monthlyMgmtBuy * 12 * yearsOwned) + (yearlyTax * yearsOwned);

    // 売却想定（資産価値85%と仮定）
    const resalePrice = buyPrice * 0.85;
    const sellingCost = resalePrice * 0.04;
    const netAfterSale = resalePrice - remainingDebt - sellingCost;

    // 購入の実質コスト = 出費の総額 - 売却手取り
    const cashOutTotal = downPayment + initialCost + totalMortgagePaid + buyRecurring;
    const scenarioBuyTotal = cashOutTotal - netAfterSale;

    // 差額判定
    const diff = scenarioRentTotal - scenarioBuyTotal;
    const winner = diff > 0 ? 'buy' : 'rent';

    return {
        winner,
        diff: Math.abs(diff),
        scenarioRentTotal,
        scenarioBuyTotal,
        yearsOwned
    };
}

// 2. 損益分岐点計算
function calculateBreakevenYears(inputs) {
    let year = 1;
    const maxYears = 50;

    while (year <= maxYears) {
        const testInputs = { ...inputs, yearsOwned: year };
        const result = calculateRentVsBuy(testInputs);
        if (result.winner === 'buy') {
            return year;
        }
        year++;
    }
    return null;
}

// --- UI層 ---

function getInputsFromUI() {
    return {
        currentRent: parseFloat(document.getElementById('current-rent').value) || 0,
        buyPrice: (parseFloat(document.getElementById('buy-price').value) || 0) * 10000,
        downPayment: (parseFloat(document.getElementById('down-payment').value) || 0) * 10000,
        interestRatePct: parseFloat(document.getElementById('interest-rate').value) || 0,
        loanTerm: parseFloat(document.getElementById('loan-term').value) || 0,
        yearsOwned: parseFloat(document.getElementById('years-owned').value) || 0
    };
}

function renderResults(result, breakevenYear) {
    const fmt = (num) => '¥' + Math.round(num).toLocaleString();

    const card = document.getElementById('result-card');
    const diffValue = document.getElementById('result-diff-value');
    const conclusion = document.getElementById('result-conclusion');
    const reason = document.getElementById('result-reason');
    const breakeven = document.getElementById('result-breakeven');

    // クラスのリセット
    card.classList.remove('win-buy', 'win-rent');

    diffValue.textContent = `+${fmt(result.diff)}`;

    if (result.winner === 'buy') {
        card.classList.add('win-buy');
        conclusion.innerHTML = `結論：今は<strong style="color:var(--win-buy)">「購入」</strong>優位`;
        reason.textContent = `理由：${result.yearsOwned}年計で実質コストが賃貸より低い`;
    } else {
        card.classList.add('win-rent');
        conclusion.innerHTML = `結論：今は<strong style="color:var(--win-rent)">「賃貸」</strong>継続が有利`;
        reason.textContent = `理由：${result.yearsOwned}年計で実質コストが購入より低い`;
    }

    if (breakevenYear) {
        breakeven.textContent = `損益分岐点：${breakevenYear}年目で「購入」が逆転`;
    } else {
        breakeven.textContent = `損益分岐点：50年以内での逆転なし`;
    }

    // セクションを表示
    document.getElementById('result-section').style.display = 'flex';
}

function handleCalculate() {
    const inputs = getInputsFromUI();
    const result = calculateRentVsBuy(inputs);
    const breakevenYear = calculateBreakevenYears(inputs);

    renderResults(result, breakevenYear);

    // スクロール
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// イベントリスナーの登録
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calc-button').addEventListener('click', handleCalculate);
    document.getElementById('cta-recalc').addEventListener('click', () => {
        document.querySelector('.input-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
