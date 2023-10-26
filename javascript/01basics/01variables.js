// variables
const accountId = 1123 //once dec cannot be changed
let accountName = "Jay" // can be changed
var accountPassword = "jay@google.com"
accountCity = "pune"

// accountId = 2 not allowed 
accountName ="jayesh" //changed from jay to jayesh

let accountState //  output undefined bcauz its not declared
console.log(accountId);
console.log(accountName);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountName,accountPassword,accountCity,accountState])

/*
prefer not to USE var beacuse issue in the block scope and functional scope
 */

// const is the keyword
// name is the variable
// jay is the data and defines the data type

// let jay=munot // o/p  munot is not defined , it treat munot as the variable

