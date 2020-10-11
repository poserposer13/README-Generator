// Constants
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// Creating a function for the User Questions
function promptUser(){
// array of questions for user
return inquirer.prompt([
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
]);
}

// function to write README file
function writeToFile(fileName, data) {
  
writeFileAsync(fileName, data)
let fileName = "README.md";
let data = generateMarkdown.generateMarkdown(answers)
}

// function to initialize program
function init() {
writeToFile();
}

// function call to initialize program
init();
