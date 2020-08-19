// Function Add7
let add7 = num => num + 7;
console.log(add7(3));

// Function Multiply
let multiply = function(x, y){return x * y;};
console.log(multiply(4, 5));

// Function Capitalize
function capitalize(str) {
    let strCopy = str.toLowerCase();
    debugger;
    strCopy = strCopy[0].toUpperCase() + strCopy.slice(1);
    return strCopy;
}
console.log(capitalize("helLLO THERE"));

// Function Last Letter
let lastLetter = str => str.slice(-1);
console.log(lastLetter("Hi There I love you"));