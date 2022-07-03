let obj=require("readline");
let abc=obj.createInterface({
    input:process.stdin,
    output:process.stdout
})
abc.question("Enter your Name",(name)=>{
    console.log("Your Name is "+ name);
    abc.close();
})
