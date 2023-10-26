// object cab be dec in two ways 
//1.literals and 2.constructor
//singleton = constructor /literalsn not singleton

//object literals
const jsUser = {
    name : "jay",
    age : 21,
    location : "pune",
    email : "jaymunot@google.com",
    isLoggedaIn : true
}
console.log(jsUser.name);
//jay

// Object.freeze(jsUser)
//it freeze the object that can be modified further

jsUser.greeting = function(){
    console.log("hello jsuser");
}
console.log(jsUser.greeting);
//[Function (anonymous)] it gives the reference of the function

console.log(jsUser.greeting());
//hello jsuser
// its give the 