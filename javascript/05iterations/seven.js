const nums = [1,2,3,4,5,6,7,8,9,10]

// const number = nums.map((add)=>{
//     return add+10
// })
// console.log(number);

// nums.forEach((num)=>{
//     console.log(num+10);
// })
// // 11 12 13 14 15..........

const abc = nums
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)

console.log(abc);
//  41, 51,  61, 71,
// 81, 91, 101  

