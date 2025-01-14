//7class
// Class - has been added in ES6 as a special and upgraded function to give us feature similar to
// other class based programming languages

//class keyword is used to create class and we can create associated methods as we did in cunstructor function <without using this>


class Area { //scope of the class { < --- --- >}
    
    // constructor is used to initialized the properties
    constructor(length = 0, breadth = 0){
        this.length = length
        this.breadth = breadth
    }

    AreaOfCircle = function (radius = 0) {
        return 3.141*radius*radius //pie*r-square
    }

    Square = ()=> this.length * this.length ;

    Rectangle = ()=>{
        return this.length * this.breadth
    }

}

let areaObj = new Area(6, 9) //instantiation of area class

console.log(areaObj.AreaOfCircle(12))

console.log(areaObj.Square())
console.log(areaObj.Rectangle())


// Task - create a class named as account accepting 3 or more params  like - name, acct type etc and
// has three methods to show balance, user details and account offers

class Account {
    constructor(name, accountType, balance) {
        this.name = name;
        this.accountType = accountType;
        this.balance = balance;
    }

    // Method to show balance
    showBalance() {
        console.log(`Balance: $${this.balance}`);
    }

    // Method to show user details
    showUserDetails() {
        console.log(`Account Holder: ${this.name}`);
        console.log(`Account Type: ${this.accountType}`);
        console.log(`Balance: $${this.balance}`);
    }

    // Method to show account offers
    showAccountOffers() {
        if (this.accountType === "Savings") {
            console.log("Offers: 3% per month interest ");
        } else if (this.accountType === "Checking") {
            console.log("Offers: 1% per month interest");
        } else {
            console.log("Offers: no interest");
        }
    }
}

// Usage
const userAccount = new Account("Jugue", "Savings", 5000);

userAccount.showBalance(); 

userAccount.showUserDetails();

userAccount.showAccountOffers();