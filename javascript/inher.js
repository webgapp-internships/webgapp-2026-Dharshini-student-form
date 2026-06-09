// Parent Class
class Department {

    constructor(studentName) {
        this.studentName = studentName;
    }

    details() {
        return "Student Details";
    }
}


// Child Class
class CSE extends Department {

    details() {
        return `${this.studentName}: CSE Department`;
    }
}


// Another Child Class
class IT extends Department {

    details() {
        return `${this.studentName}: IT Department`;
    }
}


// Student inherits CSE
class Student extends CSE {

    constructor(studentName, project) {

        // Call Parent Constructor
        super(studentName);

        this.project = project;
    }

    showProject() {
        return `${this.studentName} is doing ${this.project} project`;
    }
}


// Objects
const s1 = new CSE("Arun");

const s2 = new IT("Kumar");

const s3 = new Student("Santhosh", "Gym Management System");


 //Output
console.log(s1.details());

console.log(s2.details());

console.log(s3.details());

console.log(s3.showProject());