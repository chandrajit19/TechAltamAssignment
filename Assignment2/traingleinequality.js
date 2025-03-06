
function isTriangle(num1, num2, num3) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    typeof num3 === "number" &&
    num1 > 0 &&
    num2 > 0 &&
    num3 > 0
  ) {
    if (num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2) {
      return "We can make triangle";
    } else {
      return "triangle can not be formed";
    }
  } else {
    return "invalid input";
  }
}


const result = isTriangle(4, 4, 1);
console.log(result);

console.log( typeof NaN>=-1)