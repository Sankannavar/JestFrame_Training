const studentName:string="Chetana";
const age:number=30;
const enrolled:boolean=true;
const cources:string[]=["Typescript","Jest Framework"];

function getStudentInfo(name:string,age:number,enrolled:boolean):string{
    return 'student ${name} is ${age} years old enrolled:${enrolled}';
}

console.log(getStudentInfo(studentName,age,enrolled));