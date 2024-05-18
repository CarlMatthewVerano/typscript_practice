let quantity: 50 = 50; // This means quantity can only be set to 50
let quantity2: 50 | 100 = 50; // This means quantity can only be set to 50 or 100

type Quantity = 50 | 100;
let quantity3: Quantity = 100;

type Metric = 'cm' | 'inch';