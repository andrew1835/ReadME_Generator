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
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like for this application?',
    choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense","No license"]
    
  },
  
]);





const createReadMe = (answers) =>
`# ${answers.title}

## License
License type: ${answers.license}


## Project Description
${answers.description}

## Table of Contents
* [License](#license)
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
  .catch((err) => console.error(err))
  
  


// If I could've grabbed the license input here in JS, I would've written an if else statement where, if they choose a certain license type, you rewrite the README constant so that it has the badge for that specific license type. Do elses until I've gone through every license-badge scenario. I would've done the same thing for license description. 