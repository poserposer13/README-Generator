// Constants
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { resolve } = require("path");

const writeFileAsync = util.promisify(fs.writeFile);

// Creating a function for the User Questions
function promptUser() {
  // array of questions for user
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of this application?"
      },
      {
        type: "input",
        name: "description",
        message: "Give a description of the application"
      },
      {
        type: "input",
        name: "installation",
        message: "How does a user install this application?"
      },
      {
        type: "input",
        name: "usage",
        message: "How does a user use this application?"
      },
      {
        type: "list",
        name: "license",
        message: "What license does this application use?",
        choices: ["Apache", "MIT", "GNU GPLv3"]
      },
      {
        type: "input",
        name: "contributing",
        message: "How does someone contribute to this project?"
      },
      {
        type: "input",
        name: "tests",
        message: "What tests did you run on the application?"
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub?"
      },
      {
        type: "input",
        name: "email",
        message: "What email do you want people to contact you with questions?"
      },
    ])
    .then(res => {
console.log(res)
    });

}



// function to write README file
async function writeToFile(fileName, data) {

  // await writeFileAsync(fileName, data)

}

// function to initialize program
function init() {
  promptUser();
  // writeToFile("README.md", generateMarkdown(), "utf8");
}

// function call to initialize program
init();
