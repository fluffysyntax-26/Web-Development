const person = { 
    name: "Deepak", 
    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}

person.greet(); 

// context is lost 
const greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({name: "Prateek"}); 
boundGreet(); 

// bind, call and apply