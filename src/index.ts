function kbToLbs(weight: number | string): number{
    // Narrowing
    if(typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

kbToLbs(10)
kbToLbs('10kg')