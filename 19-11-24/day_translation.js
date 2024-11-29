/*Day Translation
Create a program that uses a switch-case to translate a day of the week from English 
to Armenian. The user should input the name of the day in English, and the program 
should return the corresponding Armenian name.
Input: “Monday”
Output: “Երկուշաբթի” */


function translateDayToArmenian(day) {
    let translatedDay;
  
    switch (day.toLowerCase()) {
      case 'monday':
        translatedDay = 'Երկուշաբթի';
        break;
      case 'tuesday':
        translatedDay = 'Երեքշաբթի';
        break;
      case 'wednesday':
        translatedDay = 'Չորեքշաբթի';
        break;
      case 'thursday':
        translatedDay = 'Հինգշաբթի';
        break;
      case 'friday':
        translatedDay = 'Ուրբաթ';
        break;
      case 'saturday':
        translatedDay = 'Շաբաթ';
        break;
      case 'sunday':
        translatedDay = 'Կիրակի';
        break;
      default:
        translatedDay = 'Invalid input. Please enter a valid day of the week.';
    }
  
    return translatedDay;
  }
  
  // Prompt the user for input
  const userInput = prompt('Enter the day of the week in English:');
  const result = translateDayToArmenian(userInput);
  

  // Output the result
  alert(`The day '${userInput}' in Armenian is: ${result}`);
