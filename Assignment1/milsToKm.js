
function kmFun(miles){
 return miles * 1.60934;
}

let milesVal=parseFloat(prompt("Enter the value of miles"));
const result=kmFun(milesVal);
console.log("Miles in km: ", result)