
var num1 = +prompt("Enter the first number:");  
var num2 = +prompt("Enter the second number:"); 
var operation = prompt("Choose the operation (+, -, *, /):");


var result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        break;
    default:
        result = "Invalid operation!";
}

// Show the result
alert("The result is: " + result);