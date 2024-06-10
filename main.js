#! /usr/bin/env node
//class
class Bankaccount {
    accountBalance;
    constructor(accountBalance) {
        this.accountBalance = accountBalance;
    }
    // publically credit 
    credit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("credit sucessfully new account:" + this.accountBalance);
        }
        else {
            console.log("credit unsucessful");
        }
    }
    //pblically debit
    debit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("debit sucessfully new account:" + this.accountBalance);
        }
        else {
            console.log("debit  unsucessful");
        }
    }
}
//class customers
class customer {
    Person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(Person, age, gender, mobile_number, bankaccount) {
        this.Person = Person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    //publically user access
    display() {
        console.log("Name:" + this.Person.Firstname + "" + this.Person.Lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile_number:" + this.mobile_number);
        console.log("Amount in bank:" + this.bankaccount.accountBalance);
    }
}
const a1 = new Bankaccount(800);
const c1 = new customer({ Firstname: "waleedkhalid", Lastname: " Memon" }, 23, "male", 923125557889, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
const a2 = new Bankaccount(500);
const c2 = new customer({ Firstname: "waleed khalid", Lastname: "Memon" }, 23, "male", 92463379779, a1);
c1.display();
c1.bankaccount.debit(200);
console.log();
export {};
