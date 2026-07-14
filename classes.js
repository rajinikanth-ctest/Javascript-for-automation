// classes and objects in javascript

class Car{
    //declaration of constructor 
    constructor(name,price,model,color){   //a constructor cannot be overloaded in javascript
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color;
    }

    refuel(){
        console.log(`${this.name} car is refuelled...`);
    }
}

const car1 = new Car("Audi",10000,"520D","Red");   //creating and initializing the object

console.log(car1.name);   //Audi
console.log(car1.price);  //10000
console.log(car1.model);  //520D
console.log(car1.color);  //Red
car1.refuel();      //Audi car is refuelled..

const car2 = new Car("BMW",20000,"230S","White");  //creating and initializing the object

console.log(car2.name);    //BMW
console.log(car2.price);    //20000
console.log(car2.model);    //230S
console.log(car2.color);    //White
car2.refuel();      // BMW car is refuelled...



