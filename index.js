// Constants
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err){
    if (err) {
      return console.log(err);
    }
    console.log("README file create with your info!")
  })
  }
  

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
    .then(data => {
      // return data
writeToFile("README.md", generateMarkdown(data), "utf8")
    });

}


// function to initialize program
function init() {
  promptUser();
  
}

// function call to initialize program
init();
