// Generator function for arithmetic operations
function* arithmeticOperations(a, b) {
    yield `Addition: ${a} + ${b} = ${a + b}`;
    yield `Subtraction: ${a} - ${b} = ${a - b}`;
    yield `Multiplication: ${a} * ${b} = ${a * b}`;
    yield `Division: ${a} / ${b} = ${a / b}`;
}

// Using the generator function
const operations = arithmeticOperations(8, 2);

console.log(operations.next().value); 
console.log(operations.next().value); 
console.log(operations.next().value); 
console.log(operations.next().value); 
   








