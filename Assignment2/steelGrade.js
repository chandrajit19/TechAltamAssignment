

function steelGrade(hard, carb, tens){
    if(Number.isFinite(hard)&& Number.isFinite(carb)&&Number.isFinite(tens)){
                if(hard>50 && carb<0.7 && tens>5600){
                    return "Grade 10"
                }
                else if(hard>50 && carb<0.7 ){
                    return "Grade 9"
                }
                else if(carb<0.7 && tens>5600 ){
                    return "Grade 8"
                }
                else if(hard>50 && tens>5600){
                    return "Grade 7"
                }
                else if(hard>50 || carb<0.7 || tens>5600){
                    return "Grade 6"
                }
                else{
                    return "Grade 5"
                }
    }
    else{
        return "Invalid input. Please enter valid numbers for hardness, carbon content and tensile strength.";
    }
}

const result=steelGrade(60, .5, 5800);
console.log(result);