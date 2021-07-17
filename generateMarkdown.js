// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return 'License and badge unknown, no entry'
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
 } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
}
    
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ''
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
 } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return 'License and badge unknown, no entry'
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
 } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.licenseList)}
  ## Description:
     ${data.description}
 
  ## Table of Contents:
       Description
       Installation Instructions
       Usage Information
       Contribution Guide
       Test Instructions
       Questions
       License
 
     
 ##  Installation Instructions:
     ${data.installInstructions}
     
 ##  Usage Information:
     ${data.usageInfo}
   
 ##  Contribution Guide:
     ${data.contribGuide}
     
 ##  Test Instructions:
     ${data.testInstruct}
 
 ##  Questions:
 
 
 
 ## Licenses
 
 ${data.licenseList}
   
 [${data.licenseList}](${renderLicenseLink(data.licenseList)})
 ${renderLicenseSection(data.licenseList)}
 `;
}

module.exports = generateMarkdown;