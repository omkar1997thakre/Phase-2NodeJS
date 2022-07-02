let emp={id:100,name:"XYZ",salary:15000};  //this is LITERAL 
//let emp={"id":100,"name":"XYZ","salarÿ":15000}; //this is LITERAL & not JSON
console.log("id is "+emp.id);
console.log("Name is "+emp.name);
console.log("Salary is "+emp.salary);
//
let empSting=JSON.stringify(emp);// convert json or object to string
console.log("id is "+empSting.id);
console.log("Name is "+empSting.name);

let empJson=JSON.parse(empSting); // convert string to JSON
console.log("Name is "+empJson.name);
console.log("id is "+empJson.id);