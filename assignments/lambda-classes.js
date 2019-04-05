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

class Instructor extends Person {
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    //grade(subject, Student){
    //to implemnent
    //}
}

class Student extends Person {
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }

    listSubjects(){
        for (let n = 0; n < this.favSubjects.length; n++) {
            console.log(this.favSubjects[n]);
        }
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
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
console.log(kima.gender);
riker.speak();

//Instructor class instances
austen = new Instructor ({
    name: "Austen Allred",
    location: "Silicon Valley",
    gender: "male",
    specialty: "statups",
    favLanguage: "Haskell",
    catchPhrase: "You miss 100% of the shots you don't take!"
});

cam = new Instructor ({
    name: "Camerons Pope",
    location: "Orem, Utah",
    gender: "male",
    specialty: "web dev",
    favLanguage: "JavaScript",
    catchPhrase: "A bird in the hand is worth two in the bush."
});

ada = new Instructor ({
    name: "Ada Lovelace",
    location: "England",
    gender: "female",
    specialty: "mechanical computers",
    favLanguage: "Ada",
    catchPhrase: "Carpe diem!"
});

austen.demo("Lambda School");
cam.demo("HTML");
ada.demo("the Babbage engine");
ada.speak();

//Student class instances
ian = new Student ({
    name: "ian Ruotsala",
    location: "Everett, Washington",
    gender: "male",
    previousBackground: "college student",
    className: "Web PT 5",
    favSubjects: ["Python", "web dev", "infosec"]
});

ian.speak();
ian.listSubjects();
ian.PRAssignment("preprocessors");
ian.sprintChallenge("JavaScript");
//combo test calls