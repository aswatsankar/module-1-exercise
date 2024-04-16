"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Define the Person class implementing the IPerson interface
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Method
    Person.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
exports.Person = Person;
// Create instances of Person
var person1 = new Person("Sankara", 31, "aswatsankar@gmail.com");
// Call methods
person1.sayHello(); // Output: Hello Sankara
