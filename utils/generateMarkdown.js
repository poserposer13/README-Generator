// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)

  ## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits / Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)



## Installation 
${data.install}

## Usage
${data.usage}

## Credits / Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.github}
<br>
${data.email}

## License 
${data.license}
`;
}

module.exports = generateMarkdown;
