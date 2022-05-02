const inquirer = require("inquirer");
const filessystem = require("fs");
const { renderTemplate, renderLicenseSection, renderLicenseLink, renderLicenseBadge } = require('./functions')

inquirer.prompt(
    [
        {
            type: "input",
            message: "whats the project title",
            name: "title",
        },
        {
            type: 'input',
            message: 'What is your GitHub account name?',
            name: 'github'
        },
        {
            type: 'list',
            message: 'Which license would you like to add?',
            name: 'license',
            choices: ['MIT', 'BDSA', 'GNU']
        }
    ]
).then((answers) => {

    let template = renderTemplate(answers);

    filessystem.writeFileSync('README.md', template)

})
