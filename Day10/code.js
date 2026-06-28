// //event driven programming
// //code executes sequentially
// //top to bottom usual nature
// //but in event driven programming the program waits for the event to occur and then it executes the corresponding code

// //Event: Something that happens

// import EventEmitter from 'events';
// const myEvent = new EventEmitter();

// // myEvent.on('anshu',()=>{
// //     console.log(`Hello`)
// // })
// // myEvent.emit('anshu');
// // myEvent.emit('anshu');
// // setTimeout(()=>{
// //     myEvent.emit('anshu')
// // },1000);


// //passing args in events


// // myEvent.on('anshu',(e)=>{
// //     console.log(`hello ${e}`)
// // })

// // myEvent.emit('anshu','anshu')

// // // myEvent.removeListener('anshu',(e))

// // const eventF=()=>{
// //     console.log('Hello')
// // }
// // myEvent.on('anshu',eventF);
// // myEvent.on('anshu',()=>{
// //     console.log('Second Method')
// // })
// // myEvent.emit('anshu');
// // myEvent.removeListener('anshu',eventF)
// // myEvent.emit('anshu')
// // myEvent.removeAllListeners('anshu');


// //Streams

// //Sequence of data made available over time 
// //I am not going to send all data at once but i will be sending the data Chunk by Chunk

// // Advantage:-

// import fs, { read } from 'fs';

// const readStream=fs.createReadStream('../Day9/notes.md',{encoding:'utf-8',highWaterMark:10})
// const writeStream=fs.createWriteStream('notesDay9Copy.md')
// //whenever a chunk will be recieved a event will happen and the name of that event is data

// readStream.on('data',(e)=>{
//     console.log(`Data Recieved`);
//     // console.log(e)
//     writeStream.write(e)

// })


// // when data streaming operation is complete on more event will happen and its name is end


// readStream.on('end',()=>{
//     console.log(`All chunks recived`)
//     writeStream.end();
// })


//pipes
//pipe is a shortcut — it connects a readStream to a writeStream automatically
//no need to manually listen for 'data' and 'end' events

import fs from 'fs';

const readStream = fs.createReadStream('../Day9/notes.md', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('notesDay9Copy.md');

readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log('File copied successfully using pipe!');
});

readStream.on('error', (err) => {
    console.log('Error reading file:', err.message);
});

writeStream.on('error', (err) => {
    console.log('Error writing file:', err.message);
});
