const marvelHeroes = ["thor", "spiderman", "ironman"]
const dcHeroes = ["superman", "flash" , "batman"]

// marvelHeroes.push(dcHeroes) 
// push the dcheroes array in the marvelheroes array 

// console.log(marvelHeroes);
//[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]  (array in the array not good practice)

// console.log(marvelHeroes[3][1]);
//flash

const j = marvelHeroes.concat(dcHeroes)
console.log(j);
//[ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]
//concat combines two arrays to form one single array

const jm = [...marvelHeroes,...dcHeroes]
console.log(jm);
//[ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]
// spread opeartor combines two or more array to form the one array

const narr1 = [1,2,3,[1,2,3],4,[6,7,[1,2]]]
const arr1 = narr1.flat(Infinity)
console.log(arr1)
// [  1, 2, 3, 1, 2, 3, 4, 6, 7, 1, 2 ]

//**************methods of array******************

console.log(Array.isArray("jayesh"));
//false

console.log(Array.from("jayesh"));
//[ 'j', 'a', 'y', 'e', 's', 'h' ]

// console.log(Array.from({name : Jayesh}));
//{}

const num1 = 100
const num2 = 200
const num3 = 300

console.log(Array.of(num1,num2,num3)); 
//[ 100, 200, 300 ]