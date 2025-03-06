

// area  of rectangle
/*
function areaFun(length=0, width=0) {
    return length*width;
}

let length=parseFloat(prompt("Enter rectangle's length: "));
let width = parseFloat(prompt("Enter rectangle's width: "));
const result=areaFun(length, width);
console.log("area of rectangle is: ", result);

*/

// !perimeter of rectangle

function areaFun(length = 0, width = 0) {
  return (length+width)*2;
}

let length = parseFloat(prompt("Enter rectangle's length: "));
let width = parseFloat(prompt("Enter rectangle's width: "));
const result = areaFun(length, width);
console.log("perimeter of rectangle is: ", result);

//~ area  of square
/*
function areaFun(side=0) {
    return side**2
}

let side = parseFloat(prompt("Enter square's side: "));
const result=areaFun(side);
console.log("area of square is: ", result);
*/


//~ perimeter  of square

/*
function areaFun(side = 0) {
  return side*4;
}

let side = parseFloat(prompt("Enter square's side: "));
const result = areaFun(side);
console.log("perimeter of square is: ", result);
*/

 //! area of circle
 /*
function areaFun(radius = 0) {
    const _PI=3.14
  return _PI*(radius**2);
}

let radius = parseFloat(prompt("Enter circle's radius: "));
const result = areaFun(radius);
console.log("area of circle is: ", result);
*/