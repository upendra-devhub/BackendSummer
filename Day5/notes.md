# Day 5: Spread & Rest Operators

## What is it?

The **spread operator** (`...`) expands an iterable (array, string, object) into individual elements. Introduced in **ES6**.

## Arrays

### Merging arrays

```js
const merged = [...[1, 2, 3], ...[4, 5, 6]]; // [1, 2, 3, 4, 5, 6]
```

### Copying an array

```js
const copy = [...original]; // shallow copy
```

> **Shallow** copy — nested objects still share references.

### Inserting elements

```js
const expanded = [1, ...[5, 6], 10]; // [1, 5, 6, 10]
```

## Function arguments

```js
Math.max(...[3, 7, 1, 9]); // 9
```

## Objects

Merge or clone properties. If keys overlap, **last one wins**.

```js
const base = { name: "Anshu", age: 21 };
const updated = { ...base, city: "Farrukhabad" };
// { name: "Anshu", age: 21, city: "Farrukhabad" }

const overridden = { ...base, age: 25 }; // age → 25
```

## Rest Operator (`...`)

Collects remaining elements into an array/object. Same syntax as spread, but used on the **receiving** side.

### Function parameters

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
```

### Array destructuring

```js
const [first, ...rest] = [10, 20, 30, 40];
// first = 10, rest = [20, 30, 40]
```

### Object destructuring

```js
const { name, ...others } = { name: "Anshu", age: 21, city: "Farrukhabad" };
// name = "Anshu", others = { age: 21, city: "Farrukhabad" }
```

> Rest must always be the **last** element — `[...rest, last]` is invalid.

## Spread vs Rest — Quick Comparison

| | Spread | Rest |
|---|--------|------|
| **Does** | Expands elements | Collects elements |
| **Where** | Function call, array/object literal | Function param, destructuring |
| **Example** | `fn(...arr)` | `function fn(...args)` |

## Classes

Syntactic sugar over constructor functions & prototypes — same thing underneath, cleaner OOP syntax.

```js
class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`${this.name} says Hello!!`);
  }
}

const s1 = new Student("Anshu");
s1.name;    // "Anshu"
s1.greet(); // "Anshu says Hello!!"
```

### Inheritance (`extends`)

```js
class Topper extends Student {
  constructor(name, rank) {
    super(name); // calls parent constructor
    this.rank = rank;
  }
}
```

> Under the hood: `class` = constructor function + prototype methods. No new mechanism.

## Error Handling

A way to handle unexpected issues gracefully so the app doesn't crash.

### `try...catch...finally`

```js
try {
  // code that might fail
  JSON.parse("invalid json");
} catch (err) {
  console.log(err.message); // error details
} finally {
  // always runs — cleanup code
}
```

### Throwing custom errors

```js
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

try {
  divide(10, 0);
} catch (e) {
  console.log(e.message); // "Cannot divide by zero"
}
```

### Common error types

| Type | When |
|------|------|
| `ReferenceError` | Using an undeclared variable |
| `TypeError` | Wrong type operation (e.g. `null.name`) |
| `SyntaxError` | Invalid syntax |
| `RangeError` | Value out of range |

> Use `try...catch` around code you **know** could fail — API calls, JSON parsing, user input, etc.

## JSON (JavaScript Object Notation)

A lightweight data format for storing and exchanging data. All data is in **key-value pairs**.

### Syntax

```json
{
  "name": "Anshu",
  "age": 21,
  "skills": ["JS", "Node"]
}
```

> Keys **must** be double-quoted strings. No trailing commas, no comments. JSON is **not valid JS** — it's just a data format.

### Converting between JS & JSON

```js
// JS object → JSON string
const user = { name: "Anshu", age: 21 };
const jsonStr = JSON.stringify(user);
console.log(jsonStr); // '{"name":"Anshu","age":21}'

// JSON string → JS object
const parsed = JSON.parse(jsonStr);
console.log(parsed.name); // "Anshu"
```

### JS Object vs JSON

| | JS Object | JSON |
|---|-----------|------|
| Keys | Unquoted or quoted | **Must** be double-quoted |
| Values | Any type (functions, undefined…) | Strings, numbers, bools, arrays, objects, null |
| Usage | In code | Data transfer (APIs, files) |