const score = 100
console.log(score);//100

const sum = new Number(100)//new object defined for the number type
console.log(sum);//[Number: 100]

const balance = new Number(101)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));//101.0 this will be used in the ecommerce website for the decimal 
console.log(balance.toFixed(2));//101.00

const new1 = 235.44687
console.log(new1.toPrecision(4));//235.4
//this is to get the precise value and can precision from 1-21

const india = 1000000
console.log(india.toLocaleString('en-In'));//10,00,000 indian number comma 

//tofixed for the decimal
// .length for the length of the string

//*************************maths**********************
const age = 11.56
console.log(Math);//object math
console.log(Math.abs(-4));//4
console.log(Math.round(5.6));//6

console.log(Math.random()*10000);
console.log(Math.random());//random value from between 0-1
console.log(Math.floor());
console.log(Math.ceil());
