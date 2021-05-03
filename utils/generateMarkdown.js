function renderLicenseBadge(data) {
  if(data.license === "No License") {
    return "";
  } else {
    return `[![badge](https://img.shields.io/badge/License-${data.license}-green)](${renderLicenseLink(data)})`;
  }
}

function renderLicenseLink(data) {
  if(data.license === "No License") {
    return "";
  } else {
    let licenseData = "";
    if(data.license === "MIT") {licenseData = "MIT"}
    if(data.license === "Apache") {licenseData = "Apache-2.0"}
    if(data.license === "GNU") {licenseData = "gpl-license"}
    if(data.license === "IBM") {licenseData = "IPL-1.0"}
    return `https://opensource.org/licenses/${licenseData}`;
  }
}

function renderLicenseSection(data) {
  if(data.license === "No License") {
    return ""
  } else {
    return ` This project was licensed under the ${data.license} license.</br>To find out more about this license click this [LINK](${renderLicenseLink(data)})`;
  }
}

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
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## License
  
  ${licenseData}

  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions
  
  Reach out to me at the links below with any questions, comments, or concerns:

  Github: [${data.github}](https://github.com/${data.github})</br>
  email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;