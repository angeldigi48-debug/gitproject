

let girl = ["Archana","Rani","Prisha","Parnika"]
let a = girl.includes("Prisha")

console.log(a) //O/P - is True

let marks = [55,66,77,88,99]
let b = marks.includes(70)
console.log(b)

let emp = ["Rahul","Vicky", "Vaibhav", "Rutwik"]
let c = emp.push("Kranti") //OP -Kranti added at the end of the array.
console.log(emp)
let d = emp.indexOf("rutwik") // OP - if element is not match its return the -1
console.log(d)
let e = emp.indexOf("Rahul") // op -return index position is 0
console.log(e)
let f = emp.includes("Vaibhav") // If its match with element then its returns True boolean value otherwise False
console.log(f)

let animal = ["Tiger","Lion","Zebra","Dog"]
let g = animal.at(1) // O/p Its returns the element upon index value - Lion
console.log(g)
let h = animal.at(-1) // O/p if we write -1 then its start from the end result is "Dog", if we write -2 then "Zebra"

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.at(-1)) // // same as fruits[fruits.length-1] o/p- Plum

//Program 1
let Byear = [2002,2006,2011,2021]
let ages = []
for (let i1=0; i1<=Byear.length-1; i1++){
    let b1 = 2026-Byear[i1]
   ages.push(b1)
}
console.log(ages)

// let Byear = [2002,2006,2011,2021]
// //let ages = []
// for (let i1=0; i1<=Byear.length-1; i1++){
//     console.log(i1)
//     console.log(Byear[i1])
//     console.log(2026-Byear[i1])
// }

let Marks1 = [88,95,55,97,93,66,77,88]

for(let m = 0;m < Marks1.length;m++){
    if(Marks1[m]>=90){
        console.log(Marks1[m])
    }
}

let Mar = [110,150,90,91,66,88,111,141,100]
let ele = []
for (let b3=0; b3 < Mar.length; b3++){
    if (Mar[b3]>=100){
        ele.push(Mar[b3]) //op= [110, 150, 111, 141, 100]
        //ele.unshift(Mar[b3]) //o/p=  [100, 141, 111, 150, 110] 
    }
}
console.log(ele)