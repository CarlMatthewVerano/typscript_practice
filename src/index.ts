let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

//We don't always have to explicitly declare the types
//It can infer the types based on value
/* Alternate:
    let sales = 123_456_789;
    let course = 'TypeScript';
    let is_published = true;
*/

// Type Any occurs when you don't initialize the type
// Defeats the purpose of using type
let level;
level = 1;

// For any types in parameters, you need to explicitly indicate 'any'
// if you want to avoid any errors; unless you change tsconfig.json
function render(document: any){
    console.log(document);
}