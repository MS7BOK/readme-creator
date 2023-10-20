function generateLicenseBadge(license) {
    if (license === 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Apache') {
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'GPL') {
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else {
      return ''; // No badge for 'None' option
    }
  }
  
  function generateLicenseLink(license) {
    if (license === 'MIT') {
      return '[MIT License](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache') {
      return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)';
    } else if (license === 'GPL') {
      return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
      return 'No license specified';
    }
  }
  
  function generateMarkdown(answers) {
    const licenseBadge = generateLicenseBadge(answers.license);
    const licenseLink = generateLicenseLink(answers.license);
    
    return `
    # ${answers.projectTitle}
  
    ## Description
    ${answers.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${answers.installation}
  
    ## Usage
    ${answers.usage}
  
    ## License
    ${licenseBadge}
    ${licenseLink}
  
    ## Contributing
    ${answers.contributing}
  
    ## Tests
    ${answers.tests}
  
    ## Questions
    For any questions, please contact me:
    - GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
    - Email: ${answers.email}
    `;
  }
  
  module.exports = generateMarkdown;
  