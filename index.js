// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    /* Pass your questions in here */
    /* Question object */
    {
        type: 'input',
        message: "What is the project title?",
        name: "title"
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'input',
        message: "Enter description",
        name: "description",
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'input',
        message: "Enter installation instructions",
        name: "install",
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'input',
        message: "Enter usage information",
        name: "usage",
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'input', 
        message: "Enter contribution guidelines",
        name: "contribution guidelines",
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'input', 
        message: "Enter test instructions",
        name: "testing",
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'list', // allows for multiple selections
        message: "What is your license",
        name: "license",
        choices: ["MIT", "GNU General Public License v3.0", "GNU General Public License v2.0",
         "ISC", "Academic Free License v3.0", "Eclipse Public License 2.0", "Open Software License 3.0"]
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'input', 
        message: "Enter github username",
        name: "username",
    },
    /* End of Question object */
    /* Question object */
    {
        type: 'input', 
        message: "Enter email",
        name: "email",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);

    // Initialize the output
    let output = "";
    // Generate the output by concatenating the answers

    // Create assumed repo string
    let repo = (answers.title).toLowerCase().replace(/\s+/g, '-');

    // Title
    output += "# " + answers.title + "\n";
    // Badge image
    output += "![license badge](https://img.shields.io/github/license/" + answers.username + "/" + repo + ")\n";
    // Description
    output += "## Description\n" + answers.description + "\n";
    // Table of Contents
    output += "## Table of Contents\n" +
    "- [Description](#description)\n" +
    "- [Installation](#installation)\n" +
    "- [Usage](#usage)\n" +
    "- [License](#license)\n" +
    "- [Questions](#questions)\n" +
    "- [Tests](#tests)\n";
    // Installation
    output += "## Installation\n" + answers.install + "\n";
    // Usage
    output += "## Usage\n" + answers.usage + "\n";
    // License
    output += "## License\n" + answers.license + "\n";
    // Questions
    output += "## Questions\n" + "[" + answers.username + "](https://github.com/" + answers.username + ")\n[" + answers.email + "](mailto:" + answers.email + ")\n";
    // Tests
    output += "## Tests\n" + answers.testing + "\n";

    // Write output to a markdown file
    fs.writeFile("README.md", output, function(err){
      if(err) console.log("failed");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
