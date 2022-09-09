// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username? (Required)",
    validate: (nameValidator) => {
      if (nameValidator) {
        return true;
      } else {
        console.log(
          "Please enter a valid username associated with your Github account!"
        );
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (emailvali) => {
      if (emailvali) {
        return true;
      } else {
        console.log("Please enter a valid email");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "Provide a title for your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project: (Required)",
    validate: (desVali) => {
      if (desVali) {
        return true;
      } else {
        console.log("You must provide a description!");
      }
    },
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please pick a license if any of the following are used:",
    choices: [
      "MIT",
      "Other",
      "GPLv2",
      "Apache",
      "GPLv3",
      "BSD 3-clause",
      "Unlicense",
      "BSD 2-clause",
      "LGPLv3",
      "AGPv3",
    ],
    validate: (choiceInput) => {
      if (choiceInput) {
        return true;
      } else {
        console.log("Please enter a valid license");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "dependencies",
    message: "List use of dependencies:",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "CLI prompt to test:",
    default: "npm t",
  },
  {
    type: "input",
    name: "usage",
    message: "How can a user benefit from this repo?",
  },
  {
    type: "input",
    name: "contributors",
    message: "List contributors of this repo:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("READEME Generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("./dist/README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
