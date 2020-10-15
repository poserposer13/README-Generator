// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/license-${data.license}-brightgreen.svg)

  ## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits / Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)



## Installation 
${data.installation}

## Usage
${data.usage}

## Credits / Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions:
<br>
Contact through GitHub: ${data.github}
<br>
Contact through email: ${data.email}

## License 
This project is covered under the ${data.license} license.
`;


}


  module.exports = generateMarkdown