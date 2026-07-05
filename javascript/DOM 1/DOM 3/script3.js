let e1 = document.querySelector('h1')
let e2 = document.querySelector('#id1')
let e3 = document.querySelector('.c4')

let b1 = document.querySelector("[id='b1']")
let b2 = document.querySelector("[id='b2']")
let b3 = document.querySelector("[id='b3']")

b1.addEventListener('click', function(){
    e1.textContent = "Blue"
    e1.style.color = "blue"
})
b2.addEventListener('click',function(){
    e2.textContent = "Rahul Chaudhari"
    e2.style.color = 'red'
})
b3.addEventListener('click',function(){
    e3.textContent = "America"
    e3.style.color = "magenta"
})