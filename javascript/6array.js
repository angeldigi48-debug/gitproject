let numbers = [11,22,33] //index value is 0,1,2

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])

let num = [21,22,23,24,25]
for(let i=0;i<5;i++){
    console.log(num[i]);
}

let fruits = ["Apple","Pinapple","Mango","Banana"]
console.log(fruits[0])
fruits[0]="chicku"
console.log(fruits)

let students = ["Rahul","Vicky","Vaibhav","Rutwik"]
for(let i=0;i<4;i++){
console.log(i)

}
let q1 = students.length
console.log(students[students.length-1]) //last wala name print honar "Rutwik"

let animals = ["tiger","lion","snake","rabbit"]
animals.push("deer")
console.log(animals)


let stud = ["Rahul","Vicky","Parnika","Prisha"]
console.log(stud.length)
stud.push("Sanket")
console.log(stud)
console.log(stud.length)
stud.unshift("Archana")
console.log(stud)

let animal = ["Tiger","Lion","Dog"]
let a1 = animal.push("Zebra")
console.log(a1)
console.log(animal)
let b1 = animal.unshift("Cat")
console.log(animal)
console.log(b1)
let c1 = animal.pop()
console.log(animal)
console.log(c1)
let d1 = animal.shift()
console.log(animal)
console.log(d1)

// average marks 
let marks = [85,95,66,62]
let sum = 0;
for(let val of marks){
    sum = sum + val;
    let avg = sum/marks.length
    console.log(avg)
}