//prototype is an object that is associated with every function and object by default.
//we can add new properties and functions at a later stage of declaration


class person {
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
}

let rajesh = new person("rajesh","male");
// console.log(rajesh.name,rajesh.gender);

person.prototype.age=23;  //adding age property to person class

// console.log(rajesh.name,rajesh.gender,rajesh.age);

person.prototype.display = function(){          //adding display() function to the class person
                             console.log(this.name,this.gender,this.age)
                            };

rajesh.display();