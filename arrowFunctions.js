const square = (num) => num*num; //arrow function declaration with argument

let res = square(5);

console.log("square:"+res);

//===============================================================

const print = () => "learning JS";   //arrow function without arguments

let p = print();

console.log(p);

//===============================================================

const add = (a,b) => a+b;   //arrow function with multiple arguments

let sum = add(9,3);

console.log("sum:"+sum);

//================================================================                                                                      
//arrow function to access an object

const getFullName = (person) => `${person.firstname} ${person.lastname}`;

let person = {
    firstname:"Rajesh",
    lastname:"Chatla"
};

let fullName = getFullName(person);

console.log("fullName:"+fullName);

//================================================================                                                                      
//arrow function with default argument values

const greet = (username="guest",age=0) => `${username} you are ${age} years old`;

// let msg = greet();   //guest you are 0 years old

let msg = greet("Rajesh",33);

console.log(msg);

//================================================================ 

//arrow functions with rest parameters ... varargs

const sumTotal = (...nums) => nums.reduce((acc,num)=>acc+num,0);

// let total = sumTotal(1,2,3,4,5);  //15

let total = sumTotal(1,2,3); //6

console.log("sum:"+total);  //sum:6

//================================================================ 
//arrow functions with multiple parameters including rest parameter

const browserInfo = (bowser="chrome", ...details) => {
    
    console.log("BrowserName: "+bowser);
    console.log("Other Info: "+details);
}

browserInfo();
browserInfo('firefox','version 2.23.3','mozilla','headless');

//================================================================ 
//maximum value using math function and rest

// const findMaxValue = (a,b,c) => Math.max(a,b,c);

// console.log("maximum value:"+findMaxValue(1,2,3)); //maximum value:3

const findMaxValue = (...nums) => Math.max(...nums);

// let max = findMaxValue(10,2,3,4,5); //maxValue:10

// let max = findMaxValue(20,60,15,10,30); //maxValue:60

let max = findMaxValue(800,202,500,890,760); //maxValue:890

console.log("maxValue:"+max);

