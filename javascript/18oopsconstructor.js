class Person2 {
    constructor(firstName,lastName){
        this.fn = firstName
        this.ln  = lastName
    }
    displayName(){
        console.log(this.fn + this.ln)
    }
}
let rahul = new Person2("rahul","singh")
console.log(rahul)
let sarika = new Person2("sarika","pansare")
console.log(sarika)