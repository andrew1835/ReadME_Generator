// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your projfect?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines for your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions for your project',
  },
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();










// DONE: Install all the packages
// DONE: Declare the packages at the top of the page
// TODO: Prompt the user in node with all the questions that are outlined in the description for this assignment
// TODO: Create a README template 
// TODO: Copy that template to a variable using backticks 
// TODO: Add a license  the README through Node
// TODO: Add a Questions section to the README
// TODO: Add a table of contents section
// TODO: Generate a README file
// TODO: Push the information from the variable onto the generated README file
// TODO: Do a Screencastify video 
// TODO: Submit everything, making sure that you've met all the requirements for the generator and for the sumbission guidelines 

// ACTIVITY 20 and 28 will be useful