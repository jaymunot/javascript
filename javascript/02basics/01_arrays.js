//array are resizable and m,ixed data type

const myArr = [0,1,2,3,4]
console.log(myArr[0]); //0 

const newArr = new Array(1,2,3,4,5)  //another way to dec array
console.log(newArr[0]);//1



//array method

myArr.push(5)         //added in array in last
console.log(myArr);

myArr.pop()  //remove last value

myArr.unshift(9)
console.log(myArr);//added to start of array

myArr.shift()  // remove the first element of array

const oneArr = myArr.join() //convert array to string(comma separated)

console.log(myArr);
console.log(oneArr);//convert array to string(comma separated) 0,1,2,3,4

console.log(myArr.includes(9)); // False boolean value
console.log(myArr.indexOf(3)); // give the index of the element

//slice splice

console.log("a",myArr); //a [ 0, 1, 2, 3, 4 ]

const mya1 = myArr.slice(1,3)  
console.log(mya1); //[ 1, 2 ]

console.log("b",myArr);//b [ 0, 1, 2, 3, 4 ]

const mya2 = myArr.splice(1,3)
console.log(mya2);//[ 1, 2, 3 ]
console.log(myArr);//[ 0, 4 ]

//slice give the copy of the array and the splice does the manipulation of the array