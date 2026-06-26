# Day 8: NPM & Custom Modules

## Packages vs Modules

- **Module** — a reusable block of code you can import anywhere.
- **Package** — a bundle of modules packed together, distributed via npm.

> npm (Node Package Manager) hosts **2M+** packages — don't reinvent the wheel.

## Setting Up a Node Project

```bash
npm init
```

Initializes a `package.json` in the current folder — this tracks your project info and dependencies.

## Installing Packages

```bash
npm i package-name
```

| Command | What it does |
|---------|-------------|
| `npm i express` | Install a package |
| `npm uninstall express` | Remove a package |
| `npm i` | Install all deps from `package.json` |

> `node_modules/` is auto-generated — **never** push it to git. Add it to `.gitignore`.

## Creating Your Own Module

Export functions from a file:

```js
function add(a, b) {
  return a + b;
}

export { add };
```

Import and use them elsewhere:

```js
import { add } from './math.js';
console.log(add(4, 5)); // 9
```

> Make sure `"type": "module"` is set in your `package.json` to use `import/export` syntax.