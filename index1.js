var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
var _b;
var point = { x: 1, y: 2, z: 3 };
var a = point.x;
var b = point.y;
var x = point.x, z = point.z;
_a = [b, a], a = _a[0], b = _a[1]; // swap values
console.log(a, b);
// Complex destructuring example
// const {
//  user: { profile: { name, email } },
//  settings: { theme = 'light', ...otherSettings }
// } = apiResponse;
var user = {
    id: 1,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};
var _c = user.address, city = _c.city, country = _c.country, others = __rest(user, ["address"]);
console.log(city, country, others);
// Rest operator in array destructuring
var arr = [1, 2, 3, 4, 5];
var first = arr[0], second = arr[1], third = arr[2], anything = arr.slice(3);
console.log(first, second, third, anything);
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var res = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num_1 = numbers_1[_a];
        res += num_1;
    }
    return res;
}
console.log(sum(1, 2, 3));
// type off
var num = "true";
if (typeof num === "string") {
    num = num.toUpperCase();
}
console.log(num);
if (10 in arr) {
    console.log("yes");
}
// Real world use case
var apiResponse = {
    status: 'success',
    code: 200,
    data: {
        apiString: 'some data',
    }
};
if (apiResponse.data.apiString in apiResponse.data) {
    // execute operations
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var alice = new Person();
console.log(alice instanceof Employee);
var names = ['Alice', 'Bob', '_Charlie'];
console.log(new Number(5) instanceof Number);
var reponse = "20";
if (typeof reponse === "string") {
    // reponse = new String(reponse).toString(); 
    console.log(reponse.toUpperCase());
}
else {
    console.log(reponse.toFixed(2));
}
function isCat(animal) {
    return animal.meow !== undefined;
}
function makeSound(animal) {
    if (isCat(animal)) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
var pet1 = {
    meow: function () { return console.log("Meow!"); },
    name: "Whiskers"
};
var pet2 = {
    bark: function () { return console.log("Woof!"); },
    name: "Rex"
};
function makeSound2(animal) {
    if (animal.meow) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
// makeSound2(pet1);
var value = "Hello, World!";
console.log(value.toUpperCase());
console.log((_b = { id: 2, name: 'Aaryan' }.email) === null || _b === void 0 ? void 0 : _b.toLowerCase());
// Inheritance
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.name, " started."));
    };
    return Car;
}());
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(name) {
        return _super.call(this, name) || this;
    }
    Engine.prototype.start = function () {
        _super.prototype.start.call(this);
        console.log("".concat(this.name, " engine is running."));
    };
    return Engine;
}(Car));
var myCar = new Car('X1');
var myEngine = new Engine('V8');
myEngine.start();
// Encapsulation
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var aryanAccount = new BankAccount(1000);
aryanAccount.deposit(500);
aryanAccount.withdraw(200);
console.log(aryanAccount.getBalance());
// Polymorphism
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        return 0;
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var myRect = new Rectangle(5, 10);
console.log(myRect.area());
// Abstraction
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog2.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    return Dog2;
}(Animal));
var myDog = new Dog2();
myDog.makeSound();
myDog.move();
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (msg) {
        console.log(msg);
    };
    return ConsoleLogger;
}());
var logger = new ConsoleLogger();
logger.log("Hello, Logger!");
