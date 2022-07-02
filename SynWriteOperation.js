let fs=require("fs");
let msg="Hello this is Synchronization Write Operation";
fs.writeFileSync("demo1.txt",msg);
console.log("Hi");
console.log("Hello");