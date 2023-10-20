const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
      validate: function (input) {
        if (input.length === 0) {
          return 'Project title cannot be empty.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);

  