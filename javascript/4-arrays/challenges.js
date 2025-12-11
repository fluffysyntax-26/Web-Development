// simple challenges - questions in the video

// question 1
let teaFlavors = ['green tea', 'black tea', 'oolong tea']; 

let firstTea = teaFlavors[0];
console.log(firstTea)

// question 2
let cities = ["London", "Tokyo", "New York", "Paris"]; 

let favCity = cities[2]; 
console.log(favCity)

// question 3
let teaTypes = ["Herbal Tea", "White Tea", "Masala Chai"]; 
console.log(teaTypes);
teaTypes[1] = "Jasmine Tea"
console.log(teaTypes);

// question 4
let citiesVisited = ["Bengaluru", "Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited)

// question 5
let teaOrder = ["chai", "iced tea", "matcha", "earl grey"]; 
const lastOrder = teaOrder.pop()
console.log(teaOrder)
console.log(lastOrder)

// question 6 - soft copy
let popularTeas = ["green tea", "oolong tea", "chai"]; 
let softCopyTeas = popularTeas; 
popularTeas.pop()
console.log(softCopyTeas); 
console.log(popularTeas)
console.log()

// question 7 - hard copy
let teas = ["green tea", "oolong tea", "chai"]; 
let hardCopyTeas = [...teas]; 
let anotherHardCopy = teas.slice()
teas.pop()
console.log(hardCopyTeas); 
console.log(teas)
console.log(anotherHardCopy)

// question 8 - merge cities
let arrayOne = ['New York', 'London', 'Paris'];
let arrayTwo = ['Tokyo', 'Shanghai', 'Sydney'];

// creates a string
let worldCities = arrayOne + arrayTwo; 
console.log(worldCities)
console.log(typeof worldCities)

// creates a 2-D array
worldCities = [arrayOne, arrayTwo]
console.log(worldCities)

// concatenation (correct answer)
worldCities = arrayOne.concat(arrayTwo)
console.log(worldCities)

// question 9 - find length of the array and store it
let numCities = worldCities.length
console.log(numCities)

// question 10 - check for an element and store it's existence in a boolean variable

let cityBucketList = ["Kyoto", "Osaka", "Tokyo", "Geneva", "London"];

let isLondonInList = cityBucketList.includes("London"); 
console.log(isLondonInList)