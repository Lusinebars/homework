// You are provided with an array of students, where each student is represented as
//  an object. Each object contains the student’s name and their score. Your task is 
// to determine the grade status of each student using a for loop and a switch 
// statement.
// The grade categories are as follows:
// i >= 90 → “Excellent”
// i >= 75 → “Good”
// i >= 50 → “Pass”
// default → “Fail”
// Data example
// const students = [
//   { name: "Anna", grade: 85 },
//   { name: "Mariam", grade: 92 },
//   { name: "Olivia", grade: 76 },
//   { name: "Emma", grade: 59 },
// ];


// Array of student objects
const students = [
    { name: "Anna", grade: 85 },
    { name: "Mariam", grade: 92 },
    { name: "Olivia", grade: 76 },
    { name: "Emma", grade: 59 },
    { name: "John", grade: 45 }, // Example for a "Fail" case
  ];
  
  // Function to determine grade status based on the grade
  function determineGradeStatus(grade) {
    switch (true) {
      case grade >= 90:
        return 'Excellent';
      case grade >= 75:
        return 'Good';
      case grade >= 50:
        return 'Pass';
      default:
        return 'Fail';
    }
  }
  
  // Loop through each student and determine their grade status
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const status = determineGradeStatus(student.grade);
    console.log(`${student.name} has a grade of ${student.grade} and is classified as: ${status}`);
  }