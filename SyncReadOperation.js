let fs=require("fs");
let data=fs.readFileSync("demo1.txt");
let info=data.toString();
console.log(info);
console.log(data);
console.log("Hi");
console.log("Hello");