// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { create } = require('domain');

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
  {
    type: 'input',
    name: 'gitHub',
    message: 'What is your GitHub username?',
    
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    
  },
  {
    type: 'input',
    name: 'reachMe',
    message: 'Describe any other ways you can be reached other than GitHub and email',
    
  },
]);


const createReadMe = (answers) =>
`# ${answers.title}

## Project Description
${answers.description}

## Table of Contents
* [Project Description](#project-description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)


## Installation Instructions
${answers.installation}

## Usage Information
${answers.usage}

## Contribution Guidelines
${answers.contributing}

## Test Instructions
${answers.tests}

## Questions
If you have any questions feel free to contact me using the information below:
* GitHub: https://github.com/${answers.gitHub}
* Email: ${answers.email}
* Other ways to reach me: ${answers.reachMe}
`

questions()
  .then((answers) => writeFileAsync('README.md', createReadMe(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();










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



// TODO:
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README