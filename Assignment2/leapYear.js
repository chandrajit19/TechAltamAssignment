
// to check wheather a year is a leap year or not

function leapYearFun(year){
       if(Number.isFinite(year)){
            if((year%4===0 && year%100!==0)|| year%400===0){
                return `${year} is leap year`;
            }
            else{
                return `${year} is not leap year`;
            }
       }
    else{
        return "Invalid input";
       }
    
}

const result=leapYearFun("2024");
console.log(result);