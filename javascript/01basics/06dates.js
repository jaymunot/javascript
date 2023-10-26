const myDate = new Date
console.log(myDate);                       // 2023-09-29T11:11:15.282Z
console.log(myDate.toString());           //Fri Sep 29 2023 16:41:15 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());       // Fri Sep 29 2023
console.log(myDate.toISOString());        //2023-09-29T11:11:15.282Z
console.log(myDate.toJSON());             //2023-09-29T11:11:15.282Z
console.log(myDate.toLocaleDateString());//9/29/2023
console.log(myDate.toLocaleString());    //9/29/2023, 4:41:15 PM
console.log(typeof myDate);                //object

let myCreatedDate = new Date(2023,11,11)     //created new date (0-11 starts of month)
console.log(myCreatedDate.toDateString());  //Mon Dec 11 2023
console.log(myCreatedDate.toLocaleString());  //12/11/2023, 12:00:00 AM 

//continue with the github 
