// Remove Duplicates
// Given an array [1, 2, 2, 3, 4, 4, 5]:
// Write a program to create a new array where duplicate elements are removed.
// The result should be [1, 2, 3, 4, 5].

let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (uniqueNumbers.indexOf(numbers[i]) === -1) {
    uniqueNumbers.push(numbers[i]); 
  }
}

console.log("Array with duplicates removed:", uniqueNumbers);
