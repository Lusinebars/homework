// Sum of Elements
// Given an array of numbers [1, 2, 3, 4, 5, 6]:
// Write a program to find the sum of all the elements in the array using 
// only a for loop and the array.

let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; 
}

console.log("The sum of all elements is:", sum);