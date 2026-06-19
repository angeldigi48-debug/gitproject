// set to store unique values.

let arr = [11,4,22,55,8,4,22,66,88]
console.log(arr)

//define set
let str = new Set()
console.log(str)
console.log(typeof(str))

//add
str.add(11),
str.add(33),
str.add(11),
str.add(66),
str.add(33)
console.log(str) //removing duplicate values.
console.log(str.size)
console.log(str.has(66))
console.log(str.add(87))

let mySet = new Set(["Rahul","Sanket","Parnika","Prisha","Sanket","Devashri"])
for (let el of mySet){
    console.log(el)
}

mySet.forEach(function(el){
    console.log(el)
})    
console.log("------------------")



for (let el of mySet.entries()){
    console.log(el)
}

//Remove duplicate element from array 

let students = ["Rahul","Parnika","Rahul","Archana"]
let uniq = new Set(students)
console.log(uniq)