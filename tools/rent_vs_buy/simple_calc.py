import sys

def calculate_rent_vs_buy():
    print("--- 🇯🇵 Japan Rent vs. Buy Calculator ---")
    print("Compare the financial outcome over a specific period.")
    
    # --- INPUTS ---
    try:
        years = int(input("How many years will you live there? (e.g. 10): "))
        
        # RENT INPUTS
        print("\n[RENT SCENARIO]")
        monthly_rent = int(input("Monthly Rent (Yield/Yachim) in Yen? (e.g. 140000): "))
        mgmt_fee_rent = int(input("Monthly Mgmt Fee (Kanri-hi) in Yen? (e.g. 10000): "))
        renewal_fee_months = float(input("Renewal Fee (in months) every 2 years? (e.g. 1.0): "))
        initial_rent_months = float(input("Initial Cost (Key Money + Agency Fee) in months? (e.g. 3.0): "))
        
        # BUY INPUTS
        print("\n[BUY SCENARIO]")
        price = int(input("Property Price in Yen? (e.g. 50000000): "))
        interest_rate_pct = float(input("Interest Rate (%)? (e.g. 0.5): "))
        # Simple simplified brokerage + tax calculation for Japan (approx 7% of price)
        initial_buy_cost_pct = float(input("Initial Buy Costs % (Brokerage, Tax)? (Standard is 7.0): "))
        monthly_mgmt_buy = int(input("Monthly Mgmt + Repair Fund in Yen? (e.g. 25000): "))
        yearly_property_tax = int(input("Yearly Property Tax in Yen? (e.g. 150000): "))
        resale_value_pct = float(input("Resale Value after " + str(years) + " years? (% of original price, e.g. 80): "))

    except ValueError:
        print("Invalid input. Please enter numbers only.")
        return

    # --- CALCULATIONS ---
    
    # 1. RENT TOTAL COST
    total_rent_monthly = (monthly_rent + mgmt_fee_rent) * 12 * years
    total_renewal = (monthly_rent * renewal_fee_months) * (years // 2)
    initial_rent_cost = monthly_rent * initial_rent_months
    
    TOTAL_COST_RENTING = total_rent_monthly + total_renewal + initial_rent_cost

    # 2. BUY TOTAL COST
    # Loan Calculation (Simplified constant payment)
    # Using a standard monthly payment formula would be better, but let's approximate or use numpy if available? 
    # Let's write a simple pure python PMT function.
    
    principal = price # Assuming 100% loan for simplicity of comparison, or we could ask for downpayment. 
    # Let's assume full loan to keep inputs simple, but add initial costs as cash out.
    
    rate_monthly = (interest_rate_pct / 100) / 12
    loan_term_months = 35 * 12 # Standard Flat 35
    
    if rate_monthly > 0:
        monthly_payment = principal * (rate_monthly * (1 + rate_monthly)**loan_term_months) / ((1 + rate_monthly)**loan_term_months - 1)
    else:
        monthly_payment = principal / loan_term_months

    # User pays this for 'years'
    total_mortgage_paid = monthly_payment * 12 * years
    
    # Remaining Debt Calculation
    # Balance at month n = P * ((1+r)^N - (1+r)^n) / ((1+r)^N - 1)
    months_elapsed = years * 12
    if rate_monthly > 0:
        remaining_debt = principal * ((1 + rate_monthly)**loan_term_months - (1 + rate_monthly)**months_elapsed) / ((1 + rate_monthly)**loan_term_months - 1)
    else:
        remaining_debt = principal - (principal / loan_term_months * months_elapsed)

    initial_buy_cost = price * (initial_buy_cost_pct / 100)
    total_mgmt_buy = monthly_mgmt_buy * 12 * years
    total_taxes_buy = yearly_property_tax * years
    
    resale_value = price * (resale_value_pct / 100)
    
    # Net Cost formula: (Cash Outflows) - (Equity Gained)
    # Equity Gained = Resale Value - Remaining Debt
    
    total_cash_outflow_buy = initial_buy_cost + total_mortgage_paid + total_mgmt_buy + total_taxes_buy
    equity = resale_value - remaining_debt
    
    TOTAL_NET_COST_BUYING = total_cash_outflow_buy - equity
    
    # --- OUTPUT ---
    print("\n" + "="*30)
    print(f"RESULTS ({years} YEAR PERIOD)")
    print("="*30)
    
    print(f"🏠 RENTING")
    print(f"  Total Rent Paid:   ¥{total_rent_monthly:,.0f}")
    print(f"  Renewal Fees:      ¥{total_renewal:,.0f}")
    print(f"  Initial/Other:     ¥{initial_rent_cost:,.0f}")
    print(f"  -----------------------------")
    print(f"  TOTAL LOSS:        ¥{TOTAL_COST_RENTING:,.0f}")
    
    print(f"\n🔑 BUYING")
    print(f"  Initial Costs:     ¥{initial_buy_cost:,.0f}")
    print(f"  Mortgage Paid:     ¥{total_mortgage_paid:,.0f}")
    print(f"  Mgmt/Repair/Tax:   ¥{total_mgmt_buy + total_taxes_buy:,.0f}")
    print(f"  - Resale Value:   (¥{resale_value:,.0f})")
    print(f"  + Remaining Debt:  ¥{remaining_debt:,.0f}")
    print(f"  -----------------------------")
    print(f"  NET COST:          ¥{TOTAL_NET_COST_BUYING:,.0f}")
    
    print("\n" + "="*30)
    diff = TOTAL_COST_RENTING - TOTAL_NET_COST_BUYING
    if diff > 0:
        print(f"🎉 BUYING IS CHEAPER by ¥{diff:,.0f}")
    else:
        print(f"📉 RENTING IS CHEAPER by ¥{-diff:,.0f}")
    print("="*30)

if __name__ == "__main__":
    calculate_rent_vs_buy()
