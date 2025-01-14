//15asyncAwait
// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

//150 request/second - main thread <>
//120-130 req/sec
//sub threads - 
//50 req/sec  - async operation, await to return back to execution context
//50 req/sec  - async operation, await to return back to execution context
//50 req/sec  - async operation, await to return back to execution context

function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved',
                    "task" : "Learning async await"
                    });
            }, 2000);
    });
}

console.log("async Execution starts");

//async creates a new thread to execute API's that we see will take some time

async function asyncCall() {

    console.log("Before await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before second await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After second await - thread executes one by one")
}

asyncCall()

console.log("async Execution Ends");


//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution



const getUserInfo = () => {
        return new Promise((resolve, reject) => {
            const success = Math.random() > 0.5; 
            
            setTimeout(() => {
                if (success) {
                    resolve({
                        name: "jugue",
                        address: "624 pared rd",
                        accountNumber: "208796543"
                    });
                } else {
                    reject("sorry, Failed to retrieve user information.");
                }
            }, success ? 3000 : 2000); 
        });
    };
    
    // Async function to handle the promise using await
    const printUserInfo = async () => {
        try {
            console.log("Fetching user information...");
            
            // Await blocks here until the promise resolves or rejects
            const userInfo = await getUserInfo();
            
            // If resolved, this line will run
            console.log(`User Info:
            Name: ${userInfo.name}
            Address: ${userInfo.address}
            Account Number: ${userInfo.accountNumber}`);
        } catch (error) {
            // If rejected, this line will run
            console.log("Error:", error);
        }
    };
    
    // Execute the function
    printUserInfo();

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// Create a new Map with different types of keys
const userMap = new Map();

// Add entries with different key types
userMap.set("name", "jugue");            // String key
userMap.set(42, "User age");                      // Number key
userMap.set(true, "Verified User");               // Boolean key
userMap.set({ id: 1 }, "User Object Key");        // Object key
userMap.set(() => {}, "Function Key");            // Function key

// 1. .get() - Retrieve value for a given key
console.log("Name:", userMap.get("name"));        
console.log("Is Verified:", userMap.get(true));   

// 2. .has() - Check if a key exists in the Map
console.log("Has age key:", userMap.has(42));     // Output: true
console.log("Has admin key:", userMap.has("admin")); // Output: false

// 3. .size - Get the number of entries in the Map
console.log("Map size:", userMap.size);          

// 4. .delete() - Remove a specific entry by key
userMap.delete(42);
console.log("Has age key after deletion:", userMap.has(42)); 
console.log("Map size after deletion:", userMap.size);       

// 5. .clear() - Remove all entries from the Map
userMap.clear();
console.log("Map size after clear:", userMap.size);   

// create a list using set and show the usage of 5 functions (.add, .clear)
let uniqueValues = new Set();

// 1. .add() - Add elements to the Set
uniqueValues.add("apple");
uniqueValues.add("banana");
uniqueValues.add("cherry");
uniqueValues.add("apple"); 

console.log("Set after adding elements:", uniqueValues); // Output: Set { 'apple', 'banana', 'cherry' }

// 2. .has() - Check if an element exists in the Set
console.log("Has apple:", uniqueValues.has("apple"));  // Output: true
console.log("Has mango:", uniqueValues.has("mango"));  // Output: false

// 3. .size - Get the number of unique elements in the Set
console.log("Set size:", uniqueValues.size);           // Output: 3

// 4. .delete() - Remove a specific element from the Set
uniqueValues.delete("banana");    


// create and example of arithmatic operations (addition, substraction, multiply, division), using generator function
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