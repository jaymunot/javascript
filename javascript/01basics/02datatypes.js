"use strict"; //treat all JS code as newer version

// alert(3+3) //we are using nodeJS ,not broswer as a engine

console.log(3 +
    
    3);//readibility should be high

let name ="jay" //string datatype
let age = 23 //number datatype
let isLoggedIn = true //boolean datatype
let state; //o/p=undefined

// int,bigint,boolean,string,undefined,null = primitive data type

console.log(typeof null); //data type of null is object
console.log(typeof undefined); //data type of null is undefined

//********************primitive datatype**********************
// number => 2 power of 53                data type Number
//bigint =>                               data type undefined
// string => ""                           data type String
// boolean => true/false                  data type Boolean
// null => standalone value /empty        data type Object 
// undefined = not yet defined            data type undefined
// Symbol = unique id                     data type Symbol

// ***************Non Primitive/reference  data type*******************
//object,function and array

//all of these return data type of object

const ageFunction =function(){
    console.log("hello");
}// this is function 

console.log(typeof ageFunction);//function = object function also know as;

let a =["jay","jayesh","jankinath"];//   []  this is the array

let data ={
    name :"jay",
    age:22,
}      //this is the object



//*********************Memory*****************

//stack(primitive) and heap(non primitive) memory

 //stack memory : the memory where the copy is provided to the another variable 
 //the copy of the memory is edited not the original one
let name1 = "jay"

 let name2 = name1
 name2 ="jayesh"
 console.log(name1);//jay
 console.log(name2);//jayesh
 
//heap memory : the reference of the one is givrn to multiple variable id anyonje change or edit the variable it will
//reflect to all the varables of the reference
 let userone ={
    id :"123",
    mail : "@gmail.com"
}
 let usertwo = userone
 usertwo.mail = "jay"
 console.log(usertwo.mail);//jay
 console.log(userone.mail);//jay

