//JugueAssessment_ES6_2

//Q1) 
const heroes = [
    { name: 'Wolverine', family: 'Marvel', isEvil: false },
    { name: 'Deadpool', family: 'Marvel', isEvil: false },
    { name: 'Magneto', family: 'Marvel', isEvil: true },
    { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
    { name: 'Batman', family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
    { name: 'Legolas', family: 'Tolkien', isEvil: false },
    { name: 'Gandalf', family: 'Tolkien', isEvil: false },
    { name: 'Saruman', family: 'Tolkien', isEvil: true }
  ];

  //  a. Get heroes who are not evils
let NotEvils = heroes.filter(hero => !hero.isEvil);
console.log(NotEvils);
// b. Print Unique family names
let uniqueFamilies = [...new Set(heroes.map(hero => hero.family))];
console.log( uniqueFamilies);
// c. Print Hero Names from given objects, and append "Sir" in each of them before printing
let SirHeroes = heroes.map(hero => `Sir ${hero.name}`);
console.log( SirHeroes);
// d. Do we have any hero in Marvel Family who is not evil
let VerifyHero = heroes.some(hero => hero.family === 'Marvel' && !hero.isEvil);
console.log( VerifyHero);


//Q2)2. ES6: Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
 // using apply keyword we need to implement this one

let genArray = n => [...Array(n).keys()].map(i => i + 1);


let multiplyNumbers = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);

let resultmultiplicationfrom1toN = n => multiplyNumbers.apply(null, genArray(n));


let result = resultmultiplicationfrom1toN(4); 
console.log("the result for multiplication from 1 to n is :", result);


//Q3) Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
         first: "Jugue",
        last: "Nkuzu"
   }
 }
 const { userDetails: { last }, contact = "9119119110" } = person;

console.log("Last name is :", last);
console.log("Contact number is :", contact);

//Q4 Give me an example of const data manipulation

const human = {
    name: "jugue",
    age: 36
};

human.age = 15;
human.county = "USA"; 
console.log(human); 

//Q5  What is the difference between for-of and for-in show with examples
//Answer 5
// for in loop  iterates over the property value, basically meant for json objects with - key values
//whereas
//for of loop ,Mainely for arrays; it  iterates over the property names, more recommended for array of numbers or string instead of objects

// for of loop example
let arr = [1, 2, 3];

for (let value of arr) {
    console.log(value); 
}

//for in loop example
const objectrep = { a: 1, b: 2, c: 3 };

for (const key in objectrep) {  
     const element = objectrep[key]; 
  console.log(`${key} is ${element}`)
    }
 
 
    //Q6  Give me an example of bind and write its usage, comparison with arrow function
    //Answer 6
    //bind is used to set the this context explicitly for a function, whereas arrow functions inherently bind this lexically 
//Example of bind
    const person6 = {
        name: "Cathy",
        salutation() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    
    //Example of bind
    const saluperson = person6.salutation.bind(person6); 
    saluperson(); //output : Hello, my name is Cathy
    
 //Example of arrow functions
    const personArrow = {
        name: "Bob",
        salutation: () => console.log(`Hello, my name is ${this.name}`)
    };
    personArrow.salutation(); // Output: Hello, my name is undefined
    //in this example, the arrow function does not refer to personArrow but to the global scope, so this.name is undefined.

   

    //Q7) Create an example showing usage of event loop in concurrent execution cycle
    console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout"); 
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise"); 
});
console.log("End");


//Q8) create an example showing usage of short hand and default param.

const firstName = "jugue";
const age = 36;

const person8 = {
    firstName, 
    age,       
    hello() {  
        console.log(`Hello, my name is ${this.firstName} and I am ${this.age} years old.`);
    }
};

person8.hello(); 

function presentation(name = "noname", sexe = "male") {
    console.log(`hello, ${name}! Your sexe is: ${sexe}`);
}

presentation();                
presentation("Cathy", "female");  

  

//Q9  Create two objects with some properties and merge them using Object method and ES6 way
const obj19 = { name: "jugue", age: 36 };
const obj20 = { city: "Clayton", country: "USA" };

// Using Object.assign 
const mergedObjassign = Object.assign({}, obj19,obj20);
console.log("using Merged with Object.assign:", mergedObjassign);


// Using the spread operator 
const mergedObjspread= { ...obj19, ...obj20 };
console.log("using Merged with spread operator:", mergedObjspread);


//Q10) Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

// Create a new Map
const myMap = new Map();
myMap.set("name", "jugue");
myMap.set("age", 36);
myMap.set("country", "USA");
console.log("Name:", myMap.get("name")); 
console.log("Has 'age'? ", myMap.has("age")); 
myMap.delete("country");
console.log( myMap.has("country")); 
console.log("Size of myMap:", myMap.size); 
myMap.clear();
console.log("Size after clear:", myMap.size); 


//Q11) 11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

// Create a promise
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve([
        "success  response",      
        "promise is working well"
      ]);
    }, 1000);

    setTimeout(() => {
      reject("Promise rejected after 2 seconds");
    }, 2000);
  });
  

  myPromise
    .then(features => {
      console.log("Resolved with features:", features);
    })
    .catch(error => {
      console.error("Error:", error);
    });
 

    //Q12 Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
  
const multiplyNumbers12 = (...numbers) => {
    return numbers.reduce((product, number) => product * number, 1);
  };
  

  const multiplyUpTo = (n) => {
    const numbersArray = [...Array(n).keys()].map(x => x + 1); 
    return multiplyNumbers12(...numbersArray); 
  };
  

  console.log(multiplyUpTo(4)); 

 
  //Q13 Use the question #11 to build promises using async and await - with multithread

  // Simulate multithreading using async/await with Promise
const simulatePromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          "success response",
          "promise is working well"
        ]);
      }, 1000);
  
      setTimeout(() => {
        reject("Promise rejected after 2 seconds");
      }, 2000);
    });
  };
  
  // Async function to handle the promise
  const handlePromise = async () => {
    try {
      // Await the promise resolution
      const response = await simulatePromise();
      console.log("Resolved with features:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  // Run the async function
  handlePromise();
  

  //Q14  Create an example of generator function of your choice

  function* arithmeticOperations(a, b) {
    yield `Addition: ${a} + ${b} = ${a + b}`;
    yield `Subtraction: ${a} - ${b} = ${a - b}`;
    yield `Multiplication: ${a} * ${b} = ${a * b}`;
    yield `Division: ${a} / ${b} = ${a / b}`;
}


const operations = arithmeticOperations(8, 2);

console.log(operations.next().value); 
console.log(operations.next().value); 
console.log(operations.next().value); 
console.log(operations.next().value);

  
 //Q15 Explain your knowledge of - statelessness, http, REST, spa and classical applications

 /*
Statelessness: means that each request from a client to a server is independent, and the server does not retain any client-specific information between requests. 


HTTP (Hypertext Transfer Protocol): A protocol used for transmitting data over the internet. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various requests.

REST (Representational State Transfer): An architectural style for designing networked applications. 
RESTful services use HTTP methods (GET, POST, PUT, DELETE) and are stateless, making them simple and scalable.

SPA (Single Page Application): A web application that loads a single HTML page and dynamically updates the content as the user interacts with the app.
 This approach provides a smoother, more responsive user experience, similar to a desktop application.

Classical Applications: Traditional web applications where each user interaction triggers a full-page reload from the server. 
These apps have multiple HTML pages, and the browser loads a new page for every interaction, which can feel slower and less responsive.

 */