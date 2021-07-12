// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Please enter a short description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter any installation instructions:',
      name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'Please enter any usage information:',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'Please enter any contribution guidelines:',
        name: 'contribGuide',
    },
    {
        type: 'input',
        message: 'Please enter any test instructions:',
        name: 'testInstruct',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
