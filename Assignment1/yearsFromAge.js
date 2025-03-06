


function yearFun(age){
const date=new Date;
return (date.getFullYear()- age);
}

let age = parseInt(prompt("Enter age: "));

const result = yearFun(age);
console.log("Year is ", result);