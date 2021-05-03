const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type:"input",
    name:"title",
    message:"What is the title of your project?"
  },
  {
    type:"input",
    name:"description",
    message: "Provide a description of your project:"
  },
  {
    type:"input",
    name:"installation",
    message:"Are there any installation steps for this project?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of this project?"
  },
  {
    type: "list",
    name: "license",
    message: "Is there a license you'd like to include?",
    choices: ["MIT","Apache","GNU", "IBM",, "No License"]

  },
  {
    type: "input",
    name: "contributing",
    message: "Name any credits or collaborators:"
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests for this project?"
  },
  {
    type: "input",
    name: "github",
    message:"Please include your GitHub username:"
  },
  {
    type: "input",
    name: "email",
    message: "And your email:"
  }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
      if(error) {
        console.log(`There was an error! Error code: ${error}`)
        throw(error);
      };
      console.log(`
      Success! Your README.md for ${data.title} was created.
      Check the main folder to see the final result.
      `)
    });
};

function init() {
    inquirer.prompt(questions)
    .then(answers => {
      writeToFile("README.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();