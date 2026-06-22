//by tag
let bytag= document.querySelector('h1')
console.log("bytag", bytag)

//by ID ==> #
let byID = document.querySelector('#id2')
console.log("byID", byID)

//by Class ==> .
let byClass = document.querySelector('.c3')
console.log("By class", byClass)

//by attribute value
let byatt = document.querySelector("p1[name ='nm4']")
console.log("By attribute", byatt)

let e1 = document.querySelector('h1')
let e2 = document.querySelector('#id2')
let e3 = document.querySelector('.c3')
let e4 = document.querySelector("p1[name ='nm4']")

console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)


e1.addEventListener('click',function(){
    e1.style.color = "black"
    e1.textContent = "school of IT"
})

e2.addEventListener('click',function(){
    e2.style.color = "orange"
    e2.textContent = "Python"
})

e3.addEventListener('click', function(){
    e3.style.color = "red"
    e3.textContent = "Automation with AI"
})

e4.addEventListener('click',function(){
    e4.style.color = "white"
    e4.textContent = "CHAUDHARI--"
})

