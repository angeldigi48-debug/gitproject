//Array "Filter Method"
//Calculate marks greater than 70

let marks = [98,86,60,55,76,91]
let a1 = marks.filter(function(el){
    return el > 70
})
console.log(a1) //op : 98,86,76,91

//withdraw deposite amount
let transaction = [30,-45,500,-20,-600,100]
let deposite = transaction.filter(function(el){
    return el > 0
})
console.log(deposite)

let withdraw = transaction.filter(function(el){
    return el < 0
})
console.log(withdraw)