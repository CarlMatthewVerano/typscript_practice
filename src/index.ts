function kbToLbs(weight: number | string): number{
    // Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2
    }else{
        // Note: this returns 22 now, since parseInt only parses valid numbers until it hits a non-number
        return parseInt(weight) * 2.2
    }

        
}

console.log(kbToLbs(10))
console.log(kbToLbs('10kg'))