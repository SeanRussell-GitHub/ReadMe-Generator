// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
let license = "";
let lincenseLink = "";
let badge = "";

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
        type: 'rawlist',
        name: 'licenseList',
        message: "Please select from this list of licenses:",
        choices: ['', 'MIT','GNU','Apache']
    },
]);
};

// TODO: Create a function to write README file
const writeToFile = (answers) =>
`# ${answers.projectTitle}

 ## Description:
    ${answers.description}

 ## Table of Contents:
      Description
      Installation Instructions
      Usage Information
      Contribution Guide
      Test Instructions
      Questions
      License

    
##  Installation Instructions:
    ${answers.installInstructions}
    
##  Usage Information:
    ${answers.usageInfo}
  
##  Contribution Guide:
    ${answers.contribGuide}
    
##  Test Instructions:
    ${answers.testInstruct}

##  Questions:



## Licenses

[${license}]${lincenseLink}

${badge}

[MIT](https://choosealicense.com/licenses/mit/)

[Apache](https://opensource.org/licenses/Apache-2.0)

[GNU](https://www.gnu.org/licenses/gpl-3.0.html)

    `;


    // [GNU](https://www.gnu.org/licenses/gpl-3.0.html)

    // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


    // [Apache](https://opensource.org/licenses/Apache-2.0)

    // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


    // [MIT](https://choosealicense.com/licenses/mit/) 

    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)




// TODO: Create a function to initialize app
function init() {
  let license = '';
  promptUser()
  
  .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
