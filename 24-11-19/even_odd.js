/* Write a program that takes a number as input and checks if it is even or odd:
If the number is even, print “The number is even.”
If the number is odd, print “The number is odd.”
Use and learn modulo operator % */

const number = prompt('Enter a number:');
if (number % 2 == 0) {
    console.log('The number is even.');
}
    else {
    console.log('The number is odd.');
}