//Array method - reduce 
let num = [11,22,33]
let a1 = num.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(a1)

//Array method - forEach 
let cities = ["Mumbai","Pune","Banglore","Jalgaon"]
// for(let i=0; i < cities.length; i++){
//     console.log("Welcome to the city " +cities[i]) here using simple for loop
// }

cities.forEach(function(el,index,array){ // here using for Each loop , there nothing return any value.
    console.log("Welcome to the city "+el) 
})
//for each loop program 2
let numbers = [22,56,28,"MUMBAI","PUNE",666,745]
numbers.forEach(function(el){
    console.log(el) //Op -all array elements
})

// Array method - Find
let marks = [66,72,88,92,93]
let a2 = marks.find(function(el,index,arr){
    return el > 75
})
console.log(a2)

let a5 = marks.findIndex(function(el,index,arr){ //it is used for find the index of element based on condition. 
    return el >= 75
})
console.log(a5) //op is index value of 88 means "2"

//program 2
let oddeven = [22,39,42,63,57,94]
let a3 = oddeven.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log("List of EVEN numbers ",a3) //op - even no. print using filter method

let a4 = oddeven.filter(function(el,index,arr){
    return el % 2 !== 0
})
console.log("List Of Odd numbers ",a4)//op - Odd no. print using filter method

//Array method = every

let no = [22,12,16,33,27,48,55]
let a6 = no.every(function(el,index,arr){//all value correct asel as per condition trch true op yenar
    return el > 10
})
console.log(a6)//op -is True

let no1 = [22,12,16,33,27,48,55,5]
let a7 = no1.every(function(el,index,arr){//ek jari value sathi condition false asel tr op false yenar
    return el >= 10
})
console.log(a7)//op is Fals

// Array method = some 
let no2= [22,12,16,33,27,48,55,5]
let a8 = no2.some(function(el,index,arr){//ek jari value sathi condition false asel tr op True yenar
    return el >= 10 // if we given condition like this el >= 600 then Op is False
})
console.log(a8) //op is true 

let no3= [22,12,16,33,27,48,55,5]
let a9 = no3.some(function(el,index,arr){//ek jari value sathi condition false asel tr op True yenar
    return el >= 500 // if we given condition like this el >= 500 then Op is False
})
console.log(a9) //op is false