class Vehicle {
    constructor(make, model){ 
        this.make = make
        this.model = model
    }

    start(){ 
        return `${this.model} is a car from ${this.make}`;
    }
}

// inheritance
class Car extends Vehicle{ 
    drive(){ 
        return `${this.make}: This property is inherited from Vehicle class`
    }
}

let myCar = new Car("Toyota", "Camry")
console.log(myCar.drive())

let vehicleOne = new Vehicle("Toyota", "Camry")
console.log(vehicleOne.make)

// Encapsulation
class BankAccount{
    #balance = 0;

    deposit(amount){ 
        this.#balance += amount
        return this.#balance;
    }

    getBalance(){ 
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount()

account.deposit(100)
console.log(account.getBalance())


// Abstraction
class CoffeeMachine{
    start(){
        // call DB
        // filter value
        return `Starting the machine...`
    }

    brewCoffee(){
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton(){ 
        let msgone = this.start(); 
        let msgTwo = this.brewCoffee(); 
        return `${msgone} + ${msgTwo}`;
    }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start()); 
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());


// Polymorphism

class Bird{ 
    fly(){ 
        return `heyy, I'm flying`
    }
}

class Penguin extends Bird{
    fly(){
        return "I really can't fly"
    }
}


let bird = new Bird()
let penguin = new Penguin()

console.log(bird.fly())
console.log(penguin.fly());


// static methods -- belongs to the class only, not to the objects
class Calculator{
    static add(a, b){ 
        return a + b; 
    }
}

// let miniCalc = new Calculator(); 
// console.log(miniCalc.add(3,2)) -- throws an error
console.log(Calculator.add(2,3))

// getters and setters
class Employee{
    #salary; 
    constructor(name, salary){ 
        if (salary < 0){ 
            console.log("Salary Cannot be negative")
        }
        this.name = name; 
        this.#salary = salary; // underscore means - this property is meant to be private - don't access it directly
    }

    // getter
    get salary(){
        return "you are not allowed to see salary"
    }

    // setter
    set salary(value){ 
        if (value < 0){ 
            console.error("Invalid Salary")
        } else{ 
            this._salary = value; 
        }
    }
}

let mark = new Employee("Mark", 50000)
console.log(mark.salary)