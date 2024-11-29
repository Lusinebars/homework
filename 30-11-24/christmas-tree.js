//Christmas tree

function drawChristmasTree(height) {
   
    for (let i = 1; i <= height; i++) {
      let stars = '*'.repeat(i);  
      console.log(stars);         
    }
  }
  
  drawChristmasTree(15);