let fs=require("fs");
//let msg="Welcome to Node Js WriteOperation";
//fs.writeFile("demo.txt",msg,(err)=>{
 //   if(!err){
 //       console.log("Data Loaded Successfully");
//    }
//})
//APPEND OPERATION.
let msg="Welcome to MY PROGRAM";
fs.writeFile("demo.txt",msg,{flag:"a+"},(err)=>{
    if(!err){
        console.log("Data Loaded Successfully");
    }
})