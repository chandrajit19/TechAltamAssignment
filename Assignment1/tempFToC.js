

function tempFun(temp){
 return (5/9)*(temp-32)
}

let temp=parseFloat(prompt("Enter temp in Fahrenheit"));
const result=tempFun(temp);
console.log("Celcious is: ",result);