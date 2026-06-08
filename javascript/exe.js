const name=["Gayathri","Divya","Dharshini"];
const department=["IT","BCA","CS"];
const mark=["37","55","25"]
function result(mark){
    if(mark>=35){
        return "Pass"
    }
    else{
        return "Fail"
    }
}
for(let i=0;i<name.length;i++){
    console.log("Name:",name[i]);
    console.log("Department:",department[i]);
    console.log("Mark:",mark[i]);
    console.log("Grade:",result(mark[i]));
}
let i = 0;
let count=0;
console.log("Passed Students:");
while (i < name.length) {
    if (result(mark[i]) === "Pass") {
        count=count+1;
    }
    i=i+1;
}
console.log(count);
i = 0;
count=0;
console.log("Failed Students:");
while (i < name.length) {
    if (result(mark[i]) === "Fail") {
        count=count+1;
    }
    i=i+1;
}
console.log(count);