// Objects

// js everthing is object 
//            fn          ln         mob     ag  ro
let info = ["chinmay","deshpande",7709192441,23,45]
console.log(info)

let info2 = {
    // key:value
    // prop:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45,
    mobileNumber:7709192441

}
console.log(info2)

let info3 = {
    MyFirstName:"Rahul",
    LastName : "Chaudhari",
    Age : 34,
    MobileNo : 95959418
}
console.log(info3)

let stud = {
    StudName : "Parnika Chaudhari",
    Age : "2year",
    weight : "10kg",
    contact : 1234
}
console.log(stud)

let stud1 = {
    studname : "Rahul",
    age : 33,

    greet : function(){
        console.log("hello")

    }

}
console.log(stud1.age)
stud1.greet()

let emp1 = {
    empcode : 5,
    empname : "Parnika",
    emp2 : { 
        empcity : "Pune",
        empNo : 2345

    },
    skills : ["Networking","testing"]

}
emp1.skills.push("Python")
console.log(emp1.skills)
console.log(emp1.emp2.empNo)
console.log(emp1['emp2']['empcity']) //bracket notation 
console.log(emp1['empcode']) // 
console.log(emp1.empname)// dot notation 
emp1.empname = "Prisha" //update empname - value
console.log(emp1) //empname = Prisha
emp1.emp2.empdesignation = "Testing" // add a new key and value 
console.log(emp1)
emp1.empdepartment = "R&D"
console.log(emp1)

//Program 4 
//Object Property key is always string.
let details = {
    Fname1 : "Rahul",
    Lname1 : "Chaudhari",
    Age1 : 33
}
console.log(Object.keys(details)) // for all keys values print in array OP -[ 'Fname1', 'Lname1', 'Age1' ]
console.log(Object.values(details)) // for all values print in array. OP - [ 'Rahul', 'Chaudhari', 33 ]
console.log(Object.entries(details)) //for all key and value print in array bracket with comma OP -[ [ 'Fname1', 'Rahul' ], [ 'Lname1', 'Chaudhari' ], [ 'Age1', 33 ] ]