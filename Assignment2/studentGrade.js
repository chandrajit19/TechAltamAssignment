function gradeFun(numA, numB) {
  if (Number.isFinite(numA) && Number.isFinite(numB)) {
    if (numA >= 55 && numB >= 45) {
      return "Student Passed";
    } else if (numA >= 45 && numA < 55 && numB >= 55) {
      return "Student Passed";
    } else if (numA >= 65 && numB < 45 ) {
      return "Reappear in B Exam";
    } else {
      return "Failed";
    }
  } else {
    return "Invalid Input. Please enter valid marks.";
  }
}

const result = gradeFun(70, 40);
console.log(result);
