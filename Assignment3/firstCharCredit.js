


function firstCharCredit(val) {
  if (val === null || val === undefined) return "Invalid Card Number";

  let str = String(val).replace(/\D/g, "").trim(); // Remove non-digits & trim
console.log(str)
  if (str.length > 0) {
    switch (str[0]) {
      case "3":
        return "American Express";
      case "4":
        return "Visa";
      case "5":
        return "Mastercard";
      case "6":
        return "RuPay";
      default:
        return "Unknown Card";
    }
  }

  return "Invalid Card Number";
}


const result=firstCharCredit("5a32r4d325c3");
console.log(result);