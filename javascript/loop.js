//for(let i=0;i<5;i++){
//    console.log(i);
//}
//const students=["Gayathri","Divya","Dharshini"]
//for(i=0;i<(students.length);i++){
//    console.log(students[i]);
//}
//const students=["Gayathri","Divya","Dharshini"]
//for(let i=0;i<students.length;i++){
//  console.log(students[i],students[i].length);
//}
//const students = ["Gayathri", "Divya", "Dharshini"];
//for (let i = 0; i < students.length; i++) {
  //  let count = 0;
    //for (const char of students[i]) {
      //  count++;
    //}
    //console.log(students[i] + " : " + count);
//}
const students = ["Gayathri", "Divya", "Dharshini"];
let i=0;
while(students[i]!==undefined){
    let count = 0;
    while (students[i][count]!==undefined) {
       count++; 
    }
    console.log(students[i] + " : " + count);
    i++;
}