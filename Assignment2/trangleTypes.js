function triangleTypes(side1, side2, side3) {
  if (
    Number.isInteger(side1) &&
    Number.isInteger(side2) &&
    Number.isInteger(side3) &&
    side1 > 0 &&
    side2 > 0 &&
    side3 > 0
  ) {
    // Check if the three sides can form a valid triangle
    if (
      side1 + side2 <= side3 ||
      side2 + side3 <= side1 ||
      side1 + side3 <= side2
    ) {
      return "The sides do not form a valid triangle";
    }

    if (side1 === side2 && side2 === side3) {
      return "Equilateral Triangle";
    }
    if (side1 === side2 || side2 === side3 || side3 === side1) {
      return "Isosceles Triangle";
    } else {
      return "Scalene Triangle";
    }
  } else {
    return "Invalid input. Please enter positive integers.";
  }
}

const result = triangleTypes(4, 4, 2);
console.log(result);
