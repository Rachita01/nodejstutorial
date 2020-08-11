const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'/test'),{}, err => {
// if(err) throw err
// console.log("Folder created...");
// }

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello I am hello file created using writeFile method of file system',err => {
//     if(err) throw err;
//     console.log("File created...");
// } );


// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'Hello I am appended text created using appendFile method',err => {
//     if(err) throw err;
//     console.log("File created...");
// } );

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

// fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),err => {
//     if(err) throw err;
//     console.log('File renamed');
// })

fs.writeFile(path.join(__dirname,'test','os_demo.js'),'I am os file demo',err =>
{
    if(err) throw err;
    console.log("Another file created");
});