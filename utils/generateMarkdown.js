function renderLicenseBadge(data) {
  if(data.license === "No License") {
    return "";
  } else {
    return `![badge](https://img.shields.io/badge/License-${data.license}-green)`;
  }
}

function renderLicenseLink(data) {
  if(data.license === "No License") {
    return "No License";
  } else {
    
  }
}

function renderLicenseSection(data) {
  if(data.license === "No License") {
    return "No License"
  } else {
    return "License Found"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data);
  const licenseData = renderLicenseSection(data);
  return `
  # ${data.title}

  ${badge}

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
  ${licenseData}

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