// Number

let balance = 120; 
console.log(typeof balance);

// instanciate the number class (or some variant of a class)
let anotherBalance = new Number(120);

// print type
console.log(typeof anotherBalance);

// extract value from the object
console.log(anotherBalance.valueOf());

// boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

//undefined
let firstname;  // variable left blank
console.log(firstname); 

// null
let lastname = null; // variable intentionally left blank, might assign some value in the future
console.log(lastname); 

// string

let myString = "Hello!"
let simpleString = 'Hola!'
let username = 'deepak'

let oldString = myString + "deepak"; 
console.log(oldString);

// use backticks for easier formatting (String Interpolation)
let greetMessage = `Hello ${username}!` 
console.log(greetMessage); 

// you can do computations too
let value = `Value is ${2 * 2}`; 
console.log(value)

// Symbols - only guarantee is uniqueness
let symbol1 = Symbol("deepak")
let symbol2 = Symbol("deepak")

console.log(symbol1)
console.log(symbol1 == symbol2); 