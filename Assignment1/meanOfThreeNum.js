
// finding the mean of three nums
function meanFun(num1=0, num2=0, num3=0) {
    let result=(num1+num2+num3)/3
    return result
}
let num1 = parseFloat(prompt("Enter num1: "));
let num2 = parseFloat(prompt("Enter num2: "));
let num3 = parseFloat(prompt("Enter num3: "));

const result = meanFun(num1, num2, num3);
console.log("mean of three numbers: ",result);