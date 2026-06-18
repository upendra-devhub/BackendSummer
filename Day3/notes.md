# Day 3: Constructors & Prototypes

## What & Why
A **constructor** is a special function that initialises object properties at creation time — so you don't manually assign each property one by one.

## Syntax
```js
function Student(name, age) {
    this.name = name;
    this.age = age;
}
const s1 = new Student("Anshu", 21);
```

## How `new` Works
1. Creates an empty object `{}`
2. `this` points to that object
3. Properties get assigned
4. Object is returned automatically

## ES6 Class (Same thing, cleaner syntax)
```js
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

> `class` is just syntactic sugar — still uses prototypes under the hood.


## Prototypes
A **prototype** is a shared object where you define methods once, and all instances created by that constructor can access them — saves memory instead of copying the method into every object.

```js
Student.prototype.greet = function () {
    console.log("Hello, " + this.name);
};
s1.greet(); // "Hello, Anshu"
```

> **Priority:** If the constructor and prototype both have the same method, the **constructor's version wins**.

### Useful Prototype Methods
* **`hasOwnProperty(key)`** — checks if the property belongs directly to the object (not inherited from prototype).
  ```js
  s1.hasOwnProperty("name");  // true
  s1.hasOwnProperty("greet"); // false (it's on the prototype)
  ```

## Closures
A **closure** is when a function remembers variables from its outer scope even after the outer function has finished executing.

```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

> The inner function "closes over" the `count` variable — that's why it's called a closure.