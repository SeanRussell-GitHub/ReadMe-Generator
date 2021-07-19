// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
const generateMarkdown = require('./generateMarkdown');
// const writeFileAsync = util.promisify(fs.writeFile);

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
    {
        type: 'input',
        name: 'gitHubId',
        message: 'Please enter your GitHub ID:',
    },
    {
        type: 'input',
        name:'contactEmail',
        message: 'Please enter your contact email:',
    },
    {
        type: 'list',
        name: 'licenseList',
        message: "Please select from this list of licenses:",
        choices: ['None', 'MIT','GNU','Apache']
    },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(`${fileName}.md`, data, 
  (err) => err ? console.error(err) : console.log(`We have created ${fileName}.md successfully.`))
}
// ${answers.licenseList}


// TODO: Create a function to initialize app
function init() {
  promptUser()
  .then((answers) => {
   writeToFile(answers.projectTitle, generateMarkdown(answers));
  })
}

// Function call to initialize app
init();


