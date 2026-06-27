// const fs=require('fs');
import fs from 'fs';

// const data=fs.readFileSync("notes.md",'utf8');
// console.log(data)


// fs.readFile('notes.md','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// fs.writeFile('test.txt','Hello anshu this line is being written using node commands ',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(`data written`)
// })

// fs.writeFileSync('test.txt','Hello anshu this line is being written using node commands but this time its in sync')
// console.log(`data written`)

// fs.appendFileSync('data1.txt','hello');
//append file would also create a new file if it doesnt exist

// fs.appendFile('data1.txt','\n hry?',(err)=>{
//     if(err){
//         console.log(err);
//         return ;
//     }
//     console.log(`data appended`)
// })

// fs.renameSync('data1.txt','detaa.txt');

// fs.rename('detaa.txt','minioooon.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`file name changed`);
// })


// fs.unlink('minioon.txt',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('file deleted')
// })

// fs.unlinkSync('test.txt')


// so what is the main thing in sync and async only thing we need to keep in our mind is that the async one must have a callback which should be handling the error for the particular function

// fs.mkdir('dir1/dir2/dir3',{ recursive: true },(err)=>{
//     if(err){
//         console.log(`oooopssssssss`)
//         return;
//     }
//     console.log(`folder created`)
// })

// fs.mkdirSync('./Training/Backend/Assignment/CA',{recursive:true});

// fs.readdir("./",(err,files)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(files)
// })


// fs.rmdirSync("Day9");
//wont work as it is non-empty

// to  do so 

// fs.rmSync("Day9",{recursive:true,force:true})
//it would delete the non empty folders too


// const info=fs.statSync('code.js');
// console.log(info)
// console.log(fs.existsSync('notes.md'))


// fs.copyFileSync('notes.md','notes1.md')

//Reading JSON files

const data = fs.readFileSync('data.json', 'utf-8');
const parsed = JSON.parse(data);
console.log(parsed);
console.log(parsed.name);



parsed.college = "LPU";
parsed.skills.push("Express.js");

fs.writeFileSync('data.json', JSON.stringify(parsed, null, 2));
console.log("JSON updated!");



