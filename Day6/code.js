// // ===== Day 6: Callbacks & Timers =====

// // --- Callback (basic) ---
// // a callback is just a function passed into another function

// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }

// add(5, 3, function (sum) {
//     console.log("Sum:", sum); // Sum: 8
// });

// // --- Callback with arrow function ---

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// greet("Anshu", () => {
//     console.log("Greeting done!");
// });

// // --- Simulating delay with callback ---
// // pretend this is fetching data from a server

// function getUser(callback) {
//     setTimeout(() => {
//         callback({ name: "Anshu", age: 21 });
//     }, 1500);
// }

// console.log("Fetching user...");
// getUser((user) => {
//     console.log("Got user:", user);
// });

// // --- Callback Hell (nested mess) ---

// function step1(cb) { setTimeout(() => { console.log("Step 1 done"); cb(); }, 500); }
// function step2(cb) { setTimeout(() => { console.log("Step 2 done"); cb(); }, 500); }
// function step3(cb) { setTimeout(() => { console.log("Step 3 done"); cb(); }, 500); }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps done (but ugly code)\n");
//         });
//     });
// });
// // this nesting is why we need promises (Day 6 notes)


// // ===== Timers =====

// // --- setTimeout — runs once after delay ---

// setTimeout(() => {
//     console.log("This prints after 2 seconds");
// }, 2000);

// // --- clearTimeout — cancel a timeout ---

// const myTimer = setTimeout(() => {
//     console.log("This will NEVER print");
// }, 3000);

// clearTimeout(myTimer);
// console.log("Timer cancelled!");

// // --- setInterval — runs again and again ---

// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log("Tick:", count);
// }, 1000);

// // --- clearInterval — stop the interval after 5 ticks ---

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval stopped after 5 ticks");
// }, 5500);

// // --- Countdown using setInterval ---

// function countdown(n) {
//     let remaining = n;
//     const id = setInterval(() => {
//         console.log(remaining);
//         remaining--;
//         if (remaining < 0) {
//             clearInterval(id);
//             console.log("Time's up!");
//         }
//     }, 1000);
// }

// // start countdown after other examples finish
// setTimeout(() => countdown(3), 7000);

// // --- setTimeout(fn, 0) trick ---
// // even with 0ms delay, it waits for sync code to finish

// console.log("Start");
// setTimeout(() => console.log("Timeout 0ms"), 0);
// console.log("End");
// // Output order: Start → End → Timeout 0ms




function getUser(username,password,callback){
    setTimeout(()=>{
        console.log(`${username} logged in succesfully`);
        callback(101);
    },2000)
}


function getPosts(userId,callback){
    setTimeout(()=>{
        console.log("Posts are fetched");
        callback(10456);
    },2000)
}

function getLikes(postId,callback){
    setTimeout(()=>{
        console.log(`likes on the post ${postId} are fetched`)
        callback(142);
    },500)
}

function getComments(postId,callback){
    setTimeout(()=>{
        console.log(`comments on the post ${postId} are fetched`)
        callback(["nice post!","very helpful","loved it"]);
    },800)
}



getUser('anshusom1c','anshu',(userId)=>{
    console.log(`The user id is ${userId}`)
    getPosts(userId,(postId)=>{
        console.log(`Post id is ${postId}`)
        getLikes(postId,(likes)=>{
            console.log(likes)
            getComments(postId,(comments)=>{
                console.log("Comments:",comments)
            })
        })
    })
})
