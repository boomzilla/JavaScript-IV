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

    grade(thisStudent, subject){
        console.log(`${thisStudent.name} receives a perfect score on ${subject}`);
    }
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

class ProjectManager extends Instructor {
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }

    debugsCode(thisStudent, subject){
        console.log(`${this.name} debugs ${thisStudent.name}'s code on ${subject}`);
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

//PM class instances

alex = new ProjectManager ({
    name: "Alex King",
    location: "Seattle",
    gender: "male",
    specialty: "web dev",
    favLanguage: "JavaScript",
    catchPhrase: "Java is to JavaScript what ham is to hamster.",
    gradClassName: "Web 5",
    favInstructor: "Cam Pope"
})

alex.demo("Quoakka");
alex.speak();
alex.standUp("WebPT5");

//combo test calls
cam.grade(ian, "JavaScript");
alex.debugsCode(ian, "LESS");