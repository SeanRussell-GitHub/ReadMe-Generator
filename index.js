// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: "What is the title of your project?",
    },
    {
      type: 'input',
      name: 'description',
      message: "Please enter a short description:",
    },
    {
      type: 'input',
      name: 'installInstructions',
      message: "Please enter any installation instructions:",
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: "Please enter any usage information:",
    },
    {
        type: 'input',
        name: 'contribGuide',
        message: "Please enter any contribution guidelines:",
    },
    {
        type: 'input',
        name: 'testInstruct',
        message: "Please enter any test instructions:",
    },
]);
};

// TODO: Create a function to write README file
const writeToFile = (answers) =>
  `
    ${answers.projectTitle}
    
    ${answers.description}
    
    ${answers.installInstructions}
    
    ${answers.usageInfo}
    
    ${answers.contribGuide}
    
    ${answers.testInstruct}


    `;

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
