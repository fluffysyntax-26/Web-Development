// question 2 - countdown to 5

let countdown = []; 

i = 0; 
count = 5; 

while(i < 5){
    countdown[i] = count; 
    i++; 
    count--; 
}
console.log(countdown)

// question 3 - do while loop

let teaCollection = []
let tea
do {
    tea = prompt(`Enter you favourite tea (type "stop" to finish)`)

    if(tea !== "stop"){
        teaCollection.push(tea)
    }

} while (tea !== "stop");

// question 4 - count sum using do while
let sum = 0
let i = 1

do{
    sum += i
    i++
} while(i < 4)

// question 5 - multiply by 2
let even = [2, 4, 6]
let twice = []

for(let i=0; i<even.length; i++){
    let result = even[i] * 2
    twice.push(result)
}

console.log(twice)