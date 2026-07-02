//Compression/Decompressing
//MOdule:- Zlib-core module no need to install
//Gzip and Gunzip

// Gzip:-Compression
//GunZip:-Decompression

// import { text } from 'stream/consumers'
import z from 'zlib'
// import Stream from 'stream';
import fs from 'fs'
// const text="hello anshu this side"
// z.gzip(text,(err,compressedData)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("The compressed data is "+compressedData)
//     z.gunzip(compressedData,(err,decompressedData)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         console.log(decompressedData.toString())
//     })
// })

//compressing and decompressing the files using streams
// const rs=fs.createReadStream('data.txt');
// const ws=fs.createWriteStream('data.txt.gz');
// rs.pipe(z.createGzip()).pipe(ws);

// ws.on('finish', () => {
    const rs1 = fs.createReadStream('data.txt.gz');
    const ws1 = fs.createWriteStream('data1.txt');
    rs1.pipe(z.createGunzip()).pipe(ws1);
// });