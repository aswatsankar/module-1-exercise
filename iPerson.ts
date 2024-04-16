// Define an interface for IPerson
interface IPerson {
    name: string;
    age: number;
    email: string;
}

// Define the Person class implementing the IPerson interface
export class Person implements IPerson {

    // Properties
    name: string;
    age: number;
    email: string;

    // Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Method
    sayHello(): void {
        console.log("Hello " + this.name);
    }
}

// Create instances of Person
const person1: Person = new Person("Sankara", 31, "aswatsankar@gmail.com");

// Call methods
person1.sayHello(); // Output: Hello Sankara
