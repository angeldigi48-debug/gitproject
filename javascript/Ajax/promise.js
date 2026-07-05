// Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()
//----------------------------------------------------------------------

//promise.all()
//will execute promises till it get first reject ... 
//after getting first reject it will through shortcircut

async function PromiseAll(){
    let user = await Promise.all([
        Promise.resolve("Hello1"),
        Promise.resolve("Hello2"),
        Promise.reject("bye1"),
        Promise.reject("bye2")
    ])
    console.log(user)
}
PromiseAll();

//promise.any
//it will exectue till it get first resolve 

async function PromiseAny(){
    let user = await Promise.any([
        Promise.reject("Bye1"),
        Promise.reject("Bye2"),
        Promise.resolve("Hello1"),
        Promise.resolve("Hello2")
    ])
    console.log(user)
}
//PromiseAny()


//promise.allsettled()
//it will execute all and return whatever is result in array..
//if resolve return output ..if reject return reason 

async function PromiseAll(){
    let user = await Promise.allSettled([
        Promise.reject("Bye1"),
        Promise.reject("Bye2"),
        Promise.resolve("Hello1"),
        Promise.resolve("Hello2")

    ])
    console.log(user)
    
}
//PromiseAll()


//promise.race()
//it will race betweenthe promises and returns first executed promise.

function addTime1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Hello1")
        },3000)
    })
}
function addTime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Hello2")
        },6000)
    })
}

async function promiseRace(){
    let user = await Promise.race([
        addTime1(),
        addTime2()
    ])
    console.log(user)
    
}
promiseRace()