var studentName = "Chetana";
var age = 30;
var enrolled = true;
var cources = ["Typescript", "Jest Framework"];
function getStudentInfo(name, age, enrolled) {
    return "student ".concat(name, " is ").concat(age, " years old enrolled:").concat(enrolled);
}
console.log(getStudentInfo(studentName, age, enrolled));
