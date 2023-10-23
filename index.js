// Import required modules
const inquirer = require('inquirer'); // Import the inquirer module for user input
const fs = require('fs'); // Import the fs module for file system operations
const generateMarkdown = require('./generateMarkdown'); // Import the custom module for generating markdown content

// Async function to prompt user for input
async function promptUser() {
  // Prompt user with a series of questions and validate user input
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
      validate: function (input) {
        // Validation function to ensure project title is not empty
        if (input.length === 0) {
          return 'Project title cannot be empty.';
        }
        return true;
      }
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

  // Generate README content based on user responses
  const readmeContent = generateMarkdown(answers);


  // Logic to write README to a file
  fs.writeFile('GENERATED_README.md', readmeContent, err => {
    if (err) {
      console.error('Error writing GENERATED_README.md:', err);
    } else {
      console.log('GENERATED_README.md has been successfully created!');
    }
  });
}


// Call the function to prompt questions when your script runs.
promptUser();
