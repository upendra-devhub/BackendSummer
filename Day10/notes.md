# Day 10: Events, Streams & Pipes

## Event-Driven Programming

Normal code runs **top to bottom sequentially**. In event-driven programming, the program **waits for an event** to occur and then executes the corresponding code.

**Event** — something that happens (a click, a request, a file read, etc.).

## The `events` Module

```js
import EventEmitter from 'events';
const myEvent = new EventEmitter();
```

> `EventEmitter` is a **class** — always use `new` to create an instance.

## Listening & Emitting Events

```js
// Register a listener
myEvent.on('anshu', () => {
    console.log('Hello');
});

// Fire the event
myEvent.emit('anshu');
```

> You can `emit` the same event multiple times — the listener runs each time.

## Passing Arguments with Events

```js
myEvent.on('anshu', (name) => {
    console.log(`Hello ${name}`);
});

myEvent.emit('anshu', 'Anshu'); // Hello Anshu
```

## Removing Listeners

```js
const eventF = () => console.log('Hello');

myEvent.on('anshu', eventF);
myEvent.removeListener('anshu', eventF);   // removes specific listener
myEvent.removeAllListeners('anshu');        // removes all listeners for 'anshu'
```

> To remove a specific listener, you need a **named function** reference — anonymous functions can't be removed.

---

## Streams

A **sequence of data made available over time** — data is sent **chunk by chunk** instead of all at once.

### Why Streams?

- Memory efficient — doesn't load the entire file into RAM
- Faster — processing starts as soon as the first chunk arrives

### ReadStream & WriteStream

```js
import fs from 'fs';

const readStream = fs.createReadStream('input.txt', { encoding: 'utf-8', highWaterMark: 10 });
const writeStream = fs.createWriteStream('output.txt');
```

> `highWaterMark` controls chunk size in bytes (default: 64KB).

### Handling Stream Events

```js
// 'data' event — fires for each chunk received
readStream.on('data', (chunk) => {
    console.log('Data Received');
    writeStream.write(chunk);
});

// 'end' event — fires when all chunks are received
readStream.on('end', () => {
    console.log('All chunks received');
    writeStream.end();
});
```

---

## Pipes

A **shortcut** that connects a readStream to a writeStream — no need to manually listen for `data` and `end` events.

```js
readStream.pipe(writeStream);
```

> `pipe` handles everything automatically — reading chunks, writing them, handling backpressure, and calling `end()`.

### With Error Handling

```js
import fs from 'fs';

const readStream = fs.createReadStream('input.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

readStream.on('error', (err) => console.log('Read error:', err.message));
writeStream.on('error', (err) => console.log('Write error:', err.message));
```

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| `EventEmitter` | Base class for all event-driven code in Node |
| `.on(event, fn)` | Register a listener |
| `.emit(event, ...args)` | Fire an event |
| `.removeListener(event, fn)` | Remove a specific listener |
| `createReadStream` | Read file chunk by chunk |
| `createWriteStream` | Write file chunk by chunk |
| `.pipe()` | Connect read → write automatically |
