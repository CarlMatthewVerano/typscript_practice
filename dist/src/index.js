"use strict";
function kbToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kbToLbs(10));
console.log(kbToLbs('10kg'));
//# sourceMappingURL=index.js.map