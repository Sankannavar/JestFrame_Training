// function - functions are peice of code that can be reused
function add(a, b) {
    return "Sum is " + (a + b);
}
// Function type Annotation
var substract;
substract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var result = add(5, 10);
console.log("".concat(result));
console.log("Substraction is ".concat(substract(5, 4)));
console.log("Multiplication is ".concat(multiply(5, 4)));
// Optional and Default Parameters
function greet(name, greeting, age) {
    return "".concat(greeting ? greeting : "Hello", ", ").concat(name, " ").concat(age ? ", Age: " + age : "");
}
console.log(greet("Aaryan"));
console.log(greet("Aaryan", undefined, 20));
// Generics
// flexible way to create reusable components
function myFunc(arg) {
    return arg;
}
var r = myFunc(100);
console.log("Generic Function Result: ".concat(r));
var r1 = myFunc("TypeScript");
console.log("Generic Function Result: ".concat(r1));
var r2 = myFunc(true);
console.log("Generic Function Result: ".concat(r2));
