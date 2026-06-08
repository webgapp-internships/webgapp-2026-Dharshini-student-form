class student{
    constructor(name,department){
        this.name=name;
        this.department=department;
    }
bark(){
    return `${this.name}:${this.department}`;
}
}
const student1=new student("Gayathri","CS");
const student2=new student("Kovi","IT");
console.log(student1.bark());
console.log(student2.bark());