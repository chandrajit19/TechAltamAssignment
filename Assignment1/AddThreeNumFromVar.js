// adding three nums

 function sumFun(num1=0, num2=0, num3=0) {
    return (num1+num2+num3)
}

let num1=parseInt(prompt("Enter num1: "));
let num2=parseInt(prompt("Enter num2: "));
let num3=parseInt(prompt("Enter num3: "));

const result=sumFun(num1, num2, num3);
console.log(result)