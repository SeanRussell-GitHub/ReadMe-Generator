// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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

${answers.licenseList}
  
[${license}]${lincenseLink}

${badge}



    `;
// ${answers.licenseList}


// TODO: Create a function to initialize app
function init() {

  promptUser()
  .then((answers) => {
    const license = answers.licenseList;
   console.log(license);
   renderLicenseBadge(license);
    writeFileAsync('README.md', writeToFile(answers))
  })
  // .then((results) => )
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();




    // [GNU](https://www.gnu.org/licenses/gpl-3.0.html)

    // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


    // [Apache](https://opensource.org/licenses/Apache-2.0)

    // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


    // [MIT](https://choosealicense.com/licenses/mit/) 

    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


    function renderLicenseBadge() {
      if (license = "MIT") {
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";          
        } else {
          if (license = "Apache") {
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          } else {
            if (license = "GNU") {
              badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            } else {
              badge = "no license given, unknown";
            }
          }
        }
      }
    

