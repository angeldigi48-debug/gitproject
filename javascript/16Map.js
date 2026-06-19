// Map and set
let info = {
    1 : "admin",
    2 : "Manager",
    3 : "Customer",
    4 : "Supervisor"

}
console.log(info)
//op - { '1': 'admin', '2': 'Manager', '3': 'Customer', '4': 'Supervisor' } in object key is always a String it is visible in double quote.

let MapA = new Map([
    [1, "Admin"],
    [2, "Manager"],
    [3, "Customer"],
    [4, "Supervisor"]
])
console.log(MapA)
// //op - Map(4) {
//   1 => 'Admin',
//   2 => 'Manager',
//   3 => 'Customer',
//   4 => 'Supervisor'
// Map madhe jo data type asel to yeto aata key jr number aahe tr number ch op yenar