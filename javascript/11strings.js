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