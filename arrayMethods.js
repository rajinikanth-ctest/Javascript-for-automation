//1.map -> modifies all elements and returns new array
console.log("----map function----");
//program to square the numbers using map
console.log("squares:")

let nums = [1,2,3,4,5];
let squares = nums.map(n=>n*n);

console.log(squares);

//program to conver temp from F to C
console.log("F To C temp:");

let fahTemp = [32,68,60,76];

function fahToCel(f){
    return Math.round((f-32)*(5/9));
}

let celTemp = fahTemp.map(fahToCel); //taking callback function
console.log(celTemp);

//2.filter -> returns elements matching the criteria
//program to retrive even numbers from array
console.log("----filter function-----");
console.log("even numbers:");

let num = [3,4,5,6,7,8,9,10];

let evenNums = num.filter(n=>n%2==0);
console.log(evenNums);

//program to filter employees from object
console.log("filtered employees:");

let employee = [
    {name:"Diana",age:35,gender:"Female"},
    {name:"Zoya",age:30,gender:"Female"},
    {name:"Bob",age:27,gender:"Male"},
    {name:"John",age:31,gender:"Male"},
    {name:"Clara",age:26,gender:"Female"}
];

let empFilter = employee.filter(e=>(e.age>28&&e.gender==="Female"));

console.log(empFilter);

//3.reduce function -> returns a final accumulated value
//program to sum the elements of array
console.log("---reduce function----")
console.log("sum of array:")

let digits = [1,2,3,4,5];

let sum = digits.reduce((a,b)=>a+b,0);

console.log(sum);

//program to find biggest value in array
console.log("biggest value:")

let numbers = [45,230,100,32,90,105,87,300];

let maxValue = numbers.reduce((a,b)=>{
    if(a>b)
        return a;
    else
        return b;
});

console.log(maxValue);

//program to find cart total
console.log("cart total:")

let cartItems = [
    {name:"Jeans",price:3000},
    {name:"Tshirt",price:2400},
    {name:"Shoes",price:1500},
    {name:"Earbuds",price:2000}
]

let cartTotal = cartItems.reduce((total,item)=>total+item.price,0);
console.log(cartTotal)

//4. every -> returns a boolean after checking the criteria
console.log("----every----");

let nums1 = [1,2,3,4,5];
let flag = nums1.every(n=>n<10); 
console.log(flag);

//5. some -> returns a boolean after matching atleast some elements with criteria
console.log("----some----");
let flg = nums1.some(n=>n%2==0);
console.log(flg);

//6. find -> returns the first element matching the criteria
console.log("---find----");
let first = nums1.find(n=>n%2==0);
console.log(first);

//7. indexOf -> returns index of an element
console.log("----indexOf----");
let fruits = ["orange","apple","mango","banana","apple"];
let index = fruits.indexOf("apple");
console.log(index);

//8. lastIndexOf -> returns the last occuring index of a repeated element
console.log("----lastIndexOf----");
let lastIndex = fruits.lastIndexOf("apple");
console.log(lastIndex);

//9. reverse -> reversing the array
console.log("----reverse----");
let revArray = fruits.reverse();
console.log(revArray);

//10. sort -> sorts the array
console.log("----sort----");
let sortedFruits = fruits.sort();
console.log(sortedFruits);
let products = ["macbook","iphone","reno","123Asus","Micromax"];
let sortedProducts = products.sort();
console.log(sortedProducts);