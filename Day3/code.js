// 1. Function Constructor 

function Student(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const s1 = new Student("Anshu", 21, "Farrukhabad");
const s2 = new Student("Rahul", 22, "Delhi");

console.log(s1);
console.log(s2.name);


//2. ES6 Class Constructor

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const c1 = new Car("Toyota", "Camry", 2024);
const c2 = new Car("Honda", "Civic", 2023);

console.log(c1);

// 3. Prototypes — shared method across all instances

Student.prototype.greet = function () {
    console.log("Hello, " + this.name);
};

s1.greet(); // "Hello, Anshu"
s2.greet(); // "Hello, Rahul"


// 4. Priority — constructor method wins over prototype

function Teacher(name) {
    this.name = name;
    this.greet = function () {
        console.log("Constructor: Hi, I'm " + this.name);
    };
}

Teacher.prototype.greet = function () {
    console.log("Prototype: Hi, I'm " + this.name);
};

const t1 = new Teacher("Sharma Ji");
t1.greet(); // "Constructor: Hi, I'm Sharma Ji" (constructor wins)


// 5. Closures — inner function remembers outer scope

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log("Count:", count);
    };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
// count still lives because inner() "closed over" it
