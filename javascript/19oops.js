class student {
    constructor(fn, ln) {
        this.Firstname = fn
        this.Lastname = ln
    }
    displayName() {
        console.log(this.Firstname + " " + this.Lastname)
    }
}
let t1 = new student("Rahul", "Chaudhari")
t1.displayName()

///Using array
class emp {
    constructor(empN,sal){
        this.empName = empN
        this.empSalary = sal
    }
    displayempinfo(){
        console.log(this.empName +" "+this.empSalary)
    }
}
let emplist = [
    new emp ("Vicky","15000"),
    new emp ("Parnika","3000"),
    new emp ("Sanket",45000)
]
emplist.forEach(function(el){
    el.displayempinfo()
})

//using array example 
class stu {
    constructor(studname,city){
        this.Name = studname
        this.city = city
    }
    displaystudentdetails(){
        console.log(this.Name +" "+this.city)
    }
}
let info = [
    new stu("Prisha","Jalgaon"),
    new stu("Devashri","Pune"),
    new stu("Shubham","ravet")
]
info.forEach(function(el){
    el.displaystudentdetails()
})