// there are two part we consume promise nad we create the promise
 const promise1 = new Promise(function(resolve,reject){
    //do an syanc task like db connect , db related 
    // the resolve is successful  and reject is failure
    //db calls , cryptography ,network
    console.log('async is completed');
    resolve()
    // for the then execution resolve method is called and after the async method
 })

 promise1.then(function(){
    console.log('resolved');
 })
 // then keyword is direct related to the resolve


 new Promise(function(resolve,reject){
   setTimeout(function(){
      console.log('part1');
      resolve()
   },1000)
 }).then(function(){
   console.log("part2");
 })
// without using variable 

const promise3 = new Promise(function(resolve,reject){
   setTimeout(() => {
      resolve({username:'jay',id:11})
      // you can pass array , function and object and this data can be used by the then   
   }, 1000);
})
promise3.then(function(user){
   console.log(user.username)
})
//{ username: 'jay', id: 11 } the data is calledpassing a parameter 




const promise4 =  new Promise(function(resolve,reject){
   let error = true
   if(!error){
      resolve({name:'jayesh'})
   }else{
      reject('error:something went wrong')
   }
})

promise4.then(function(user){
   console.log(user);
   return user.name
})
.then(function(username1){
   console.log(username1);
})
.catch(function(error){
   console.log(error);
})
.finally(function(){
   console.log('default promsie is either resolved or reject');   
})
// then calls resolve and the catch call reject and finally is the default one it will executed 



const promise5 = new Promise(function(resolve,reject){
   setTimeout(() => {
      let error = true
   if(!error){
      resolve({name:'javascript',password:11})
   }else{
      reject('error:javascript went wrong')
   }
   }, 1000);
})
async function consumePromiseFive(){
   try {
      const response = await promise5
      console.log(response);
   } catch (error) {
      console.log(error);
   }
}
consumePromiseFive()
// try and catch aer same as the resolve and reject 
// the await isthe method where the error handling is not possible 
// so try to use try and catch or reoolve and reject method
// async function getallusers 



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.