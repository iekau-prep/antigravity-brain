# 🧮 Rent vs. Buy Calculator (Japan Edition)

A simple Python tool to compare the financial impact of renting versus buying a home in Japan over a specific period.

## Features
-   **True Cost Analysis**: Accounts for "hidden" Japan-specific costs like renewal fees (Koushin-ryou), key money, and property taxes.
-   **Equity Calculation**: Considers the resale value of the home and remaining mortgage debt.
-   **Flexible Scenarios**: Compare any time frame (e.g., 5 years vs. 35 years).

## Usage

1.  Open your terminal.
2.  Navigate to this folder:
    ```bash
    cd tools/rent_vs_buy
    ```
3.  Run the script:
    ```bash
    python3 simple_calc.py
    ```
4.  Follow the prompts to enter your numbers.

## Default Assumptions
-   **Mortgage**: 35-year full term.
-   **Loan Amount**: 100% of the property price (Headless loan) for simplicity.
-   **Initial Buy Costs**: Defaults to 7% (Brokerage 3% + 60k + tax, Registration tax, Acquisition tax, Loan fees).
