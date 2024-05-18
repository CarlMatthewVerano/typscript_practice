function greet(name: string) {
  console.log(name.toUpperCase());
}

//greet(null); // This will throw an error since null is not a string

// To allow null values or undefined, you can use the union type
function greet2(name: string | null | undefined) {
  if (name) {
    console.log('Hello, stranger');
  } else {
    console.log("WAT");
  }
}

greet2(null); // This will not throw an error since a union type was used
greet2(undefined); // This will not throw an error since a union type was used