// let employee: {
//     id: number; // You can add readonly before the type to make it read-only
//     name: string; // Type "name?: string" would make it optional
//     retire: (date: Date) => void; // Function type
// } = {
//         id: 1,
//         name: 'John',
//         retire: (date: Date) =>{
//             console.log('Retiring on ' + date);
//         }
//     };
// ^ this is bad practice since not all employees will have the same properties

type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

type Manager = {
    readonly id: number;
    name: string;
    firedSomeone: (date: Date) => void;
}

let employee: (Employee | Manager) = {
    id: 1,
    name: 'John',
    retire: (date: Date) =>{
        console.log('Retiring on ' + date);
    },
    firedSomeone: () => console.log('Uneeku')
};