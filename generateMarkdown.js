// a function that returns a license badge based on which license is passed in
// NOTE: if there is no license, an empty string is returned
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

// a function that returns the license link
// NOTE: if there is no license, an empty string is returned
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

// a function that returns the license section of README
// NOTE: if there is no license, an empty string is returned
function renderLicenseSection(license) {
  if (license === "None") {
    return 'License and badge unknown, no entry'
  } else if (license === "MIT") {
    return ` 
    Copyright (C) [2021] [Sean Russell]

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  } else if (license === "Apache") {
    return `
    Copyright (C) [2021] [Sean Russell]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else if (license === "GNU") {
    return ` 
    Copyright (C) [2021] [Sean Russell]

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  }
}

// a function to generate markdown for the README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.licenseList)}
## Description:
 ${data.description}
 
## Table of Contents:
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guide](#contribution-guide)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
* [License](#license)
 
     
##  Installation Instructions:
 ${data.installInstructions}
     
##  Usage Information:
 ${data.usageInfo}
   
##  Contribution Guide:
 ${data.contribGuide}
     
##  Test Instructions:
 ${data.testInstruct}
 
##  Questions:
GitHub Profile:

* [${data.gitHubId}](https://github.com/${data.gitHubId})


Please feel free to email me:

* [${data.contactEmail}](mailto:${data.contactEmail})


## License
 
 [${data.licenseList}](${renderLicenseLink(data.licenseList)})
 ${renderLicenseSection(data.licenseList)}
 `;
}

module.exports = generateMarkdown;