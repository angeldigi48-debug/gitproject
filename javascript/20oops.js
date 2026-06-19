//Day5 program
//Inheritance topics
//three types of inheritance 
//Single level inheritance, Multilevel inheritance, Hierachical inheritance

//**Single level inheritance */
//Parent
    class student {
    constructor(fn,ln){
    this.firstname = fn
    this.Lastname = ln
    }
displayStudinfo(){
    console.log(this.firstname + " " + this.Lastname)
}
}
//Child
class Teacher extends student {
    Salary = "5000"
displaysalary(){
    console.log(this.Salary)
}
}
let t1 = new Teacher("ABC","DEF")
t1.displayStudinfo()
t1.displaysalary()

//Program 2
// single inheritance - one parent and one child both having constructor
class studentA {
    constructor(firstN,LastN){
        this.Firstname = firstN
        this.Lastname = LastN
    }
    displaystuddetails(){
        console.log(this.Firstname+" "+this.Lastname)
    }
}
class  TeacherB extends studentA {
    constructor(firstN,LastN,sal){
        super(firstN,LastN)
        this.salary = sal
    }
    displaysalaryc(){
        console.log(this.salary)
    }
}
let b1 = new TeacherB("Devashri","Patil","5000")
b1.displaystuddetails()
b1.displaysalaryc()


//Program 3 
//Multilevel inheritance
class Grandfather {
    constructor(Gfname,Glname){
        this.Gfathername = Gfname
        this.Glastname = Glname
    }
    displayGname(){
        console.log(this.Gfathername + " "+this.Glastname)
    }

}
class Father extends Grandfather{
    constructor(Gfname,Glname,Ffname){
        super(Gfname,Glname)
        this.Fatherfname = Ffname
    }
    displayFname(){
        console.log(this.Fatherfname + " "+this.Glastname)
    }

    }
class son extends Father {
    constructor(Gfname,Glname,Ffname,Sfname){
        super(Gfname,Glname,Ffname)
        this.sonfname = Sfname
    }
    displaySname(){
        console.log(this.sonfname + " "+this.Glastname)
    }
}
let names = new son("Vitthal","Chaudhari","Sanjay","Rahul")
names.displayGname()
names.displayFname()
names.displaySname()

