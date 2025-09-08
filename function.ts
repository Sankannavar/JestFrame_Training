function add(a:number,b:number):string{
return "sum is: "+(a+b);
}
let result = add(2,3);
console.log(result);

function test(fname:string,lname?:string):string{
    return fname;
}
let result1=test("chetana","S");
console.log(result1);

function myFun<T>(arg:T):T{
    return arg;
}
let r=myFun<number>(100);
console.log(r)
