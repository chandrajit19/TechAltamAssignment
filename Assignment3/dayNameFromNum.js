// get day name from a number
function getDayName(dayNumber) {
   
    if(Number.isInteger(dayNumber)&& dayNumber>0 && dayNumber<=7)   {
        switch(dayNumber){
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            case 7: return "Sunday";
            }
    }
   
    return "Invalid day number";
    }

    const result=getDayName(2);
    console.log(result); // Output: Tuesday

    //!  Switch Tab Use Kare Jab Cases Kam Ho (5-6 max), Varna Arrays/Objects Best Hote Hain.


    function getDay(day){
        const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        return (Number.isInteger(day) && day>0 && day<=7)? days[day-1]: "Invalid day number";
    }

    const result1=getDay(5);
    console.log(result1);

/* //^ Why is this better?
✅ Faster Execution (O(1) complexity) compared to O(n) in switch-case)
✅ Less Code, More Readability
✅ Easily Maintainable (Agar aur languages add karni ho, toh ek hi array update karna hoga) */