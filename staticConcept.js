class Car{
    static wheels = 4;    //static variable

    constructor(name,model,price){
        this.name=name;     // non-static or instance variables
        this.model=model;
        this.price=price;
    }

    drive(){        //non static method
        console.log(this.name+" is driving!");
    }

    static stop(){              //static method
        console.log("stopping the car...");
    }
}

const car = new Car("Honda",2023,40000);    //initializing a Car class object

console.log("number of wheels: "+Car.wheels);  //accessing static variable

console.log(`${car.name} ${car.model} ${car.price}`);  //accessing non static/instance variables

Car.stop();   //accessing static method

// Car.drive();  //error
// car.stop();   //error
