// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)]`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `
    \n* [Installation](#installation)\n
    \n* [Usage](#usage)\n
    \n* [Test](#test)\n
    \n* [Contributors](#contributors)\n
    \n* [Questions](#questions)\n
    \n* [License](#license)\n
    `;
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

  ## Description
  * What is the purpose of this repository?<br/>

  ${data.description}

  ## Table of Contents

    * ${renderLicenseLink(data.license)}
  
  # Installation (Dependencies)

    To install dependencies,  run:

    \`\`\`
    ${data.dependencies}
    \`\`\`

  ## Usage

    ${data.usage}

  ## Test

    To run this program, use the following command(s):

    \`\`\`
    ${data.test}
    \`\`\`

    ${renderLicenseSection(data.license)}
    
  ## Contributors

    ${data.contributors}

    [${data.username}](https://github.com/${data.username}/)

  ## Questions

    Wanting to understand more about this project repo?

    Contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
