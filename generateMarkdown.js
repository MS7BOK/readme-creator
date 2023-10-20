function generateMarkdown(answers) {
    // Logic to format answers into README content
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
    This project is licensed under the ${answers.license} license.
   
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
  