let fs=require("fs");
let customer=fs.readFileSync("customer.json")
//1ST WAY
// let custString=cust.toString();
// console.log(custString);  //the output is in STRING and not in JSON
// console.log("ID is "+custString.cid);
// //To Get the output in JSON
// let custJSON=JSON.parse(custString);
// console.log("ID is "+custJSON.cid);

//2nd WAY
let customerJson=JSON.parse(customer);
console.log("id"+customerJson.cid);