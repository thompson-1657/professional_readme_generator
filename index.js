const fs = require("fs")
const inquirer = require("inquirer")
const { pathToFileURL } = require("url")

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
            name: "contributing",

        },
        {
            type: "input",
            message: "What types of tests did you run on your application?",
            name: "tests",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
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
            message: "If you have a license what is the relative file path to your license?",
            name: "pathToLicense",
        },
        {
            type: "input",
            message: "Please include a badge link to your selected license.",
            name: "badge",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitHub",
            validate: (value) => { if (value) { return true } else { return `I need a value to continue` } },
        },
        {
            type: "input",
            message: "What is the URL to your GitHub profile?",
            name: "linkToGitHub",
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
        linkToGitHub,
        email,
        contributing,
        pathToLicense,
        tests,
        badge

    }) => {
        const template = `# ${title}
${badge}

## Description
---
${description}

## Table of Contents
---
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
        
## Installation
---
${installation}
        
## Usage
---
${usage}

## Tests
---
${tests}

## Contributing
---
${contributing}
        
## Credits
---
${credits}
        
## License
---
[${license}](${pathToLicense})
        
## Questions
---
If you have any questions regarding the functionality or use of this application feel free to contact me via the information below.

GitHub: [${gitHub}](${linkToGitHub})

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
