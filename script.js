//  ctrl + / (NOTE THIS IS A COMMENT)

//  This is an external JavaScript file

// SPECIAL FUNCTIONS IN JAVASCRIPT

// a simple log to the console or the terminal
console.log("Hello, World!");
// a special function that shows a dialog box to the user(asks the user for input)

prompt("Enter your name: to continue");

// alert shows a message to the user in a dialog box

alert("Thank you, you have been registered!");

// Variable declaration is where we use the var, let, or const keywords to create a variable

let userName = prompt("Enter your name to continue");

// the name stored in the userName variable is printed to the console
console.log(userName || console.error("username is required"));

// we use the OR operator || to provide a fallback action if userName is falsy (empty, null, undefined
// we use backticks ` ` to create a template literal that can include variables and functions inside ${}
alert(`Welcome, ${userName}! You have been registered successfully.`);

// variables store data values that can be used and manipulated throughout the code

// here are some data types in JavaScript:
// 1. String - a sequence of characters enclosed in quotes
let message = "This is a string";
// 2. Number - numeric values (integers and floating-point numbers)
let age = 25;
// 3. Boolean - represents true or false values
let isRegistered = true;
// 4. Array - a collection of values stored in a single variable
let colors = ["red", "green", "blue"];
// 5. Object - a collection of key-value pairs
let user = {
    name: userName,
    age: age,
    isRegistered: isRegistered,
    favoriteColors: colors
};
console.log(user);
// 6. Null - represents the intentional absence of any object value
let emptyValue = null;
// 7. Undefined - indicates that a variable has not been assigned a value
let notAssigned;
console.log(emptyValue, notAssigned);
// here are more data types in JavaScript:
// 8. Symbol - a unique and immutable primitive value often used as object keys
let uniqueId = Symbol("id");
console.log(uniqueId);
// 9. BigInt - a numeric data type that can represent integers with arbitrary precision
let bigNumber = BigInt(9007199254740991);
console.log(bigNumber);

//here are some examples of variable declarations using var, let, and const:
var city = "New York"; // function-scoped variable (NOT recommended for use in modern JavaScript)
let country = "USA"; // block-scoped variable
const pi = 3.14159; // block-scoped constant variable
console.log(city, country, pi);

const countryCode = 254;
console.log(`The country code is +${countryCode}`);

//Javascript is able to conduct all arithmetic operations like addition, subtraction, multiplication, and division
// Here is an example of addition:
let x = 10;
let y = 5;
//because x and y have been declared outside a function or block, they are in the global scope and can be accessed anywhere in the code.

let sum = x + y;
console.log(`The sum of ${x} and ${y} is ${sum}`);
// arithmetic operations

// Here is an example of subtraction:
let difference = x-y;
console.log(`The difference between ${x} and ${y} is ${difference}`);

// Here is an example of multiplication:
let product = x * y;
console.log(`The product of ${x} and ${y} is ${product}`);

// Here is an example of division:
let quotient = x / y;
console.log(`The quotient of ${x} and ${y} is ${quotient}`);

// Here is an example of modulus:
let remainder = x % y;
console.log(`The remainder of ${x} divided by ${y} is ${remainder}`);

// Here is an example of exponentiation:
let power = x ** y;
console.log(`${x} raised to the power of ${y} is ${power}`);

// Here is an example of increment:
x++;
console.log(`The value of x after incrementing is ${x}`);

// Here is an example of decrement:
y--;
console.log(`The value of y after decrementing is ${y}`);

// You can combine multiple arithmetic operations in a single expression:
let complexCalculation = (x + y) * (x - y) / y;
//(this is a compound expression that adds x and y, subtracts y from x, multiplies the results, and divides by y)
console.log(`The result of the complex calculation is ${complexCalculation}`);

// Remember to follow the order of operations (PEMDAS/BODMAS) when performing calculations.

// You can also use parentheses to group operations and control the order of evaluation.
let groupedCalculation = ((x + y) * x) / (y - 2);
console.log(`The result of the grouped calculation is ${groupedCalculation}`);

// These examples demonstrate the basic arithmetic operations in JavaScript.

// You can use these operations to perform calculations and manipulate numeric data in your programs.

// Assignment Operators
let a = 10; // assigns the value 10 to variable a
let b = 5;  // assigns the value 5 to variable b

// Here is an example of the addition assignment operator (+=):
a += b; // equivalent to a = a + b
console.log(`The value of a after addition assignment is ${a}`);

// Here is an example of the subtraction assignment operator (-=):
a -= b; // equivalent to a = a - b
console.log(`The value of a after subtraction assignment is ${a}`);

// Here is an example of the multiplication assignment operator (*=):
a *= b; // equivalent to a = a * b
console.log(`The value of a after multiplication assignment is ${a}`);

// Here is an example of the division assignment operator (/=):
a /= b; // equivalent to a = a / b
console.log(`The value of a after division assignment is ${a}`);

// Here is an example of the modulus assignment operator (%=):
a %= b; // equivalent to a = a % b
console.log(`The value of a after modulus assignment is ${a}`);

// Here is an example of the exponentiation assignment operator (**=):
a **= b; // equivalent to a = a ** b
console.log(`The value of a after exponentiation assignment is ${a}`);
// These examples demonstrate the use of assignment operators in JavaScript.

// comparison operations
// comparison operators are used to compare two values and return a boolean result (true or false) (truthy or falsy).

let m = 10;
let n = 5;

// Here is an example of the equality operator (==):
console.log(m == n); // false, because 10 is not equal to 5

// Here is an example of the strict equality operator (===):
console.log(m === n); // false, because 10 is not strictly equal to 5

// Here is an example of the inequality operator (!=):
console.log(m != n); // true, because 10 is not equal to 5

