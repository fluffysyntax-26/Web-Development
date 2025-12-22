let computer = {
    cpu: 18
}

let lenovo = {
    screen: "OLED",
    __proto__: computer
}

let tomHardware = {}; 

console.log(lenovo);

console.log(lenovo.__proto__); 

let genericCar = {
    tyres: 4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla`, tesla)
console.log(Object.getPrototypeOf(tesla));