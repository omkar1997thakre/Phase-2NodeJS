let obj=require("readline");
let abc=obj.createInterface({
    input:process.stdin,
    output:process.stdout
})
abc.question("Enter your Name",(name)=>{
    abc.question("Enter your ID",(id)=>{
        abc.question("Enter ypur age",(age)=>{
            console.log("Your Name is "+name );
            console.log("Your ID is "+id);
            console.log("Your Age is "+age);
            abc.close();
        })
    })
})
   
