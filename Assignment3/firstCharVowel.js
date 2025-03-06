// check first char is vowel or not

function isFirstCharVowel(str){
   
   if (typeof str === "string" && str.length > 0) {
     let vowels = "aeiouAEIOU";
      return (vowels.includes(str[0])) ? "first char is vovel"  : "first char is not vowel";
   }

   return "Invalid input"
    
}


const result=isFirstCharVowel("pple")

console.log(result);

