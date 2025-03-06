

function pNFun(num){
  if (Number.isFinite(num)) {         // typeof num==="number"
    if (num == 0) {
      return 0;
    } else if (num > 0) {
      return "positive";
    } else {
      return "negative";
    }
  } else {
    return "Invalid input";
  }
}


const result=pNFun(-2);
console.log(result);