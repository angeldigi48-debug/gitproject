let info = new Map([
    ["fn", "parnika"],
    ["ln", "chaudhari"],
    ["age", "2years"],
    [3, "Roll_No"]
])
console.log(info)
console.log(info.size)

let info2 = new Map()
//set
info2.set("Fname", "Rahul")
info2.set("Lname", "Chaudhari")
info2.set([11, 44, 55], "Marks")
console.log(info2)
info2.set(5, "Roll_no")
console.log(info2)
console.log("-------------------------------")

//get method used for get the value by passing key
console.log(info2.get("Lname"))
//console.log(info2.get(JSON.stringify([11,44,55])))
console.log(info2.get("Fname"))

//add method new key value pair in map add using set
console.log(info2.set("Bloodg", "O+ve"))
console.log(info2.set(true, "haveMobile"))

//update method use to update existing values using set 
console.log(info2.set("Bloodg","A+ve"))
console.log(info2.set("Lname","Teli"))

//delete using to remove the pair of entry from element
console.log(info2.delete(true)) // returning true and false value
console.log(info2)

//has method is checking the key is present or not in the map entries. returning true and false value
console.log(info2.has("Lname")) //op is - true
console.log(info2.has("FFname")) //op is -False

let emp = new Map ([
    [1,"Manager"],
    [2,"Devloper"],
    [3,"QA"]
])
//loops
for(let k of emp.keys()){ 
    console.log(k) //op - Print only Key element 
}
for(let v of emp.values()){
    console.log(v) //op - Print only Value element
}
for (let e of emp.entries()){
    console.log(e) //op - print both key and value pair
}
for (let [k,v] of emp){
    console.log(k)
    console.log(v)
}
emp.forEach(function(v,k){
console.log(k,v)
})

//-----------------------------------------
let responce = [
    {id : 1, name : "aaaa"},
    {id : 2, name : "bbbb"},
    {id : 3, name : "cccc"}
]
let Map4 = new Map()
responce.forEach(function (el){
Map4.set(el.id,el.name)
})
console.log(Map4)