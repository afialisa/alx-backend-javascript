const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// On receiving input, display the name
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  
  // Close the readline interface when input ends
  rl.close();
});

// On closing the readline interface
rl.on('close', () => {
  console.log("This important software is now closing");
});
