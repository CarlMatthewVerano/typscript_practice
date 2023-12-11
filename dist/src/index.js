"use strict";
function kbToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kbToLbs(10);
kbToLbs('10kg');
//# sourceMappingURL=index.js.map