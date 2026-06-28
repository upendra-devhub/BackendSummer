# Day 9: File Handling — FS Module

## What is File Handling?

Reading, writing, updating, and deleting files from disk using code — essential for any backend app (logs, configs, user uploads, etc.).

## The `fs` Module

A **core** (built-in) Node.js module — no installation needed.

```js
import fs from "fs";
```

> Use `"type": "module"` in `package.json` for `import` syntax, or use `const fs = require("fs")` for CommonJS.

## Sync vs Async

| Style | Method suffix | Blocks thread? |
|-------|--------------|----------------|
| Synchronous | `...Sync` | Yes |
| Asynchronous (callback) | — | No |
| Promise-based | `fs.promises.*` | No |

> Always prefer **async** in production to avoid blocking the event loop.

## Reading Files

```js
// Sync
const data = fs.readFileSync("example.txt", "utf-8");
console.log(data);

// Async (callback)
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

> Pass `"utf-8"` as encoding to get a string — without it you get a raw `Buffer`.

## Writing Files

```js
// Creates the file if it doesn't exist, overwrites if it does
fs.writeFileSync("output.txt", "Hello World");

// Async
fs.writeFile("output.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("File written");
});
```

## Appending to Files

```js
// Sync
fs.appendFileSync("data1.txt", "hello");

// Async
fs.appendFile("data1.txt", "\n hey?", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("data appended");
});
```

> `appendFile` adds content to the **end** without erasing existing data.
> It also **creates the file** if it doesn't already exist.

## Renaming / Moving Files

```js
// Sync
fs.renameSync("data1.txt", "detaa.txt");

// Async
fs.rename("detaa.txt", "minioooon.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file name changed");
});
```

## Deleting Files

```js
// Sync
fs.unlinkSync("test.txt");

// Async
fs.unlink("minioon.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file deleted");
});
```

## Checking if a File Exists

```js
if (fs.existsSync("config.json")) {
  console.log("File exists");
}
```

## Working with Directories

```js
// Create a single directory
fs.mkdirSync("uploads");

// Create nested directories (recursive)
fs.mkdir("dir1/dir2/dir3", { recursive: true }, (err) => {
  if (err) {
    console.log("oooopssssssss");
    return;
  }
  console.log("folder created");
});

// Sync version — also supports deep paths
fs.mkdirSync("./Training/Backend/Assignment/CA", { recursive: true });

// Read directory contents
fs.readdir("./", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files); // ["code.js", "notes.md", ...]
});

// Remove an EMPTY directory
fs.rmdirSync("uploads");
// ⚠️ Won't work if the directory is non-empty!
```

> Use `{ recursive: true }` with `mkdir` to create an entire nested path in one call.

## Removing Non-Empty Directories

`rmdirSync` only removes **empty** directories. To delete a directory that has files/subdirectories inside it, use `fs.rmSync`:

```js
fs.rmSync("Day9", { recursive: true, force: true });
// Deletes the directory and everything inside it
```

> ⚠️ Be careful with `rmSync` + `force: true` — it will silently delete everything without confirmation.

## File Stats

Use `fs.statSync` to get metadata about a file — size, creation time, whether it's a file or directory, etc.

```js
const info = fs.statSync("code.js");
console.log(info);
// { size: 2635, birthtime: ..., mtime: ..., isFile: [Function], isDirectory: [Function], ... }
```

## Copying Files

```js
fs.copyFileSync("notes.md", "notes1.md");
// Creates an exact copy of the source file
```

## Reading & Writing JSON Files

JSON files are just text — read them as a string, then parse.

```js
// 1. Read the file
const data = fs.readFileSync("data.json", "utf-8");

// 2. Parse the JSON string into a JS object
const parsed = JSON.parse(data);
console.log(parsed);        // { name: "Anshu", age: 21, skills: [...] }
console.log(parsed.name);   // "Anshu"

// 3. Modify the object
parsed.college = "LPU";
parsed.skills.push("Express.js");

// 4. Write it back (stringify with pretty-print)
fs.writeFileSync("data.json", JSON.stringify(parsed, null, 2));
console.log("JSON updated!");
```

> `JSON.stringify(obj, null, 2)` — the `2` adds 2-space indentation for readability.
> `JSON.parse(string)` — converts a JSON string back into a JavaScript object.

---

## Quick Reference

| Method | Purpose |
|--------|---------|
| `readFileSync` / `readFile` | Read file contents |
| `writeFileSync` / `writeFile` | Write (overwrite) a file |
| `appendFileSync` / `appendFile` | Append to a file |
| `unlinkSync` / `unlink` | Delete a file |
| `existsSync` | Check if file/dir exists |
| `mkdirSync` / `mkdir` | Create a directory |
| `readdirSync` / `readdir` | List directory contents |
| `rmdirSync` | Remove an empty directory |
| `rmSync` | Remove directory (even non-empty) |
| `renameSync` / `rename` | Rename or move a file |
| `statSync` | Get file/directory metadata |
| `copyFileSync` | Copy a file |

> All async versions accept a callback `(err, result)` — or use `fs.promises` for `async/await` support.

## Key Takeaway: Sync vs Async

The **only** difference to remember — every async `fs` method needs a **callback** that handles the error. Sync methods throw directly, async ones pass the error to the callback.

```js
// Sync — error thrown, use try/catch
fs.unlinkSync("file.txt");

// Async — error in callback, handle it there
fs.unlink("file.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("done");
});
```