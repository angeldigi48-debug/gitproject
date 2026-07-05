console.log(2 + 2)
//Function with parameter and without return type --function name and brcaket madhe parameters
function cal(x, y) {
    console.log("Add", x + y);
    console.log("sub", x - y);
    console.log("Mul", x * y + 1)
    console.log("Div", x / y)
}
cal(8, 5)
console.log("********************")
cal(4, 5)
console.log("********************")
cal(11, 5)
console.log("---------------------------------------------------------------")
//Arithmetic operation
let s = 10;
let t = 3;
console.log("Addition", s + t);
console.log("Subtraction", s - t);
console.log("Multipliction", s * t);
console.log("Division", s / t);
console.log("Modules", s % t)


//Function without parameters and without return type
function add() {
    console.log("Addition without parameters", 4 + 4)
}
add()

//Function with parameter with return type

function addition1(p, q) {
    return p + q;
}
let r = addition1(4, 2)
console.log("RESULT", r)
console.log("Multiplication", r * 3)
console.log("Subtraction", r - 1)

function sub(a, b) {
    return a - b
}
console.log("sub", sub(10, 5))
console.log("Mul", sub(12, 8) * 4)

const a = 100; // const ne define kele tr te value aapn update nahi karu shakt error yeto
console.log(a)
 a = 200;       // value is not update with const type.
console.log(a)

