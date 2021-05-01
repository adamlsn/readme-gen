// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Useage](#useage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Useage
  ${data.useage}

  ## License
  ${data.license}

  ## Contributions
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  Reach out to me at the links below with any questions, comments, or concerns:

  Github: [${data.github}](https://github.com/${data.github})</br>
  email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;