// // {} curly braces are the scope ~
// // we use the let and const 
// // var can be called anywhere and it can be edited while scope
// let a= 10
// var b = 20
// const c =30

// console.log(a);
// console.log(b);
// console.log(c);

// var e = 20
// e = 200
// console.log(e);
// //200

// let a = 10

// if (true) {
//     let a = 200
//     console.log("inner,",a);
// }
// console.log(a);
// // 10

// function one(){
//     const username ="jay"

//     function two(){
//         const user = "jayesh"
//         console.log(username);
//     }
//     // console.log(id);
//     two()
// }
// one()
// //jay
// // two function can accessss the variables of the one but the one cant access the variables of the two

// if (true) {
//     const username = "jay"
//     if (username==="jay") {
//         const name ="jayesh"
//         console.log(username + name);
//         //jayjayesh
//     }
//     // console.log(name);
// }
// // console.log(username);
// //due to scope the youu can access the variables of the parent but parent cant access the variabls of the child 

//++++++++++++++++++++++interesting++++++++++++++++++++

 
// function one(num){
//     return num+
// }
// one(4)
// //5
// const two =function(num){
//     return num+2
// }
// two(4)
// //6

// one(4)

// function one(num){
//     return num+1
// }
// // 5 can access the one before initilisation

// two(4)
// const two =function(num){
//     return num+2
// }
// //Cannot access 'two' before initialization
// //variables are also called as the expression where 
// //the variables are the power ful they an hold anything (variables can be declraed before initialize)

