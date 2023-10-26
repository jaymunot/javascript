const nums = [1,2,3]

const myTotal = nums.reduce((acc,currval)=>{
    console.log(`acc is ${acc} and the currval is ${currval}`);
    return acc+ currval
},0)
console.log(myTotal);
//acc is 0 and the currval is 1
// acc is 1 and the currval is 2
// acc is 3 and the currval is 3
// 6

const cart =[]