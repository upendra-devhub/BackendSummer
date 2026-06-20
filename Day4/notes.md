# Day 4: Arrays in JavaScript

## What is an Array?

An **ordered collection** of values stored in a single variable. Arrays are **zero-indexed** and can hold mixed data types.

```js
const fruits = ["apple", "banana", "mango"];
const mixed = [1, "hello", true, null];
```

## Creating Arrays

- **Literal (preferred):** `const arr = [1, 2, 3];`
- **Constructor:** `const arr = new Array(1, 2, 3);`

> **Note:** `new Array(5)` creates an empty array of length 5, not `[5]`.

## Common Methods

### Adding & Removing Elements

| Method         | Action                        | Mutates? |
| -------------- | ----------------------------- | -------- |
| `push(val)`    | Add to **end**                | ✅       |
| `pop()`        | Remove from **end**           | ✅       |
| `unshift(val)` | Add to **start**              | ✅       |
| `shift()`      | Remove from **start**         | ✅       |
| `splice(i, n)` | Remove `n` items at index `i` | ✅       |

```js
const nums = [1, 2, 3];
nums.push(4); // [1, 2, 3, 4]
nums.pop(); // [1, 2, 3]
nums.unshift(0); // [0, 1, 2, 3]
nums.shift(); // [1, 2, 3]
nums.splice(1, 1); // [1, 3]  — removed element at index 1
```

### Iteration Methods (Non-Mutating)

- **`forEach(cb)`** — Executes a function on each element, returns nothing.
  ```js
  nums.forEach((n) => console.log(n));
  ```
- **`map(cb)`** — Returns a **new array** with transformed values.
  ```js
  const doubled = [1, 2, 3].map((n) => n * 2); // [2, 4, 6]
  ```
- **`filter(cb)`** — Returns a **new array** with elements that pass the test.
  ```js
  const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0); // [2, 4]
  ```
- **`reduce(cb, init)`** — Reduces the array to a **single value**.
  ```js
  const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0); // 6
  ```

### Search & Check

| Method          | Returns   | Purpose                               |
| --------------- | --------- | ------------------------------------- |
| `includes(val)` | `boolean` | Check if value exists                 |
| `indexOf(val)`  | `number`  | First index of value (`-1` if absent) |
| `find(cb)`      | `value`   | First element passing the test        |
| `findIndex(cb)` | `number`  | Index of first match                  |

### Other Useful Methods

- **`slice(start, end)`** — Returns a shallow copy of a portion (non-mutating).
- **`concat(arr)`** — Merges arrays, returns a new array.
- **`join(sep)`** — Joins elements into a string.
- **`reverse()`** — Reverses in place (mutating).
- **`sort(cb)`** — Sorts in place (mutating). Uses lexicographic order by default.
  ```js
  [10, 1, 5].sort((a, b) => a - b); // [1, 5, 10]
  ```

## Spread Operator with Arrays

The `...` operator expands an array into individual elements.

```js
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]; // [1, 2, 3, 4]
const copy = [...a]; // shallow copy
```

## Destructuring

Extract values from arrays into named variables.

```js
const [first, second, ...rest] = [10, 20, 30, 40];
// first = 10, second = 20, rest = [30, 40]
```

## ES6 (ECMAScript 2015)

A major update to JavaScript that introduced modern syntax and features for cleaner, more readable code.

### `let` & `const`

Block-scoped alternatives to `var`.

| Keyword | Reassignable? | Block-Scoped?        |
| ------- | ------------- | -------------------- |
| `var`   | ✅            | ❌ (function-scoped) |
| `let`   | ✅            | ✅                   |
| `const` | ❌            | ✅                   |

```js
let count = 0;
count = 1; // ✅ allowed

const PI = 3.14;
PI = 3; // ❌ TypeError
```

### Arrow Functions

Shorter syntax for functions. **Does not** have its own `this` — inherits from the enclosing scope.

```js
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow
const add = (a, b) => a + b;

// Single param — parentheses optional
const double = (n) => n * 2;
```

### Template Literals

String interpolation using backticks.

```js
const name = "Anshu";
console.log(`Hello, ${name}!`); // Hello, Anshu!
console.log(`Sum: ${2 + 3}`); // Sum: 5
```

### Default Parameters

Set fallback values for function parameters.

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
greet(); // "Hello, Guest"
greet("Anshu"); // "Hello, Anshu"
```

### Rest & Spread Operators (`...`)

- **Rest** — Collects remaining arguments into an array.
  ```js
  function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  sum(1, 2, 3); // 6
  ```
- **Spread** — Expands an iterable into individual elements.
  ```js
  const a = [1, 2];
  const b = [...a, 3, 4]; // [1, 2, 3, 4]
  ```

### Object Destructuring

Extract properties from objects into variables.

```js
const user = { name: "Anshu", age: 21, city: "Farrukhabad" };
const { name, age } = user;
// name = "Anshu", age = 21

// With renaming
const { city: hometown } = user;
// hometown = "Farrukhabad"
```

### Enhanced Object Literals

Shorthand syntax when key and variable name match.

```js
const name = "Anshu";
const age = 21;

// Old way
const user = { name: name, age: age };

// ES6 shorthand
const user = { name, age };
```

### Classes

Syntactic sugar over prototype-based inheritance.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

const d = new Dog("Rex");
d.speak(); // "Rex barks"
```

### Promises

Handle async operations without deeply nested callbacks.

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
};

fetchData()
  .then((data) => console.log(data)) // "Done!"
  .catch((err) => console.error(err));
```

| State       | Meaning                          |
| ----------- | -------------------------------- |
| `pending`   | Initial state, not yet settled   |
| `fulfilled` | Operation completed successfully |
| `rejected`  | Operation failed                 |

### Modules (`import` / `export`)

Split code into reusable files.

```js
// math.js
export const add = (a, b) => a + b;
export default function subtract(a, b) {
  return a - b;
}

// app.js
import subtract, { add } from "./math.js";
```

> **Note:** ES6 modules use `import/export`. Node.js traditionally uses `require/module.exports` (CommonJS). Both can coexist with proper config.
