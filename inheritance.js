//declaring the super class - Vehicle
class Vehicle{
    constructor(make,model,year){   //constructor for super class
        this.make=make;
        this.model=model;
        this.year=year;        
    }

    getInfo(){                  //defining methods in super class
        return `${this.make}, ${this.model}, ${this.year}`;
    }

    startEngine(){
        console.log("starting engine...");
    }

    stopEngine(){
        console.log("stopping engine...");
    }
}


//declaring the sub class - Car
class Car extends Vehicle{
    constructor(make,model,year,fueltype){   //constructor for sub class
        super(make,model,year);             //passing arguments to super class
        this.fueltype=fueltype;
    }

    driveCar(){                     //defining sub class method
        console.log("driving the car "+this.model);
    }
}

class Truck extends Vehicle{        //declaring a sub class - Truck
    constructor(make,model,year,capacity){      //defining the constructor of sub class
        super(make,model,year);
        this.capacity=capacity;
    }

    driveTruck(){               //defining the method of sub class
        console.log("driving the truck "+this.model);
    }
}

const car= new Car("Honda","Civic",2013,"petrol");   //creating object of Car class

const truck = new Truck("Tata","Sumo",2020,100);    //creating object of truck class

console.log(car.getInfo());             //accessing properties of sub class
car.startEngine();
console.log(car.fueltype);
car.driveCar();

console.log(truck.getInfo());
truck.startEngine();
console.log(truck.capacity);
truck.driveTruck();