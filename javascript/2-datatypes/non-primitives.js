// objects

let username = {
    "first name": "deepak", 
    isLoggedin: true, 
}

// add or change value
username.isLoggedin = false; 
username.lastname = "krishna"


// access individual properties
console.log(username["first name"])
console.log(username.lastname)
console.log(username.isLoggedin);


console.log(username); 
console.log(typeof username);


// in built objects
let today = new Date(); 
console.log(today); 
// access in-built properties
console.log(today.getDate());

// other useful date methods
console.log(today.getFullYear());   // 2025
console.log(today.getMonth());      // 11 (months are 0–11)
console.log(today.getDay());        // 0 = Sunday, 1 = Monday, ...
console.log(today.getHours());      // 0–23
console.log(today.getMinutes());    // 0–59
console.log(today.getSeconds());    // 0–59
console.log(today.toDateString());  // "Sun Dec 07 2025"

// Array
let fruits = ['apple', 'banana', 'orange', 'grapes', 'mango', true]
console.log(fruits)

console.log(fruits[0])

