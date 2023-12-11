// let numbers: number[] = [1, 2, 3];

// This is an error: let numbers: number[] = [1, 2, '3'];

// You can remove the number type declaration since every element in
// array is a number. let numbers = [1, 2, 3];

// Though this is bad if for example each element was equated
// a value of a different type. Thus should declare explicitly.
// EX:
// let numbers = []
// numbers[0] = 1;
// numbers[1] = '1'

// Proper:
let numbers: number[] = [];

// Also has intellisense in ts, such as toFixed since it knows it's a number
numbers.forEach(n => n.toFixed)

// Tuples can have different type declarations at the same time
let user: [number, string] = [1, 'Mosh']
user[1].split

// This is a gap in ts, you can push to a tuple despite being fixed
user.push(1);