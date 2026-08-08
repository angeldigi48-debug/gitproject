// logical operator

// And - && 

//  true    &&    true     ------> true
//  false   &&    true     ------> false
//  true    &&    false    ------> false
//  false   &&    false    ------> false

console.log(2 == 2 && 3 == 3)
console.log(2 == 3 && 3 == 3)
console.log(2 == 2 && 3 == 4)
console.log(2 == 3 && 3 == 4) 
console.log(2 != 3 && 3 != 4)
console.log("----------------------------")

// Or - ||

// true   ||     true      ----> true
// false  ||     true      ----> true
// true   ||     false     ----> true
// false  ||     false     ----> false

console.log(2 == 2 || 3 == 3) // true
console.log(3 == 2 || 3 == 3) // true
console.log(4 == 2 || 3 == 6) // false

// Not - !
// ! true  --> false
// ! false --> true

console.log(!(2==2))
console.log(!(3==2))

// conditional statements

// one input and multiple outcomes 
// numT > 0 && numT <= 5    ------> 10 % discount
// numT > 5 && numT <= 10   ------> 20 % discount
// numT > 10                ------> 30 % discount

let numT = 17;
if(numT > 0 && numT <=5){
    console.log("10% discount");
}
if(numT > 5 && numT <= 10){
    console.log("20% Discount")
}
if(numT > 10){
    console.log("30% Discount")
}

//---------------------------------------------------------------------------
let numV = 125;
if(numV > 0 && numV <=50){
    console.log("5 % Discount")
}
else if(numV > 50 && numV <= 100 ){
    console.log("10 % Discount")
}
else if(numV > 100 && numV <= 150){
    console.log("20 % Discount")
}
else{
    console.log("Please try again")
}

let Marks = 76;
if(Marks >= 90){
    console.log("Grade A")
}
else if(Marks > 70){
    console.log("Grade B")
}
else if(Marks > 50){
    console.log("Grade C")
}
else {
    console.log("Fail")
}

let q1 = 20;
let q2 = 30;

if(q1 > q2){
    console.log("q1 is greater")
}
else {
    console.log("q2 is greater")
}
q1 > q2 ? console.log("q1 is greater"):console.log("q2 is greater")

//----------------------------------------------------
let age = 20;
let a1 = age > 18 ? "can drive" : "can't drive" // we can define this way to using ternary operator (?)
console.log(a1)


let x1 = 3;
let x2 = 6;
let x3 = 15;

if(x1 > x2 && x1 > x3){
    console.log("X1 is greater")
}
else if (x2 > x1 && x2 > x3){
    console.log("X2 is greater")
}
else {
    console.log("X3 is greater")
}

//Switch case without break statment.
let city = "Pune";
switch(city) {
    case "Pune" : console.log("MH");
    case "Indore" : console.log("MP");
    case "Surat" : console.log("GJ")
    case "Jaipur" : console.log("RJ")
    default : console.log("Incorrect city name")
}

let stud = "Parnika"
switch(stud){
    case "Rahul" : console.log("QA Enginner")
    case "Parnika" : console.log("Devloper")
    case "Archana" : console.log("HR Manager")
    default : console.log("No department")
}

//Switch case with break statment.

let city2 = "Jaipur";
switch(city2){
    case "Mumbai" : console.log("Maharashtra");
    break;
    case "Jaipur" : console.log("Rajasthan")
    break;
    case "Surat" : console.log("Gujrath");
    break;
    default : console.log("Incorrect city name")
}

// switch case with multiple statement
let city3 = "Bhilwara";
switch(city3){
    case "Mumbai" :
    case "Pune" :
    case "Nagpur" :
        console.log("Maharashtra");
        break;
        case "Jaipur" :
        case "Bhilwara" :
        case "Jodhpur" :
            console.log("Rajasthan");
            break;
            case "Burhanpur":
            case "Bhopal" :
            case "Bhilai" :
                console.log("Madhyapradesh");
                break;
                default : console.log("Incorrect city name");
}
//----------------------------------------------------------------------------------
let a = 5000;
let b = 3000;
let c = 1000;
let flag = true;

switch(flag) {
    case a > b && a > c :
        console.log("a is greater");
        break;
        case b > a && b > c :
            console.log("b is greater");
           break;
            default : console.log("c is greater");
}

let score = 85;
switch(true){
    case (score >= 90) :
        console.log("Grade : A");
        break;
        case (score >= 75) :
            console.log("Grade : B"); // op - Grade - B
            break;
            default :
            console.log("Grade : C or Lower")

}