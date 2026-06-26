# Day 7: Promises & Async-Await

## What is a Promise?

An object that represents the **eventual result** (or failure) of an async operation. Cleaner alternative to callbacks.

## Three States

| State | Meaning |
|-------|---------|
| `pending` | Still working |
| `fulfilled` | `resolve()` was called |
| `rejected` | `reject()` was called |

> Once settled (fulfilled/rejected), a promise **cannot change** state.

## Creating a Promise

```js
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "Anshu" });
      else reject("Invalid ID");
    }, 1500);
  });
}
```

## Consuming — `.then()`, `.catch()`, `.finally()`

```js
fetchUser(1)
  .then((user) => console.log(user))     // on success
  .catch((err) => console.error(err))    // on failure
  .finally(() => console.log("Done"));   // always runs
```

## Chaining

Each `.then()` returns a new promise — no more nesting.

```js
getUser(id)
  .then((user) => getOrders(user))
  .then((orders) => getDetails(orders[0]))
  .then((details) => console.log(details))
  .catch((err) => console.error(err)); // one catch for all
```

> Return a value from `.then()` → next `.then()` receives it. Return a promise → next `.then()` waits for it.

## Promise Helper Methods

| Method | Resolves when | Rejects when |
|--------|--------------|--------------|
| `Promise.all` | **All** fulfill | **Any one** rejects |
| `Promise.allSettled` | **All** settle | Never |
| `Promise.race` | **First** to settle | **First** to settle (if rejected) |
| `Promise.any` | **First** to fulfill | **All** reject |

```js
Promise.all([p1, p2, p3]).then(console.log); // ["A", "B", "C"]
```

## Promisification

Wrapping a callback-based function in `new Promise` so you can use `.then()` instead.

```js
// callback style
getUser(1, (user) => console.log(user));

// promisified
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Anshu" }), 1000);
  });
}
getUser(1).then((user) => console.log(user));
```

> This is how you escape **callback hell** — wrap each step, then chain.


## Async - Await

Syntactic sugar over promises — no more `.then()` chaining. Makes async code **look synchronous** for better readability.

### Syntax

```js
async function loadData() {
  const user = await getUser();       // waits for promise to resolve
  const posts = await getPosts(user);
  console.log(user, posts);
}
```

- `async` before a function → it **always returns a promise**.
- `await` pauses the function until the promise settles (doesn't block the thread).
- `await` can **only** be used inside an `async` function.

### Error handling with `try...catch`

```js
async function loadData() {
  try {
    const user = await getUser(-1);
    console.log(user);
  } catch (err) {
    console.error("Failed:", err);  // catches rejection
  }
}
```

> `try...catch` here does the same job as `.catch()` — but reads like normal sync code.