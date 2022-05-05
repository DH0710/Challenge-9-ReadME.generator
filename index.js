// require modules 
const filessystem = require('fs'); 
const inquirer = require('inquirer'); 


const generatePage = require('./utils/generateInfo.js');
const { renderTemplate, renderLicenseSection, renderLicenseLink, renderLicenseBadge } = require('./utils/generateInfo.js')

const questions = () => {
    
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    }
]);
};


const writeFile = data => {
    filessystem.writeFile('README.md', data, err => {
        
            console.log("Your README has been successfully created!")
        });
};

// function call to initialize program
questions()
.then(answers => {
    return generatePage(answers);
})

.then(data => {
    return writeFile(data);
})

