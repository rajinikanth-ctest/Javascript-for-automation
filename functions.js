// 1.Function declaration 

function add(a,b){   //simple function declaration with return value
    return a+b;
}

let sum = add(3,4);
console.log("sum:"+sum);  //sum:7

function print(){       // function declaration without return value
    console.log("Javascript for playwright");
}

print();  // Javascript for playwright


// 2.Function Expression - annonymous function

const multiply = function(x,y){
    return x*y;
}

let product = multiply(4,5);
console.log("product:"+product) //product:20

// 3.Arrow Function Expression : annonymous function

const divide = (a,b)=>a/b;

let division = divide(20,4);
console.log("division:"+division);  //division:5

// 4.Function Constructor

const substract = new Function('a','b','return a-b;'); //last parameter being the function body

const sub = substract(10,4);
console.log("sub:"+sub); //sub:6

// 5.IIFE(Immediately Invoked Function Expression)

(function(){
    console.log("the server is up and running...");
})();

// 6.Generator Function : generates series using function,* and yield keyword

function* generateNumberSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = generateNumberSequence();

console.log(generator.next().value); //1
console.log(generator.next().value); //2
console.log(generator.next().value); //3
console.log(generator.next().value); //4
console.log(generator.next().value); //undefined

// 7.Anynomous Function

let numbers = [1,2,3,4,5];
let squares = numbers.map((n)=>{  //anonymous function used with map
    return n*n;
})

console.log("squares:"+squares); //squares:1,4,9,16,25

// 8.Recursive Function -> function calling itself is recursive
//program to find factorial using recursion

function factorial(n){
    if(n===1||n===0)
        return 1;
    else
        return n * factorial(n-1);
}

let fact= factorial(4);
console.log("factorial:"+fact);  //factorial:24

// 9.Higher Order Function

function addition(a,b){
    return a+b;
}

function multiplication(a,b){
    return a*b;
}



function operation(functionName,a,b){
    return functionName(a,b);
}

let s = operation(addition,2,3);
console.log("sum:"+s); //sum:5

let m = operation(multiplication,4,5);
console.log("product:"+m); //product:20


