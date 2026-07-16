class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }

    startEngine(){
        console.log("staring engine of the car...");
    }
}

class Audi extends Car{
    constructor(make,model){
        super(make,model);
    }

    //overriden method
    startEngine(){
        console.log("starting engine of Audi Car...");
    }

}

const car = new Car();

car.startEngine();

const audi = new Audi("Audi",204);

console.log(audi.make);
console.log(audi.model);

audi.startEngine();