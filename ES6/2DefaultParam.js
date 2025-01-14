//2DefaultParam
// ES6 allows us to initialize the parameter at the time of function definition
// this helps us to reduce the logical validations of undefined

function Addition(val1 = 0, val2 = 0, val3 = 0 ) {
   console.log(val3)
    return val1 + val2 + val3
}

console.log(Addition(1,2,3))
console.log(Addition(1,2)) //NaN - Not A Number if you dont put val3 = 0 as val3 is undefined



//create a student information functional and set some values as default

// Using a regular function with default parameters
function createStudent(name = "Unknown", age = 18, grade = "Not assigned") {
    return {
        name,
        age,
        grade,
    };
}

// Usage
let student1 = createStudent(); 
let student2 = createStudent("Alice", 20); 
let student3 = createStudent("Bob", 22, "A"); 

console.log(student1); 
console.log(student2); 
console.log(student3); 