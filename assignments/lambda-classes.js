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

//Person class instances
const theHoff = new Person ({
    name: "David Hasslehoff",
    location: "Dusseldorf",
    gender: "male"
});

const kima = new Person ({
    name: "Kima Greggs",
    location: "Baltimore",
    gender: "female"
});

const riker = new Person ({
    name: "William Riker",
    location: "Valdez, Alaska, United State, Earth",
    gender: "male"
});

theHoff.speak();
kima.speak();
kima.gender;
riker.speak();