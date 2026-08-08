// map()
// fn - call back function
//In JavaScript, mapping means creating a new array by applying a function to every element of an existing array. 
// This is done using the map() method.
/*
When should you use map()?

Use map() when you want to:

Convert values (e.g., Celsius to Fahrenheit)
Format strings
Extract properties from objects
Create a transformed version of an array while keeping the original array unchanged

Because map() is concise, readable, and does not modify the original array, it is one of the most commonly used array methods in JavaScript.

/* Syntax
array.map(function(currentValue, index, array) {
    // return transformed value
});
*/
//Program 1 : add 10 in each array element.
let num = [22,30,55,70]
let q11 = num.map(function(el,index,arr){
    return el + 10;
})
console.log(q11)

//Program 2 : calculate age
let Byear = [2020,2017,2000,1990]
let age = Byear.map(function(el,index,arr){
    return 2026 - el;
})
console.log(age)

//Program 3 : Multiplication
let mul = [4,6,7,8,2]
let mm = mul.map(function(el){
    return el * 2;
})
console.log(mm)


let numbers = [1,2,3,4]
let doubled = numbers.map(num => num * 2)
console.log(doubled)

//Example 2: Convert names to uppercase
let names = ["rahul","vicky","parnika"]
let upper = names.map(name => name.toUpperCase());
console.log(upper)