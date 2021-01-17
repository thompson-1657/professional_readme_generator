const fs = require("fs")
const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },
        {
            type: "input",
            message: "What is the description of your application?",
            name: "description",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },
        {
            type: "input",
            message: "How do you install your application?",
            name: "installation",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },
        {
            type: "input",
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            name: "usage",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },

        {
            type: "input",
            message: "List your collaborators, if any, with links to their GitHub profiles.",
            name: "credits",

        },
        {
            type: "input",
            message: "How can people contribute to your application?",
            name: "contribution",

        },
        {
            type: "list",
            message: "What license did you use?",
            name: "license",
            choices: ['MIT License', 'Apache License', 'BSD License', 'GNU License', 'GPL License', 'N/A'],
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitHub",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },

    ]).then(({
        title,
        description,
        installation,
        usage,
        credits,
        license,
        gitHub,
        email,
        contribution

    }) => {
        const template = `# ${title}
## Description
${description}
## Table of Contents
        
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contribution](#contribution)
* [Questions](#questions)
        
## Installation
${installation}
        
## Usage
${usage}
        
## Credits
${credits}
        
## License
${license}
        
# Questions
GitHub: ${gitHub}
Email: ${email}`;

        createNewFile(title, template);
    })

function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Your README has been generated.`);
    })
}
