let fname = 'Rahul'
let lname = 'Chaudhari'
console.log("My First name is "+fname+ " and Last name is "+lname) //OP - My First name is Rahul and Last name is Chaudhari

//String interpolation using "Backtics"

console.log(`My First name is ${fname} and and last name is ${lname}`) //Op - My First name is Rahul and and last name is Chaudhari

// string interpolation solves expression but output is always string
console.log(`${2+2}`)
console.log(`${10-5}`)

//number + number = number
//String + Number = String
//Numbaer + String = String
//String +String = String

let a = 10
let b = 20
let c = 'Hello'
console.log(a+b+c)
//op - number(10) + number(20) + string (Hello)
       //  30+Hello 
      //fop is - 30Hello
console.log(a+c+b) //op is 10Hello20
console.log(c+b+a)//op is Hello2010

//Program 5
let city = "NAGPUR"
console.log(city.length) //op - 6
console.log(city.length-1) //op - 5
console.log(city[0])// op - N
console.log(city[city.length-1]) //op - R

let ff = `My name is "Rahul" `
console.log(`Name ${ff}`)

// String Methods
let name1 = "rahul chaudhari"
let a1 = name1.toUpperCase() //return string in Uppercase
console.log(a1)


let fullName = "PARNIKA$"
let a2 = fullName.toLowerCase()
console.log(a2)

//Method chaining
let a4 = "rahul".toUpperCase().toLowerCase().length
         // rahul.RAHUL.rahul.5
console.log(a4)//op - 5

let city2 =  "JALGAON"
let a5 = city2.includes("O") //return = Bollean value i.e. True and False matching the character with string value.
console.log(a5) //OP is  - True

let empname = "premprakash"
let a6 = empname.includes("pra") //substring also accept
console.log(a6) // Op True

let City3 = "JALGAON"
let a7 = City3.includes("O", 6) // O charcter is checking after the 6 index position 
console.log(a7) //op is false 
let a8 = City3.includes("O", 4) // O chacater is checking after the 4th index position
console.log(a8)  //OP is True

let nam = "chetan"
let a9 = nam.indexOf("e")
console.log(a9)

let nam2 = "chetcan"
let b1 = nam2.indexOf("c",2)
console.log(b1)