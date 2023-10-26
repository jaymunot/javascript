// for of loop doesnt work for the object
const myObject={
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in myObject) {
//     console.log(key);
// }

// for (const key in myObject) {
//     console.log(`${key} is the value of the ${myObject[key]}`);
// }
// // js is the value of the javascript
// // cpp is the value of the c++
// // rb is the value of the ruby
// // swift is the value of the swift by apple

const lang = ["js","cpp","node"]

for (const key in lang) {
    console.log(key);   
}
// 0 1 2

for (const key in lang) {
    console.log(lang[key]);   
}
// js ,cpp,node

