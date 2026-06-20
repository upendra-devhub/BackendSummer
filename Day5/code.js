//spread operator   ...

let arr1=[1,2,3];
let arr2=[4,5,6];

let arr3=[...arr1,...arr2];
console.log(arr3)

//rest operator

function hello(arg1, ...arg2){
    console.log(arg1);
    console.log(arg2);

}

hello(1,2,3,4,5,2,4,5,3);

//here the ...arg2 will act as a array which gonna collect all the remaining values other than arg1



//classes

class Student{
    constructor(name){
        this.name=name;
    }
    greet(){
       console.log( `${this.name} says Hello!!`)
    }
}

const s1=new Student("Anshu")
console.log(s1.name)
s1.greet();


//error handling

// --- try...catch...finally ---
try {
    JSON.parse("invalid json");
} catch (err) {
    console.log("Caught:", err.message);
} finally {
    console.log("Finally block always runs");
}

// --- Throwing custom errors ---
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

try {
    console.log(divide(10, 2));  // 5
    console.log(divide(10, 0));  // throws error
} catch (e) {
    console.log("Error:", e.message);
}

// --- Common error types ---
try { console.log(x); }
catch (e) { console.log("ReferenceError:", e.message); }

try { null.name; }
catch (e) { console.log("TypeError:", e.message); }

// ===== JSON =====

// --- JS object → JSON string ---
const user = { name: "Anshu", age: 21, city: "Farrukhabad" };
const jsonStr = JSON.stringify(user);
console.log("Stringified:", jsonStr);
// '{"name":"Anshu","age":21,"city":"Farrukhabad"}'

// --- JSON string → JS object ---
const parsed = JSON.parse(jsonStr);
console.log("Parsed name:", parsed.name);   // "Anshu"
console.log("Parsed age:", parsed.age);     // 21

// --- Pretty print (with indentation) ---
console.log("Pretty:\n", JSON.stringify(user, null, 2));

// --- Parsing invalid JSON (use try...catch) ---
try {
    JSON.parse("{ bad json }");
} catch (e) {
    console.log("Parse error:", e.message);
}


//async programminng

// lets say we are performing something that is going to take so much time but js wont wait for that to finish it gonna move ahead and execute other things that gonna create some unexpected behaviour in our code so to prevent that we do async programming we deleberately make it do wait till some specific task is done 

setTimeout(function(){
    console.log("hello")
},200)