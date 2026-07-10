//declaration of array
let language = []; //empty array

let numbers = [1,2,3,4,5];  //array of numbers

let fruits = ["apple","banana","grapes","pineapple"]; //array of strings

//inbuilt functions of arrays

//1.push -> adding element to array
console.log("----push----");

language.push("Java");
language.push("python","javascript","typescript");

console.log(language);

//2.pop -> removes last element
console.log("----pop----");

language.pop();
console.log(language);

//3.shift -> removes the first element and returns it
console.log("----shift----");

let fruit = fruits.shift();
console.log(fruits);
console.log(fruit);

//4.unshif -> adds element to begining of array and returns the length of new array
console.log("----unshift----");

let farr = fruits.unshift("cherry");
console.log(fruits);
console.log(farr);

//5.splice -> add or remove elements at specific index
console.log("----splice----");

let colors = ["orange","red","blue","yellow","white","red"];
colors.splice(0,1);
console.log(colors);

//6.slice -> returns a subset of array
console.log("----slice----");

let nums = [10,20,30,40,50];

let n = nums.slice(1,3); //index 1 to 3-1

console.log(n);

//7.concat -> joins two arrays and returns the new joined array
console.log("----comcat----");

let even = [2,4,6,8];
let odd = [1,3,5,7];

let newNums = even.concat(odd);

console.log(newNums);

//8. indexOf -> returns the index position
console.log("----indexOf----");

let indexColor = colors.indexOf("red");
console.log(indexColor);
// let secondIndex = colors.indexOf("red",2);
let secondIndex = colors.indexOf("red",colors.indexOf("red")+1);
console.log(secondIndex);

//9. includes  -> check if the array includes a specific element
console.log("----includes----");


let x = ["admin","customer","orders","sales"];

// let test = x.includes("orders")
let test = x.includes("orders","admin","sales");
console.log(test);

//10. forEach -> navigating through array
console.log("----forEach----");

nums.forEach((n)=>{
    console.log(n+":"+n*2);
})
