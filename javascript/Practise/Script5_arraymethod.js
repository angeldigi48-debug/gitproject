let fruitss = ["Banana", "Mango", "Kiwi"]
console.log(fruitss[0])
// for(let i=0; i<fruitss.length; i++) {
//     console.log(fruitss[i])
// }
fruitss.push("Apple"); // Push method last la element add krte 
console.log(fruitss); //Op - [ 'Banana', 'Mango', 'Kiwi', 'Apple' ]

console.log(fruitss.length) // length count hote.

fruitss.unshift("Pinnaple") // unshift method starting la element add krte
console.log(fruitss)   // [ 'Pinnaple', 'Banana', 'Mango', 'Kiwi', 'Apple' ]

fruitss.pop()   // pop method is used for remove the last element from array list
console.log(fruitss) //[ 'Pinnaple', 'Banana', 'Mango', 'Kiwi' ]

fruitss.shift(); //shift method is used for remove the first element from array list.
console.log(fruitss) // [ 'Pinnaple', 'Banana', 'Mango', 'Kiwi' ]

console.log("---------------------------------------------------------------");

let animal = ["Tiger","Lion"]
let a1 = animal;
a1.unshift("Dog") 
console.log(a1) // op - [ 'Dog', 'Tiger', 'Lion' ]
a1.push("zebra")
console.log(a1) // op- [ 'Dog', 'Tiger', 'Lion', 'zebra' ]
a1.shift()
console.log(a1)
a1.pop()
console.log(a1)

let marks = [22,56,78,44]
let sum = 0;
for (let g=0; g<marks.length; g++){
    sum =  sum + marks[g] 
}

let avg = sum/marks.length
console.log(avg)
//------------------------------------------------------------------------
//includes() -- check the given element is present or not and op is in boolean value.(case sensitive)
let girl = ["Parnika","Prisha","Rahul","Vicky","Archana"]
let d = girl.includes("Vicky")
console.log(d)  // true
let e = girl.includes("prisha")
console.log (e)  // false

//indexof()----checking the index value of given elements.
let boy = ["Sanket","Darshan","Raj"]
let f = boy.indexOf("Darshan")
console.log(f) //op is 1
let h = boy.indexOf("raj")  // if we provide invalid value then it returns the op is -1.
console.log(h); // op is "-1"

//at()---Its returns the element upon index value - 
// 
let i = boy.at(2); 
console.log(i); // Op - Raj
let j = boy.at(-1) //-1 index value dile tr to last elements pasun start krto
console.log(j)

//Program 1 - calculate the age 
let Byear = [2002,2014,2020, 2000]
let age = []
for(let k=0; k<=Byear.length-1; k++){
    let b1 = 2026 - Byear[k];
    age.push(b1)
}
console.log(age)

//find the marks greater than 90
let markss = [80,87,90,93,97,99]
for(let m=0; m<markss.length; m++){
    if(markss[m]>90){
        console.log(markss[m])
    }
}







