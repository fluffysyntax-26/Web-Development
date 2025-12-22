// greet function
function greet(name){ 
    console.log(`Hello ${name}!`);
}

greet("Deepak")

// question 2
function orderTea(teaType){
    function confirmOrder(){ 
        console.log(`Order confirmed for ${teaType}!`)
    }
    return confirmOrder(); 
}

orderTea("Orange tea")

// question 3

function makeTea(typeOfTea){
    return `Type of tea ${typeOfTea}`
}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea); 
console.log(order);

// question 4

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    };
}

console.log(createTeaMaker("green tea"));


