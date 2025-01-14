//5Destructuring
// Instead of creating/initializing many variables if we assign into another object mainly array and json object
// this kind of mapping is termed as destructuring

//1. Array Destructuring - when we read the data from array and assign them to another variables

//a. Direct assignment in array to array
//let sessionsList = ["AWS", "MERNStack", "JAVA"]

// let Session1 = sessionsList[0]
// let Session2 = sessionsList[1]
// let Session3 = sessionsList[2]

/*

let [Session1, Session2, Session3]=sessionsList
console.log(Session1)
console.log(Session2)
console.log(Session3)

*/


// let [Session1, Session2, Session3, Session4, Session5, Session6, Session7] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList

// console.log(Session1)
// console.log(Session2)
// console.log(Session3)
// console.log(Session7) //undefined - if nothing present at array index

//b. we can use rest param to assign remaing array
// ... - represents rest operator and holds rest of the values in a separate array

// let [Session1, Session2, Session3, ...Session] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList

// console.log(Session1)
// console.log(Session2)
// console.log(Session3)
// console.log(Session) //holds last three elements in an array

//c. Data swapping can be done easily - values are swapped with variables

let a = "New A", b = "New b";

[a, b] = [b, a]

console.log(a)
console.log(b)

//2. Object desructuring allows us to read data from objects without multiple initialization

//a. Single object destructuring

let Assessment = {
    Name : "Jugue",
    Standard : "Professional",
    Marks : {
        Java : 10,
        Mernstack : 8,
        ES6 : 9
    }
}

 

//b. Nested Destructuring - we read the data from the nested object

// e.g. - Reading marks from nested Marks object

let {Name, Marks : {Java, Mernstack, DSA = 9.5 }, Aspiration = "Technical Architect"} = Assessment

console.log(Name)
console.log(Mernstack)
console.log(DSA)




//Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring

let{FirstName,TotalMarks,Subject} =Student
console.log(FirstName)
 console.log(TotalMarks)
 console.log(Subject)

//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student
let{lastname="john",Subject:{Ecology=95}} =Student
console.log(lastname)
 console.log(Ecology)

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
const aspirations = [
    "reach your gaole",       
    "Travel to japan",  
    "Start a side business",      
    "Write a book",
    "Run a marathon",
    "Learn to play an instrument",
    "Volunteer for a cause",
    "Take up painting",
    "Develop public speaking skills"
];

// Destructuring the array
const [aspiration2024, aspiration2025, aspiration2026, ...rest] = aspirations;

console.log("Aspirations for 2024, 2025, 2026:");
console.log("2024:", aspiration2024);
console.log("2025:", aspiration2025);
console.log("2026:", aspiration2026);

console.log("Other aspirations:", rest);
//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(a=0,b=0,c=0) {
    return a*b*c
}

console.log(multiply())
console.log(multiply(1,2,3))

const multiply = (a = 0, b = 0, c = 0) => a * b * c;

console.log(multiply());       // Output: 0 (default values are used)
console.log(multiply(1, 2, 3)); // Output: 6 (1 * 2 * 3)


//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let arr = [1, 2, 3, 4, 5];


arr[5] = 6;

// Using for...of loop (to print values)

for (let value of arr) {
    console.log(value);
}

// Using for...in loop (to print indices and values)
console.log("Using for...in loop:");
for (let key in arr) {
    console.log(`Index ${key}: ${arr[key]}`);
}

//create an example of const where we can update on property of the object, where it says const is mutable

const person = {
    name: "yorguedi",
    age: 25
};


person.age = 34; 

console.log(person); 


person.city = "Raleigh";

console.log(person); // Output: { name: "yorguedi", age: 34, city: "Raleigh" }

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

// Using var in a for loop
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var i:", i); // This will print "3" three times after 2 seconds
    }, 2000);
}

// Using let in a for loop
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("let j:", j); // This will print "0", "1", "2" each after 2 seconds
    }, 2000);
}
