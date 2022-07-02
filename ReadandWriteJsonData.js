let fs=require("fs");
let customer=JSON.parse(fs.readFileSync("customers.json"));
console.log("Number if customer = "+customer.length);
customer.forEach(cust=>{
    console.log("id is "+cust.cid+"name is "+cust.cname+"age is "+cust.age);
})
// let cust1={cid:100,cname:"Ramesh",age:21};
// customer.push(cust1);
let cust1={cid:101,cname:"Rakesh",age:30};
customer.push(cust1);
// to store UNIQUE records
let result=customer.find(c=>c.cid==cust1.cid);
if (result==undefined){
    customer.push(cust1);
    fs.writeFileSync("customers.json",JSON.stringify(customer));
    console.log("Record stored Successfullly");
}
else{
    console.log("Customer id must be unique");
}
// fs.writeFileSync("customers.json",JSON.stringify(customer));
// console.log("Record stored Successfullly");