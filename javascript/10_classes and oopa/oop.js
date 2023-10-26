const user = {
    username : 'jay',
    logincount : 123,
    lodin : true,
    getUserDetails: function(){
        console.log(`got user details from db` );
    }
}
// object literal is nothing but object (literally)
// console.log(user.username);
//to access the properties of  username 
// console.log(user.getUserDetails);
// getuserdetails is the object and the other are properties like .length and .tolowercase



// class is noting but object
// this is the key word for the preference
// new is the constructor instance that makses the copy of the object to avoid overiding 
// new gives the new instqance of the object or copy of the object
// new empty object is created called as instance , then construiucotr function called using new keyword , 
// this keyword inject and the instance is created

//hitesh choudjary code 
const user1 = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);
// this is the current context

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    // this.username is the variablea and the username is the argument or value
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
const userThree = User('jay',99,true)

console.log(userOne.username);
//console.log(userTwo);
// console.log(userThree.username);
// to avoid overriding we sue new keyword   
// new word create the empty object first then calls constructor function and the this keyword asign the argument that it
// instance of check the method of same 