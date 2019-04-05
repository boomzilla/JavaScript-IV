// CODE here for your Lambda Classes

//classes

class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }

    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

//instances and testing
