# Day 6: Asynchronous JavaScript

## Why Async?

JavaScript is **single-threaded** — it can run only one thing at a time. Async lets it start a long task (API call, file read, timer) and move on instead of waiting.

## Callbacks

A function passed to another function, to be called **later** when the work is done.

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((data) => console.log(data)); // "Data received" (after 2s)
```

### Callback Hell

Nested callbacks become unreadable fast:

```js
getUser(id, (user) => {
  getOrders(user, (orders) => {
    getDetails(orders[0], (details) => {
      // deeply nested — hard to maintain
    });
  });
});
```

> Promises and `async/await` solve this.


## Event Loop (Recap)

```
Call Stack → Web APIs → Callback Queue / Microtask Queue → Call Stack
```

1. Sync code runs on the **call stack**.
2. Async callbacks (timers, I/O) wait in the **callback queue** (macro-tasks).
3. Promise callbacks (`.then`, `await`) go to the **microtask queue** — processed **before** macro-tasks.

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Output: 1, 4, 3, 2
```

> **Microtasks** (promises) always run before **macro-tasks** (setTimeout).

## Timers

### `setTimeout`

Runs a function **once** after a specified delay (in ms).

```js
setTimeout(() => console.log("Hello"), 2000); // runs after 2s
```

### `clearTimeout`

Cancels a scheduled `setTimeout` before it fires.

```js
const timerId = setTimeout(() => console.log("Won't run"), 3000);
clearTimeout(timerId); // cancelled
```

### `setInterval`

Runs a function **repeatedly** at a fixed interval.

```js
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Tick ${count}`);
}, 1000);
// Tick 1, Tick 2, Tick 3 ... every second
```

### `clearInterval`

Stops a running `setInterval`. Without this, the interval runs **forever**.

```js
let counter = 0;
const id = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter === 5) {
    clearInterval(id); // stops after 5 ticks
    console.log("Stopped");
  }
}, 1000);
```

### Quick Reference

| Function | Purpose | Returns |
|----------|---------|---------|
| `setTimeout(fn, ms)` | Run once after delay | Timer ID |
| `clearTimeout(id)` | Cancel a timeout | `undefined` |
| `setInterval(fn, ms)` | Run repeatedly | Interval ID |
| `clearInterval(id)` | Stop an interval | `undefined` |

> `setTimeout(fn, 0)` doesn't run immediately — it schedules after the current call stack clears.
