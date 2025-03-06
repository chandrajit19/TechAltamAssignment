

function bmiFun(weight=0, height=0){
return  weight/(height**2)
}


let weight=parseFloat(prompt("Enter weight(KG): "));
let height=parseFloat(prompt("Enter height(m): "));
const result=bmiFun(weight, height);
console.log(" BMI of user is: ",result);