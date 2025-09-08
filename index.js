// let --> value can be reassigned
var a = 5;
a = 10;
// const --> value cannot be reassigned
var pi = 3.14;
// pi = 3.15; // This will cause an error
var b = 10;
var message = "Hello, TypeScript!";
var isActive = true;
var list = [1, 2, 3, 4, 5];
// console.log(`The sum of a and b is: ${a + b}`);
// console.log(message);
// console.log(`Is active: ${isActive}`);
// console.log(`List: ${list}`);
// Union type example
var x = 100;
x = "Now I'm a string";
x = true;
// console.log(`Value of x: ${x}`);
// Any type example
var y = 50;
y = "Now I'm a string";
y = false;
y = [1, 23, 4];
// console.log(`Value of y: ${y}`);
// type assertion example
var z = y;
z = 200;
// console.log(`Value of z: ${z}`);
var obj = {
    name: "Aaryan",
    role: "Trainer",
    salary: 50000,
    exp: 10
};
// console.log(obj);
// object types
var emp = {
    name: "Aaryan",
    role: "Trainer",
    salary: 50000
};
var emp1 = {
    name: "Aaryan",
    role: "Trainer",
    salary: 50000,
    exp: 10
};
var val = 5; // not disable type checking
val = "Now I'm a string";
if (typeof val === "string") {
    console.log("String length is ".concat(val.length));
}
var val1 = 10; // disable type checking
val1 = "Now I'm a string";
if (typeof val1 === "string") {
    console.log("String length is ".concat(val1.length));
}
else {
    // This will not cause a compile-time error, but may cause a runtime error if val1 is not a string
    console.log("String length is ".concat(val1.length)); // Potential runtime error
}
