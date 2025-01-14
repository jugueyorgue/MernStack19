// name file is assignment.js
var Person  = {
    Name : "Jugue",
    Age : 40,
    Sexe : "Male",
    GetPersonInfo : function () { 
        return `
                    ${this.Name}
                    ${this.Age} 
                    ${this.Sexe} 
                   
                `
    }
}
// using constructor
var Student1  = new Object(Person)

// using Object.Create
var Student2 = Object.create(Person)

Student1.University = "MIT"
Student2.University = "Havard"

console.log(Student2.GetPersonInfo())
console.log(Student1.GetPersonInfo())

//over-riding the the function
Student2.GetPersonInfo=function () { 
    return `
                ${this.Name}
                ${this.Age} 
                ${this.Sexe} 
               ${this.University} 
            `
}

console.log(Student2.GetPersonInfo())


//Create three objects and merge their propeties
var Employee = { name : "Jugue", ID : "2520"}
var Department = {ID : "2520", DeptName : "IT"}
var Office = {ID : "2520", city : "New york"}

var MergeInfo;



MergeInfo = Object.assign(Employee, Department, Office)


console.log(MergeInfo)

// Create a logical example of closure

function bill(name, totalprice) {

    var Name = name
    var Totalprice = totalprice
  
    var Idbill = "2545890" 
   

    

    var billDetails = function (name, totalprice) {
        
        if (totalprice > 1000) {
            return {
                Name,
                Totalprice,
                Idbill,
                
            }
        } else {
            return "unable to get the details for this bill"
        }
    }

   
    return billDetails;
}

var billObj = bill("Jugue", 1500)

console.log(billObj("Jugue", 1500))

//Share few data objects from one file to another
assignment.exports = {
    Employee,
    Department,
    Office
}

// for example I have an other file module.js
var {Employee, Department, Office} = require("./assignment")


console.log(Employee)
console.log(Department)
console.log(Office) 
