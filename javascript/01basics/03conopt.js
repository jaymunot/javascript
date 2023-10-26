let score = 33

// console.log(typeof score); //number 
// console.log(typeof (score)); //number 

let score2 = "33"

// console.log(typeof score2); //string 
// console.log(typeof (score2)); //string 

// *******conversion******

let newScore = Number(score2) // converted string to number 
let newScore2 = String(score) // converted number to string

// console.log(typeof newScore) //number
// console.log(typeof newScore2)//string

// Number or anyother datatype should Be in Capital of first letter

let age = "33abc"
// console.log(age);//33abc
// console.log(typeof age);//string

let newAge = Number(age)
// console.log(newAge);//NaN = Not a Number
// console.log(typeof newAge);//number

//conversion of boolean true=1 false=0
//conversion of null = 0
//conversion of undefined = NaN
// 1=> true / 0=>false
//""=> false
//"jay" => True


// ************operations***********

let value = 3
let newValue = -value
// console.log(newValue);//-3

let str1= "JAY"
let str2 = "munot"
let str3 = str1 +str2
// console.log(str3);//JAYmunot

console.log("1" + 2);//12
console.log(1+"2");//12
console.log("1" + 2 + 2);//122
console.log(1+2+"2");//32

console.log(+true);//1
console.log(+"");//0

let num ,num1,num2
num=num1=num2=2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
