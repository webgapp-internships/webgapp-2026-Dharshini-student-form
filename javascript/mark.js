class Student {
    constructor(name, department, mark) {
        this.name = name;
        this.department = department;
        this.mark = mark;
    }

    result() {
        if (this.mark >= 35) {
            return "Pass";
        }
        return "Fail";
    }
}

class Details extends Student {
    display() {
        console.log("----------------")
        console.log("Name:", this.name);
        console.log("Department:", this.department);
        console.log("Mark:", this.mark);
        console.log("Result:", this.result());
        console.log("----------------");
    }
}

const student = [
    new Details("Gayathri", "IT", 37),
    new Details("Divya", "BCA", 55),
    new Details("Dharshini", "CS", 25)
];

let passCount = 0;
let failCount = 0;

for (let i = 0; i < student.length; i++) {
    student[i].display();

    if (student[i].result() === "Pass") {
        passCount++;
    } else {
        failCount++;
    }
}

console.log("Passed Students Count:", passCount);
console.log("Failed Students Count:", failCount);