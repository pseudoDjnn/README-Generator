// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no valid license") {
    return `
    [![${license}license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(
      license
    )})]`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License] ${license}\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
      ## License

      Copyright @ ${license}.  All Rights Reserved.

      Licensed under the ${license} license.
      `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## License
  ${renderLicenseSection(data.license)}

  ## Description
  * What is the purpose of this repository?:<br/>
  ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributors](#contributors)
    * [Tests](#tests)
    * [Questions](#questions)
  
  # Installation (Dependencies) 💻

    To install dependencies,  run:

    \`\`\`
    ${data.dependencies}
    \`\`\`

  ## Usage

    ${data.usage}

    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
