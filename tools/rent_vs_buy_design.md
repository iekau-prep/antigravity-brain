# 🧮 Tool Design: Japan Rent vs. Buy Calculator

Most calculators are too simple. Ours will account for the *real* costs of housing in Japan.

## Core Logic

### Scenario A: Renting (The "Forever Renter")
**Total Cost over N years =**
-   (Monthly Rent + Management Fee) * 12 * N
-   + Renewal Fee (1 month rent every 2 years)
-   + Key Money (Initial 1-2 months, one-time)
-   + Insurance (¥20k every 2 years)

### Scenario B: Buying (The "Owner")
**Total Cost over N years =**
-   Initial Costs (Brokerage fee, taxes, down payment)
-   + (Monthly Mortgage Payment * 12 * N)
-   + (Management Fee + Repair Fund) * 12 * N
-   + Property Tax (Yearly, depreciates over time)
-   + Maintenance (Water heater, AC replacement, etc.)
-   **MINUS** Resale Value at year N (The critical variable)

## Key Variables for User Input
1.  **Current Rent:** e.g., ¥140,000
2.  **Purchase Price:** e.g., ¥5,500,000
3.  **Years to stay:** e.g., 10, 20, 35 years
4.  **Resale Value Assumption:** e.g., -1% per year (optimistic) vs -2% (realistic)

## The "Gotcha" Factors (We will highlight these)
-   **Rent Renewal Fees:** Over 35 years, this is ~17 months of extra rent!
-   **Repair Fund Increases:** Condo repair fees often *double* after year 10.
-   **Tax Deductions:** The 13-year mortgage tax credit (significant savings).
