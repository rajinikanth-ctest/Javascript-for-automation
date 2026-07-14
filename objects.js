// 1.creating an object using object literal {}

const user = {              //declaring a user object
    username:"Rajesh",
    age: 33,
    occupation: "QA",
    country: "India"
};

console.log("Name:"+user.username);  //accessing object properties
console.log("Age:"+user.age);
console.log("Occupation:"+user.occupation);
console.log("Country:"+user.country);

// 2.creating an object using constructor function

function Car(brand, model, price){   //declaring the object 
    this.brand=brand;
    this.model=model;
    this.price=price;
};

let c = new Car("BMW","520d",10000);  //initializing the object

console.log(c.brand+" "+c.model+" "+c.price); //accessing the properties of object

//3. creating object using class

class Customer{                     //declaration of class Customer
    constructor(name,product){
        this.name = name;
        this.product = product;
    }

    addToCart(){
        console.log(`${this.product} added to cart`);
    }
};

const customer = new Customer("Rajesh","MacBook Pro M2");  //creating object of class Customer

console.log(customer.name+" "+customer.product);        //accesing obect properties
customer.addToCart();

//4. using factory funcions: returns an object

function createDepatment(deptName,hod){
    return {
        deptName:deptName,
        hod:hod,
        printInfo:function(){
            console.log(`hello dept name is ${deptName} and its hod is ${hod}`);
        }
    }
}

const dept1 = createDepatment("civil","raj");
const dept2 = createDepatment("cse","satish");

dept1.printInfo();
dept2.printInfo();
