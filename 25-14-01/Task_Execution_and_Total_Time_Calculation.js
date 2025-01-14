// Task Execution and Total Time Calculation
// You need to write a function that performs several tasks as follows:
// Task Chain:
// Each task will have a name and a duration.
// The tasks should be executed in order, and after each task is completed, its name should be printed.
// Total Time Calculation:
// Finally, the total duration of all tasks should be printed.
// const tasks = [
//   { taskName: "task 1", duration: 1000 },
//   { taskName: "task 2", duration: 2000 },
//   { taskName: "task 3", duration: 1500 },
// ];

// runTasksWithTotalTime(tasks).then(totalTime => {
//   console.log(total duration՝ ${totalTime} milliseconds։);
// }).catch(error => {
//   console.error("There is an error:", error);
// });
// The result in console should be 
// Task 1
// Task 2
// Task 3 

// Total duration 4500 milliseconds


async function runTasksWithTotalTime(tasks) {
    let totalTime = 0;
  
    for (const task of tasks) {
     
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(task.taskName); 
          resolve();
        }, task.duration);
      });
  
      totalTime += task.duration;
    }
  
    return totalTime; 
  }
  
  const tasks = [
    { taskName: "Task 1", duration: 1000 },
    { taskName: "Task 2", duration: 2000 },
    { taskName: "Task 3", duration: 1500 },
  ];
  

  runTasksWithTotalTime(tasks)
    .then((totalTime) => {
      console.log(`Total duration: ${totalTime} milliseconds.`);
    })
    .catch((error) => {
      console.error("There is an error:", error);
    });