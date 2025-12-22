// A closure is created when a function remembers and continues to access variables from its outer (lexical) scope, even after that outer function has finished executing.

function outer(){ 
    let counter = 4
    return function(){
        counter++
        return counter
    }
}

let increment = outer();
console.log(increment());
console.log(increment()); 
console.log(increment());  