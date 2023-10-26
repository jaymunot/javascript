// //objectc
// onst user = {
//     username : "jay",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// //jay ,welcome to website
// user.username= 'jayesh'
// user.welcomeMessage()
// //jayesh ,welcome to website
// // this is the keyword use to refer current context in the scope
//  console.log(this);
// //{} empty bcuaz we are in the node environment {already in the global environment}

// function

// function chai(){
//     let username = "jay"
//     console.log(this.username);
    
// }
// chai()
// //Object [global] ............. fro the (this)
// //undefined for the (this.username)
// // we are not allowed to use this keyword in the function

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));
// //7

// //***********implicit function***************

// const add = (sum1,sum2) => (sum1+sum2)
// console.log(add(3,4));
// //7

// in function if you use curly braces {} you have to give return keyword
// and if you use the () braces then you dont have to return 

