let fs=require("fs");
// The data get stored in buffer. 
// fs.readFile("demo.txt",(err,data)=>{
//     if(!err){
//         console.log(data);
//     }
// });
// to avoid this buffer we use tostring()
// fs.readFile("demo.txt",(err,data)=>{
//         if(!err){
//             console.log(data.toString());
//         }
//     });
// OR
fs.readFile("demo.txt",(err,data)=>{
    if(!err){
        let info=data.toString();
        console.log(info);
    }
    else{
        console.log("Received an error");
    }
});
