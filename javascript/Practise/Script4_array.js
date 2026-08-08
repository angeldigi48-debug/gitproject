//6 array
let num = [11,22,33]
console.log(num [0]); //11
console.log(num [1]); //22
console.log(num [2]); //33
console.log(num [3]); //OP - Undefined

let num1 = [22,55,77,95,89]

for(let i=0;i<5; i++){
    console.log(num1[i])
}
console.log("**************************************************")
let num2 = [2,4,6,8,10,12,14,16,18,20]
for (let a=0; a<10; a++){
    console.log (num2 [a])
} 

let name = ["R", "A", "H", "U", "L"]
for (let n=4; n>=0;n--) {
    console.log(name [n])
}

//1. Find the Largest Number in an Array

let arr = [20,5,77,55,38]
let Max = arr[0];

for (let m=1; m<arr.length; m++){
    if (arr[m] > Max){
        Max = arr[m]
    }
}
console.log ("Largest no : ", Max);

//1. Find the smallest Number in an Array
let arr1 = [105,121,55,200,44,5]
let min = arr1[0];
for(let n=1; n<arr1.length; n++){
    if (arr1[n]< min){
        min = arr1[n]
    }
}
console.log ("smallest no. " , min)

//3. Sum of All Elements

let total = [2,5,9,12,45];
let sum = 0;

for(let b=0; b<total.length; b++)
{
    sum = sum + total[b];
}
console.log("Sum of array element " , sum)

// Reverse an Array

let array = [1,2,3,4,5]
let reverse = [];
for (let c = array.length-1; c >=0; c--){
    reverse.push(array[c])
}
console.log("Reversed array ", reverse)

//5. Count Even and Odd Numbers
let num4 = [1,2,3,4,5,6,7]
let even = 0;
let odd = 0;
for (let p=0; p<num4.length; p++){
    if ( num4[p] % 2 ===0){
      even++;
    }
    else {
        odd++;
    }
}
console.log("even", even)
console.log("Odd", odd)

//6. Find Duplicate Elements
// let dup = [1,2,4,5,3,2,6,4,1]
// for(let r=0; r<dup.length; r++){
//     for(let s=r+1; s<dup.length; s++){
//         if (dup[r]===dup[s]){
//             console.log("Duplicates elements ", dup[r])
//             break;
//         }
//     }
// }

let dup = [22,44,11,22,33,66,44,88,22,11,36,77]
for (let r=0; r<dup.length; r++){
    for(let s=r+1; s<dup.length; s++){
        if(dup[r]===dup[s]){
            console.log("DUplicates ele ", dup[r])
            break;
        }
    }
}

//7. Remove Duplicates
let arrA = [1, 2, 3, 2, 4, 5, 1, 6]
let unique = [];
for (let x=0; x<arrA.length; x++){
    if(!unique.includes(arrA[x])){
        unique.push(arrA[x])
    }
}
console.log("Remove duplicates value ", unique)

//10. Sort an Array (Ascending) Without Using sort()
let arr = [5, 3, 8, 1, 2];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);