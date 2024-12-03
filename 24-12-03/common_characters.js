// Find Common Characters Between Two Strings
// Description: Write a program that checks how many characters are common between two strings, without using new Set, and  function.
// Example
// // Given strings
// const str1 = "react";
// const str2 = "redux";
// let commonCount = 0; 
// let checkedChars = '';

// // Expected Output
// 2 // Because the strings "react" and "redux" share the characters 'r' and 'e'


const str1 = "react";
const str2 = "redux";

let commonCount = 0;

let checkedChars = "";

for (let i = 0; i < str1.length; i++) {
  const char = str1[i];

  if (str2.indexOf(char) !== -1 && checkedChars.indexOf(char) === -1) {
    commonCount++;          
    checkedChars += char;   
  }
}

console.log(commonCount);