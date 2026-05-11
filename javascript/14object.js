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

//Program 3 (seal method)
let car = {
    type:"car"
}
Object.seal(car)
car.model = "A4"
delete car.type
car.type ="car r"
console.log(car)

let vehicle = {
    fueltype : "Petrol"

}
Object.seal(vehicle) //Object never deleted If we apply seal method for object , delete not allow.
//vehicle.fueltype = "CNG" // Object to be update if we applying seal.
delete vehicle.fueltype // seal apply kelyanantr delete nahi hou shakt only update 
console.log(vehicle)

//Program 4 (Freeze method)
let vehicle2 = {
    color : "Red"
}
vehicle2.color = "Yellow" //update the color op is {color : "Yellow"}
vehicle2.fuel = "Petrol" // add the another key and value i.e fuel : "Petrol" op is {color : "Yellow", fuel : "Petrol"}
vehicle2.price = 5000 // add the another price key and value
vehicle2.fuel = "CNG" // update the fuel type Petrol to CNG
delete vehicle2.fuel // delete the fuel type
console.log(vehicle2) //{ color: 'Yellow', price: 5000 }

//above same program using freeze method
let vehicle3 = {
    color : "Red"
}
Object.freeze(vehicle3) // cannot update / add / delete object after applying the freeze method.
vehicle3.color = "Yellow"
vehicle3.fuel = "Petrol"
vehicle3.price = 5000
vehicle3.fuel = "CNG"
delete vehicle3.fuel
console.log(vehicle3)


//Program 5 using hasOwn method

let car2 = {
    type:"car",
    model:"Q4",
}
let q22 = Object.hasOwn(car2,"type") // check key is present or not if yes then op is true
console.log(q22)

//Program 6
let emp = {
    name : "Rahul",
    desig : "Tester",
    department : {
        dep1 : "QA"
    }

}
let a2 = Object.hasOwn(emp.department,"dep1")
console.log(a2)


