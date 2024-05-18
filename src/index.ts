function kbToLbs(weight: number | string): number{
    let num: number = 0
    // Narrowing
    if(typeof weight === 'number'){
        num = 1;
        console.log(num);
        return weight * 2.2
    }else{
        num = 2;
        console.log(num);
        return parseInt(weight) * 2.2
    }

        
}

kbToLbs(10)
kbToLbs('10kg')