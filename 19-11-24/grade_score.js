/*Write a program that takes the user’s score and prints the corresponding grade based on the following rules:
90-100 = “A”
80-89 = “B”
70-79 = “C”
60-69 = “D”
0-59 = “F”  
Goal
Use multiple if-else if statements. */

function grade (score) {
    if(score >= 90 && score <= 100){
     return 'A';
    } else if(score >= 80 && score <= 89){
     return 'B';
    } else if(score >= 70 && score <= 79){
     return 'C';
    } else if(score >= 60 && score <= 69){
     return 'D';
    } else if(score >= 0 && score <= 59){
     return 'F';
    } 
    
    return 'Input number is wrong - ' + score;
    }
    
    console.log(grade(70))