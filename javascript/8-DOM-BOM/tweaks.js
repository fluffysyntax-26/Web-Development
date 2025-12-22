// example 1 -- Accessing DOM Elements
document.getElementById('changeTextButton').addEventListener('click', function(){
   let paragraph = document.getElementById('myParagraph')
   paragraph.textContent = "The paragraph is changed"; 
})

// Regular functions in event listeners bind `this` to the element that triggered the event.
// Arrow functions don’t have their own `this`; they inherit it from the surrounding scope.

// example 2 -- Traversing DOM

document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add('highlight');
});


// example 3 -- manipulating DOM Elements
document.getElementById("changeOrder").addEventListener('click', function(){
    document.getElementById("coffeeType").textContent = "Espresso";document.getElementById("coffeeType").style.backgroundColor = "Brown"; 
    document.getElementById("coffeeType").style.padding = "5px";
});

// example 4 -- creating and inserting elements
document.getElementById("addNewItem").addEventListener('click', function(){

    // create a new element
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"

    // inject the created element to the existing list
    document.getElementById("shoppingList").appendChild(newItem);
})

// example 5 -- remove DOM elements
document.getElementById("removeLastTask").addEventListener('click', function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove(); 
});

// example 6 -- Event Handling in DOM
document.getElementById("clickMeButton").addEventListener('click', function(){
    alert("Website hacked!");
});

// example 7 -- Event Delegation
document.getElementById("teaList").addEventListener('click', function(event){
    if(event.target && event.target.matches('.teaItem')){ 
        alert("You selected: " + event.target.textContent)
    }
})

// example 8 -- Form handling
document.getElementById("feedbackForm").addEventListener('submit', function(event){ 
    event.preventDefault(); 
    let feedback = document.getElementById("feedbackInput").value; 
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback}`;
})

// example 9 -- DOM Content Loading

document.addEventListener('DOMContentLoaded', function(){ 
    document.getElementById('domStatus').textContent = "DOM fully Loaded"; 
})

// example 10 

document.getElementById('toggleHighlight').addEventListener('click', function(){ 
    let descriptionText = document.getElementById("descriptionText"); 
    descriptionText.classList.toggle("highlight")
})