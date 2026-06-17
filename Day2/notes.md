# Day 2: Node.js Architecture & Event Loop

## How Node.js Handles Multiple Requests on a Single Thread
Node.js handles concurrency using an **Asynchronous, Non-Blocking Event Loop** instead of spawning a thread per request.

### 🔄 The Request Workflow
1. **Receive:** Request hits the single main thread (**Event Loop**).
2. **Handle:**
   * **Sync Tasks:** Executed immediately on the main thread.
   * **Async I/O Tasks (DB, Network, File):** Offloaded to the **OS Kernel** or **libuv Worker Pool**.
3. **Queue:** Once the offloaded task is done, its callback enters the **Callback Queue**.
4. **Loop:** The Event Loop picks callbacks from the queue and runs them on the main thread once the call stack is clear.

```text
Requests ──► [Event Loop] ──► (Sync JS) ──► Executed on Main Thread
                 │
           (Async I/O)
                 ▼
          [libuv/Kernel] ──► (Done) ──► [Callback Queue] ──► Event Loop
```

### ⚡ Pros & Cons
* **Pros:** Low overhead (no thread creation context-switching), high scalability for I/O-intensive apps.
* **Cons:** CPU-bound tasks (e.g., machine learning, heavy math) block the single thread, freezing the server.


## Type Coercion
The automatic or implicit conversion of a value from one data type to another by JavaScript.

### 1. Implicit Coercion (Automatic)
* **String (`+`):** Coerces to string if any operand is a string.
  * `5 + '2' // '52'` | `'hello' + true // 'hellotrue'`
* **Number (`-`, `*`, `/`):** Coerces operands to numbers.
  * `'10' - 2 // 8` | `'5' * '3' // 15` | `'5' - 'foo' // NaN`
* **Boolean (Truthy/Falsy):** Occurs in conditional contexts.
  * **Falsy:** `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`.
  * **Truthy:** Everything else (including `[]`, `{}`, `"0"`, `"false"`).

### 2. Equality Comparison
* **Loose (`==`):** Compares values **after** type coercion.
  * `5 == '5' // true` | `0 == false // true` | `null == undefined // true`
* **Strict (`===`):** Compares both **value and type** without coercion.
  * `5 === '5' // false` | `0 === false // false`

## Hoisting
JS moves **declarations** to the top of their scope before execution (only the declaration, not the assignment).

* **`var` & `function`:** Hoisted → accessible before declaration, but `var` returns `undefined`.
* **`let` & `const`:** **Not hoisted** (technically hoisted but in a *Temporal Dead Zone*) → accessing before declaration throws a `ReferenceError`.

## Objects
A collection of **key-value pairs** used to group related data and functionality into a single container.

```js
const student = {
    name: "Anshu",
    age: 21,
    city: "Farrukhabad"
};
```

### Accessing Object Values
* **Dot Notation (`.`):** Direct access using the key name.
  ```js
  console.log(student.age);    // 21
  ```
* **Bracket Notation (`[]`):** Access using a string key — required when the key is dynamic or contains special characters.
  ```js
  console.log(student["age"]); // 21

  const key = "name";
  console.log(student[key]);   // "Anshu"
  ```


### Updating & Deleting Properties
* **Update:** Reassign an existing key.
  ```js
  student.age = 22;             // age is now 22
  ```
* **Add:** Assign a new key that doesn't exist yet.
  ```js
  student.email = "anshu@mail.com";
  ```
* **Delete:** Use the `delete` operator to remove a property.
  ```js
  delete student.city;          // removes the 'city' key
  ```

> **Note:** `const` prevents reassigning the variable, but you can still modify, add, or delete its properties — `const` locks the *reference*, not the *content*.

### Accessing a Non-Existent Key
Accessing a property that **doesn't exist** on an object returns `undefined` — it does **not** throw an error.
```js
console.log(student.eat); // undefined
```
> **Clarification:** This is not related to hoisting. JS simply returns `undefined` for any property the object doesn't have.