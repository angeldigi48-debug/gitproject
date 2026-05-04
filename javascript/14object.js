// loops 
// methods -  keys()
let stud = {
    StudName : "Parnika",
    Marks : 60,
    Age : 3
}
let q1 = Object.keys(stud)
console.log(q1)
let q2 = Object.values(stud)
console.log(q2)
let q3 = Object.entries(stud)
console.log(q3)

//Program 2
let obj1 = {
    a : 1
}
let obj2 = {
    b : 2
}
let obj3 = Object.assign({},obj1,obj2) //assign use for merge 2 object 
console.log(obj3) //op -{ a: 1, b: 2 }

//Program 3
let car = {
    type:"car"
}
Object.seal(car)
car.model = "A4"
delete car.type
car.type ="car r"
console.log(car)
