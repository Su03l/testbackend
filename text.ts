// 20+ TypeScript Functions

// 1. Add two numbers
function add(a: number, b: number): number {
  return a + b;
}

// 2. Subtract two numbers
function subtract(a: number, b: number): number {
  return a - b;
}

// 3. Multiply two numbers
function multiply(a: number, b: number): number {
  return a * b;
}

// 4. Divide two numbers
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// 5. Greet a person
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 6. Check if a number is even
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// 7. Get the length of an array (generic)
function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

// 8. Log a message to the console
function logMessage(message: string): void {
  console.log(message);
}

// 9. Get full name
function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// 10. Calculate the power of a number
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

// 11. Sum all numbers in an array
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}

// 12. Find the maximum number in an array
function findMax(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined;
  }
  return Math.max(...numbers);
}

// 13. Reverse a string
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// 14. Check if a string is a palindrome
function isPalindrome(str: string): boolean {
  const reversed = reverseString(str);
  return str === reversed;
}

// 15. Capitalize the first letter of a string
function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 16. Get a random number between 0 and 1
function getRandomNumber(): number {
  return Math.random();
}

// 17. Calculate the area of a circle
function areaOfCircle(radius: number): number {
  return Math.PI * radius * radius;
}

// 18. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

// 19. Greet with an optional name
function greetOptional(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
  return "Hello, guest!";
}

// 20. Create a person object
function createPerson(name: string, age: number): { name: string; age: number } {
  return { name, age };
}

// 21. Arrow function to double a number
const double = (x: number): number => x * 2;


// Calculator
const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

// Example Usage:
console.log("Calculator examples:");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("20 / 5 =", calculator.divide(20, 5));

// User Objects

interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

const users: User[] = [
  { id: 1, username: 'user1', email: 'user1@example.com', firstName: 'John', lastName: 'Doe' },
  { id: 2, username: 'user2', email: 'user2@example.com', firstName: 'Jane', lastName: 'Smith' },
  { id: 3, username: 'user3', email: 'user3@example.com' },
  { id: 4, username: 'user4', email: 'user4@example.com', firstName: 'Peter', lastName: 'Jones' },
  { id: 5, username: 'user5', email: 'user5@example.com' }
];

console.log("\nUsers:", users);