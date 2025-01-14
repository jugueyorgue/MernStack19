//Q1. Create a file with name basics and show all the features that you know about javascript?
// first topic function

function add(a, b) { 
    return a+b
}

console.log(add(1,3));

//second topic data type
var amount = 1000
console.log(amount)
console.log(typeof amount)

//third topic overloading
function add(a, b,c) { 
    return a+b+c
}
console.log(add(1,3,5));

//fourth topic hoisting
console.log(substraction(5,2));
function substraction(a,b){
    return a-b
}

//fifth topic meging object
var Employee = { name : "Jugue", ID : "2520"}
var Department = {ID : "2520", DeptName : "IT"}
var Office = {ID : "2520", city : "New york"}

var MergeInfo;

MergeInfo = Object.assign(Employee, Department, Office)

console.log(MergeInfo)


//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

function display(value) {
    console.log("Value is :", value, "| Type is :", typeof value);
}



let values = [
    "Robert",          
    0.0266,            
    false,              
    {myname: "Test Me"},
    25166665,           
    undefined,          
    true,               
    "Robert Jr.",       
    null,              
    {},                 
    -32767             
];


for (let i = 0; i < values.length; i++) {
    display(values[i]);
}

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function showUserInfo(firstname, lastname, age) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age;

    this.printDetails = function () {
        console.log("User Information Entered is -", this.firstname, this.lastname, this.age)
    }

}

var newUserObj = new showUserInfo("Jugue", "smith",38)
console.log(newUserObj.printDetails());


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

function doaddition(a, b, c) {
    return a + b + c;
}


console.log("doaddition(2,3,4):", doaddition(2, 3, 4)); //9
console.log("doaddition(2):", doaddition(2));            //NaN 
console.log("doaddition(2.3, 3):", doaddition(2.3, 3));  //NaN
console.log('doaddition("first", 2, "three"):', doaddition("first", 2, "three")); // first2three

//Q5. Give me an example of your choice for each of the below concepts
// b. hoisting

console.log(multiplication(5,2));
function multiplication(a,b){
    return a*b
}

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

//answer6
//Call  Apply and bind are the functions attached to function (keyword-function), this helps the function in question to change the context ,to return desired object values
//the difference between call and apply is  that apply executes immediately  and change the context and return value
// whereas  bind doesn't execute the function immediately , it holds the context 


//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
var Student = {
    name : "jugue", age : 23,  address : "clayton USA ,NC",
    GetStudentDetails : function () {
           

            setTimeout(function(){
                
                console.log(`
                    ${this.name} ${this.age}
                    ${this.address}
                `)                
               
            }.bind(Student), 1000);
    }
}

Student.GetStudentDetails()

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
var nullObj = Object.create(null)
//the purpose of creating  object with null prototype is to avoid  Collisions with Object Methods like toString ,
//object without a prototype could be slightly faster in some cases 

//Q9. How do we merge different objects properties using Object class function
//Answer9
//by using Object.assign() that copies all enumerable properties from one or more source objects to a target object.
//It modifies the target object and returns it.

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned
//Answer10

//suppose we are in the basics.js
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30    
};



module.exports = {
    person
   
}
    

//go to the another file and type the below code

/*
var person = require("./basics")

 console.log(person);    
*/       