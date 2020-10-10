// Constants
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [{
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
    type: "list",
    name: "contents",
    message: "What are the contents of this README?",
    choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
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
    choices: ["Apache", "MIT", "Mozilla"]
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

];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
