//function is a set of code or instruction packed in package 
//number of times can be called where ever you want

function sayMyName(){
    console.log("j");
    console.log("a");
    console.log("y");
}

sayMyName()
//sayMyName is the reference and the () paranthesis is the eexecution
// j
// a
// y

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
//we have to pass the argument when calling the function
// number1 and number2 are the parameter
// 3 and 4 are the argument 
addTwoNumbers(3,4)
//7
addTwoNumbers(3,"4")
//34
addTwoNumbers(3,"a")
//3a
addTwoNumbers(3,null)
//3

function twoNumber(num1,num2){
    console.log(num1+num2);
}
const sum = twoNumber(1,2)
// undefined bcauz it doesnt return anything

function addition(add1,add2){
    let result = add1+add2
    return result
    // return add1+add2
}

const result = addition(9,4)
console.log(result);
//13
console.log(addition(11,11));
//22
// after return the execution will be stopped // the end of the instruction


function isLoggedIn(username){
    return `${username} jus logged in`
}

console.log(isLoggedIn("jay"));
//jay jus logged in

console.log(isLoggedIn(""));
// jus logged in (empty string )

console.log(isLoggedIn());
// undefined jus logged in(undefined value or argument)

function login(user){
    if (user===undefined) {
        console.log("please enter the username");
        return
    }
    return `${user} is loged in`
}

console.log(login());
//please enter the username
// undefined

console.log(login("jay"));
//jay is loged in

// function login(user = "jayesh"){
//     if (user===undefined) {
//         console.log("please enter the username");
//         return
//     }
//     return `${user} is loged in`
// }
//jayesh is the default value in this function if any argument is not passed 

function shoppingCartPrice(...num1){
    return num1
}
console.log(shoppingCartPrice(200,300,400));
//[ 200, 300, 400 ]
// ...num1 is the rest operator it can accept the n numbers of the argument for one parameter in ann array

function shoppingCartPrice(val1,val2,...num1){
    return num1
}
console.log(shoppingCartPrice(200,300,400,2000));
//[400,2000] val1 = 200 val2=300

const user ={
    name : "jay",
    price :199
}
function details(anyobject){
    return `the name is ${anyobject.name} and the price is ${anyobject.price}`
}
console.log(details(user));
//the name is jay and the price is 199

console.log(details( 
    {
    name : "jay",
    price :199
} ) );
// you can declare the object in the arguemnt itself

let myNewArray = [100,200,300,400]

function return2Array(secondArray){
    return secondArray
}

console.log(return2Array(myNewArray[2]));
//300

 