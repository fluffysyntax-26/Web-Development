// check if a number is greater than another number: 

let num1 = 5
let num2 = 8

if (num1 > num2){
    console.log("num1 is greater");
} else {
    console.log("num2 is greater");
}

// check for string equality
let username = "deepak"
let anotherName = "deepakk"

if (username === anotherName){
    console.log("Same Strings")
} else {
    console.log("Different Strings")
}

// check if a variable is number or not
let score = 44

if (typeof score === 'number'){
    console.log("It is a number"); 
} else {
    console.log("It is of some other data type!")
}

// checking if a boolean value is true or false

let isReady = false

if (isReady){
    console.log("Ready!")
} else {
    console.log("Not Ready!")
}

// check if an array is empty or not: 

let items = []; 

if (items.length === 0){
    console.log("Array is empty");
} else {
    console.log("Array is NOT empty"); 
}