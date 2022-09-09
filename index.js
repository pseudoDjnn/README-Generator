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