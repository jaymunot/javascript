//object constructor

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.name = "jay"
tinderUser.id = 11
tinderUser.age = 23

// console.log(tinderUser);
//{ name: 'jay', id: 11, age: 23 }

const newTinder = {
    name :{
        fullname :{
            fname : "jay",
            lname :  "munot"
        }
    }
}

// console.log(newTinder.name.fullname.fname);
//jay

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"d"}

const mno = {obj1,obj2}
// console.log(mno);
// object in the object
//{ abc: { '1': 'a', '2': 'b' }, xyz: { '1': 'a', '2': 'b' } }

//another methiod to join the obejct

const jkl = Object.assign({},obj1,obj2)
console.log(jkl);
//{target,source}
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'd'

const obj3 = {...obj1,...obj2}
console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'd'
//mostly used for adding of two object



console.log(Object.keys(tinderUser));
//[ 'name', 'id', 'age' ]
console.log(Object.values(tinderUser));
//[ 'jay', 11, 23 ]
console.log(Object.entries(tinderUser));
//[ [ 'name', 'jay' ], [ 'id', 11 ], [ 'age', 23 ] ]
//note all the methods return the element in the array form**************


//destructure of object

const course = {
    name : "js in hindi",
    fees : 999,
    instructor :"jay"
}

// course.name

const {instructor} = course
console.log(instructor);
//jay
//multiple time usage shortcut

// const {instructor : instr} = course
//this for short word 

