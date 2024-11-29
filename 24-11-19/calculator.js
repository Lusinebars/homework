/*Calculator
The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case
Input: 5, 3, "+"Output: 8 */

var result;

var num1 = +prompt('Enter the first number:');
var num2 = +prompt('Enter the second number:');
var operation = prompt('Choose the operation (+, -, *, /):');

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
    default:
        result = 'Invalid operation!';
}
 

alert('The result is:' + result);