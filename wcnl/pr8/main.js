// Define a class using a constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// Add a method to the class prototype
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

// Create an object (instance) of the Person class
const person1 = new Person('John', 'Doe', 30);

// Access object properties and call methods
console.log(person1.firstName); // "John"
console.log(person1.getFullName()); // "John Doe"

// Define another class
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Create an object of the Book class
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

// Access object properties
console.log(book1.title); // "The Great Gatsby"
console.log(book1.author); // "F. Scott Fitzgerald"
