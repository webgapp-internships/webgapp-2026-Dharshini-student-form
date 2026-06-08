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
