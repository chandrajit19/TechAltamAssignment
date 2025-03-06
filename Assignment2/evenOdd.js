// to check whether a number is even or odd
function evenOddFun(num){
    if(Number.isFinite(num)){
       if(num % 2 === 0){
        return `The number ${num} is even.`;
       }
       else{
        return  `The number ${num} is odd.`;;
       }
    }
    else{
        return "Invalid input";
    }
}

const result=evenOddFun(12);
console.log(result);