const coding = ["js","cpp","node"]

// coding.forEach(function (val){
//     console.log(val);
// })
// // js cpp node =call back function
// // function name is not required in this foreach

// coding.forEach( (val)=>{
//     console.log(val);
// }  )
// //js cpp node = arrow function
// // function name is not required in this foreach


// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)
// // js cpp node
// // this is where the function is declared outside and called inside the foreach with using name

// coding.forEach( (item,value,arr)=>{
//     console.log(item,value,arr);
// })
// // js 0 [ 'js', 'cpp', 'node' ] ,,,cpp 1 [ 'js', 'cpp', 'node' ],,, node 2 [ 'js', 'cpp', 'node' 

mycoding = [
    {
        language :"js",
        price:"9"
    },
    {
        language :"js",
        price:"9"
    },
    {
        language :"js",
        price:"9"
    }
]

mycoding.forEach((item)=>{
    console.log(item.language);
})
//js js js 

