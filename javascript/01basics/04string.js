let fName = "jay"
let lName = 55

// console.log(fName+lName); //jay5 outdated

//using backstick (string interpolation)
console.log(`hello my name is ${fName} and my roll number is ${lName}`);

console.log(fName.toUpperCase());//JAY

const name = new String("jayesh");

console.log(name.toUpperCase());//JAYESH

console.log(name.length);//6

console.log(name.charAt(0));//J

console.log(name.indexOf('j'));//0

const newString =name.substring(0,4)//start with 0 and ends at 4 but it not include the 4 position char 
console.log(newString);//jaye

const anotherString = name.slice(-4,4)
console.log(anotherString);//ye

const newOne = "    Hello    "
console.log(newOne);//      Hello
console.log(newOne.trim());//Hello

const url = "www.google.com"
console.log(url);
console.log(url.replace('g','G'));




//can write the string value in single and double quote
//new is the keyword creating the object 
//toUpperCase() is the function or method 








