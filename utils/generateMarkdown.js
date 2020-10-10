// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)

`;
}

module.exports = generateMarkdown;
