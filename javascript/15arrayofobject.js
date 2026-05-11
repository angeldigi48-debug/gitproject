// array of object 
let info = [
 {
    fname : "Parnika",
    lname : "Chaudhari",
    age : 5,
    city : "Jalgaon",
    skills : ["Dancer","sports"],
    Marks : 50
},
{
    fname : "Devashri",
    lname : "Patil",
    age : 29,
    city : "Pune",
    Skills : ["Reelstar","Nautanki"],
    Marks : 45
}
]
console.log(info[0].lname) //chaudhari
console.log(info[1].age) //29
console.log(info[0].skills[0]) //Dancer
console.log(info[1].Marks) //45

//Program 2 
//get addition of marks of students
arr = [10,40,30,50,70]
let total = arr.reduce(function(acc,el,index,arr) {
    return acc + el;
},0)
console.log("total = ",+total)

Marks = [50,67,47,88]
let tot = Marks.reduce(function(acc,el){
    return acc+el
},5)
console.log("Total of Marks = ",+tot)

//Program 4
let mark = [45,66,78,33,99,22,69]
let less50 = mark.filter

let r = 5
console.log(r)

//Program 5
let students = [
    {
        Fullname : "Rahul Chaudhari",
        city : "Jalgaon",
        skills : ["HTML","CSS",".net"],
        langauge : "Marathi"
    },
    {
        Fullname : "Archana Chaudhari",
        city : "Yawal",
        skills : ["ABC", "DEF"],
        langauge : "Hindi"
    },
    {
        Fullname : "Parnika Chaudhari",
        city : "Pune",
        skills : ["xyz","HTML","jkl"],
        langauge : "Marathi"
    }
]
console.log(students[0]['Fullname'])
console.log(students[1].city)
console.log("----------------------------")
//Program 5, Print first name for all students

for (let i=0; i<students.length; i++){
    console.log(students[i].Fullname)
    console.log(students[i]['city'])
}

//Program 6 : Add AI skills to all elements
for(let i=0; i<students.length; i++){
    console.log(students[i]['skills'].push("AI"))
    

}
console.log(students)

console.log("------------------------------")

for (let i=0;i<students.length;i++){
console.log(students[i].skills.push("Testing"))
}
console.log(students)

for (let i=0;i<students.length;i++){
console.log(students[i].skills.shift())
}
console.log(students)

//add skills using for each
students.forEach(function(el){
    el.skills.push("Playwright")
})
console.log(students)

//print name of students with "HTML skills"
for (let i=0;i<students.length;i++){
    if(students[i].city.includes("Yawal")){
        console.log(students[i].Fullname)
    }
}

let result = students.filter(function(el){
   return el.skills.includes("HTML")
})
console.log(result)

result.forEach(function(el){
   console.log(el.Fullname)
})