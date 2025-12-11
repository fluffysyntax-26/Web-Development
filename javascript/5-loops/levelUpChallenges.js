/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = []

for(let i=0; i<teas.length; i++){
  if (teas[i] === "chai"){
    break; 
  } 
  selectedTeas.push(teas[i]) 
}

console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let cities = ["London", "New York", "Paris", "Berlin"]

let visitedCities = []

for(let i=0; i<cities.length; i++){
   if (cities[i] === "Paris"){
      continue; 
   }
   visitedCities.push(cities[i])
}

console.log(visitedCities)

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const element of numbers) {
   if (element === 4){ 
      break; 
   }
   smallNumbers.push(element)
}

console.log(smallNumbers)
/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let chais = ["chai", "green tea", "herbal tea", "black tea"]

let preferredTeas = []

for (const element of chais) {
   if (element === "herbal tea"){
      continue;
   }
   preferredTeas.push(element)
}

console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.
*/

let citiesPopulation = {
   "London": 89000000, 
   "New York": 8400000, 
   "Paris":2200000, 
   "Berlin":3500000
}


let cityPopulations = {}
console.log(Object.keys(citiesPopulation))

for (const key in citiesPopulation) {   
   if (key === "Berlin"){
      continue;
   }
   cityPopulations[key] = citiesPopulation[key]   
}

console.log(cityPopulations)
/*

6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
*/
const cityPops = {
  Tokyo: 37400068,
  Delhi: 28514000,
  Shanghai: 25582000,
  Chicago: 2695000,
  Paris: 2148000,
  SãoPaulo: 21846507,
  Mumbai: 20185000,
  Toronto: 2930000
};

let largeCities = {}

for (const key in cityPops) {
   if (cityPops[key] < 3000000){
      continue;
   }
   largeCities[key] = cityPops[key]
}

console.log(largeCities)


/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let chaiTypes = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

chaiTypes.forEach(function(tea){
   if (tea === 'chai'){
      return;
   }
   availableTeas.push(tea)
});

console.log(availableTeas);


/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let worldBigCities = ["Berlin", "Tokyo", "Sydney", "Paris"]; 
let traveledCities = []

worldBigCities.forEach(element => {
   if (element === "Sydney"){
      return; 
   }
   traveledCities.push(element)
});

console.log(traveledCities)
/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let randomNums = [2,5,7,9]
let doubledNumbers = []

randomNums.forEach(number =>{
   if (number === 7){ 
      return; 
   }
   doubledNumbers.push(number * 2); 
})

console.log(doubledNumbers)



/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let finalTea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]

let shortTeas = []

for (const tea of finalTea) {
   if (tea.length > 10){ 
      break; 
   }
   shortTeas.push(tea)
}

console.log(shortTeas)

