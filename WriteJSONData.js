let fs=require("fs");
// let customer={cid:100,cname:"abcc",age:21};
// fs.writeFileSync("customer.json",JSON.stringify(customer));
//APPENDOPERATION
let customer={cid:101,cname:"ELE",age:30};
fs.writeFileSync("customer.json",JSON.stringify(customer),{flag:"a+"});