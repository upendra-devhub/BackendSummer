// ===== Day 4: Arrays in JavaScript =====

// --- Creating Arrays ---
const fruits = ["apple", "banana", "mango"];
const mixed = [1, "hello", true, null];
console.log("fruits:", fruits);
console.log("mixed:", mixed);

// --- Adding & Removing Elements ---
const nums = [1, 2, 3];

nums.push(4);
console.log("push(4):", nums); // [1, 2, 3, 4]

nums.pop();
console.log("pop():", nums); // [1, 2, 3]

nums.unshift(0);
console.log("unshift(0):", nums); // [0, 1, 2, 3]

nums.shift();
console.log("shift():", nums); // [1, 2, 3]

nums.splice(1, 1);
console.log("splice(1,1):", nums); // [1, 3]

// --- forEach ---
console.log("\nforEach:");
[10, 20, 30].forEach((n) => console.log(" ", n));

// --- map ---
const doubled = [1, 2, 3].map((n) => n * 2);
console.log("map (doubled):", doubled); // [2, 4, 6]

// --- filter ---
const evens = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0);
console.log("filter (evens):", evens); // [2, 4, 6]

// --- reduce ---
const sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
console.log("reduce (sum):", sum); // 10

// --- Search & Check ---
const colors = ["red", "green", "blue", "green"];

console.log("\nincludes('blue'):", colors.includes("blue")); // true
console.log("indexOf('green'):", colors.indexOf("green")); // 1
console.log("find(len > 3):", colors.find((c) => c.length > 3)); // "green"
console.log("findIndex(len > 3):", colors.findIndex((c) => c.length > 3)); // 1

// --- slice, concat, join, reverse, sort ---
const arr = [3, 1, 4, 1, 5];

console.log("\nslice(1,3):", arr.slice(1, 3)); // [1, 4]
console.log("concat([9]):", arr.concat([9])); // [3, 1, 4, 1, 5, 9]
console.log("join('-'):", arr.join("-")); // "3-1-4-1-5"
console.log("sort:", [...arr].sort((a, b) => a - b)); // [1, 1, 3, 4, 5]

// --- Spread Operator ---
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
const copy = [...a];
console.log("\nspread (merged):", merged); // [1, 2, 3, 4]
console.log("spread (copy):", copy); // [1, 2]

// --- Destructuring ---
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("\ndestructuring:");
console.log("first:", first); // 10
console.log("second:", second); // 20
console.log("rest:", rest); // [30, 40, 50]
