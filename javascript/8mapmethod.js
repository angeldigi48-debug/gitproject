// Mapping Method


let num = [11,22,33,44,55,66]

let q11 = num.map(function(el,index,arr){
    return el + 10
})
console.log(q11)

//Program 2 : calculate age
let birthyr = [2005,2023,2000,2019]

let q12 = birthyr.map(function(el,index,arr){
    return 2026 - el
})
console.log(q12)

//Program 3 : Multiplication
let mul = [2,13,16,7,77]
let q13 = mul.map(function(el){
    return el * 2
})
console.log(q13)

