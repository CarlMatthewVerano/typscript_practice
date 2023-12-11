function calculateTax(income: number, taxYear?: number): number{
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022)

// OR

function calculatesTax(income: number, taxYear = 2022): number{
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

// If you add second argument, that replaces the original param value
calculatesTax(10_000)