// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type:"input",
    name:"title",
    message:"What is the title of your project?"
  },
  {
    type:"input",
    name:"description",
    message: "What is the description of your project?"
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
    type: "input",
    name: "credits",
    message: "List any credits or collaborators:"
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests? If so list"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose any appropriate licenses",
    choices: ["MIT","Apache","GNU"]

  },
  {
    type: "input",
    name: "github",
    message:"What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
    })
}

// Function call to initialize app
init();