// Here is an example of the strict inequality operator (!==):
console.log(m !== n); // true, because 10 is not strictly equal to 5

// Here is an example of the greater than operator (>):
console.log(m > n); // true, because 10 is greater than 5

// Here is an example of the greater than or equal to operator (>=):
console.log(m >= n); // true, because 10 is greater than or equal to 5

// Here is an example of the less than operator (<):
console.log(m < n); // false, because 10 is not less than 5

// Here is an example of the less than or equal to operator (<=):
console.log(m <= n); // false, because 10 is not less than or equal to 5
// These examples demonstrate the use of comparison operators in JavaScript.

// Logical or boolean operators
let p = true;
let q = false;
// Here is an example of the logical AND operator (&&):
console.log(p && q); // false, because both p and q are not true

// Here is an example of the logical OR operator (||):
console.log(p || q); // true, because at least one of p or q is true
// Here is an example of the logical NOT operator (!):
console.log(!p); // false, because p is true, so NOT p is false
// These examples demonstrate the use of logical operators in JavaScript.

// String Operations
let str1 = "Hello, ";
let str2 = "World!";

// Here is an example of string concatenation using the + operator:
let combinedStr = str1 + str2;
console.log(`The combined string is: ${combinedStr}`);

// Here is an example of string repetition using the repeat() method:
let repeatedStr = str1.repeat(3);
console.log(`The repeated string is: ${repeatedStr}`);

// Program Flow Control Structures

// Functions
// (a function is a piece of code that performs a specific task and can be reused multiple times throughout the program)

function add(num1, num2) { //note parameters inside the parentheses(parameters are placeholders for values that will be passed to the function when it is called (think about them as variables that hold the values you want to work with inside the function))
    return num1 + num2;
}
// parts of a function:
// 1. Function Declaration: The function is declared using the function keyword followed by the function name (add) and parentheses ().
// 2. Parameters: Inside the parentheses, we have parameters (num1 and num2) that act as placeholders for the values that will be passed to the function when it is called.
// 3. Function Body: The code inside the curly braces {} is the body of the function, where we define what the function does. In this case, it returns the sum of num1 and num2 using the return statement.
// 4. Return Statement: The return statement specifies the value that the function will output when it is called. In this case, it returns the result of num1 + num2.

console.log(add(4, 10)); // here we call the add function with arguments 4 and 10 (arguments are the actual values passed to the function when it is called)
console.log(add(20, 30)); // here we call the add function with arguments 20 and 30
console.log(add(7, 3)); // here we call the add function with arguments 7 and 3
console.log(add(15, 25)); // here we call the add function with arguments 15 and 25

// user defined function  (This is a function created by the user to perform a specific task)

function greetUser(name) {
    alert(`Hello, ${name}! Welcome to our website.`);
}

//call by function name
greetUser("Wedi");

// Program flows (we have types of processing flows in programming including sequential, selection, and iteration)
// Sequential Flow: This is the default flow of execution where statements are executed one after the other in the order they appear in the code.
let a1 = 5;
let b1 = 10;
let sum1 = a1 + b1;
console.log(`The sum of ${a1} and ${b1} is ${sum1}`);

// Selection Flow: This flow allows the program to make decisions based on certain conditions using conditional statements like if, else if, and else.
let age1 = 18;

//parts of an if statement:
// 1. The if keyword indicates the start of a conditional statement.
// 2. The condition (age1 >= 18) is placed inside parentheses (). This condition is evaluated to determine whether it is true or false.
// 3. The code block inside the curly braces {} is executed only if the condition evaluates to true.

if (age1 >= 18) {
    console.log("You are eligible to vote.");
}
// In order to provide an alternative action when the condition is false, we can use the else statement.
else {
    console.log("You are not eligible to vote yet.");
}

// example 2
let score = 85;

// parts of an if-else statement:
// 1. The if keyword indicates the start of a conditional statement.
// 2. The condition (score >= 85) is placed inside parentheses (). This condition is evaluated to determine whether it is true or false.
// 3. The code block inside the first set of curly braces {} is executed only if the condition evaluates to true.
// 4. The else keyword provides an alternative action when the condition is false.
// 5. The code block inside the second set of curly braces {} is executed only if the condition evaluates to false.

if (score >= 85){
    console.log("Grade: A");
} else {
    console.log("I am sorry, you did not pass." );
}

// we can use this in a funtion

function checkEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote yet.");
    }
}

checkEligibility(20); // calling the function with age 20
checkEligibility(16); // calling the function with age 16

// in case of multiple conditions, we can use else if statements to check additional conditions.

function determineGrade(marks) {
  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 80) {
    console.log("Grade: B");
  } else if (marks >= 70) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
}

determineGrade(95); // calling the function with marks 95
determineGrade(85); // calling the function with marks 85
determineGrade(75); // calling the function with marks 75
determineGrade(60); // calling the function with marks 60

// Note : the else if statements are checked in order, and the first condition that evaluates to true will execute its corresponding code block. If none of the conditions are true, the code block inside the else statement will be executed.
// Note: The `else if` statements are used to check multiple conditions in sequence. They work well when each condition is different. However, if you are checking one variable against many possible fixed values, a `switch` statement is usually cleaner and easier to read.

// The switch statements

// Parts of a switch statement :
// 1.The switch keyword this starts the statement
// 2.case looks for a possible match for values
// 3 break stops code from continuing to the next case
// 4 default runs only when no cases match



function daysOfWeek(dayNumber){

  const daynum = Number(dayNumber);

  // to use the switch start with the key word (Switch),
  // within the switch use case to define your conditions
  // break to terminate conditions

  switch(daynum){
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;

    default:
      console.log("Enter a valid day")
  }
}

daysOfWeek(4);

