function getMonthName(num) {
    if (Number.isInteger(num) && num >= 1 && num <= 12) {
        switch (num) {
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }
    return "Invalid Month";  // Default case
}

console.log(getMonthName(12));  // Output: December
console.log(getMonthName(0));   // Output: Invalid Month

 //!  Switch Tab Use Kare Jab Cases Kam Ho (5-6 max), Varna Arrays/Objects Best Hote Hain.