type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday);
}

// ^ Simpler than this:
console.log(customer?.birthday);

// Optional chaining can be used with arrays as well
let arr = [1, 2, 3];
console.log(arr[0]?.toString());

// You can also use optional chaining with functions
let log: any = null
log?.("A"); // This will not throw an error since optional chaining was used