//Packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');
const { endianness } = require('os');
const employee = require('./Dev/Employee.js');
const engineer = require('./Dev/Engineer');
const intern = require('./Dev/Intern');
const manager = require('./Dev/Manager');
const generateHTML = require('./Dev/team_profile.js');

//Array of prompts for user input
const profilePrompts = [];
function managerPrompt() {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the name of the team manager.',
            name: 'teamManager',
            validate: (value) => { if (value) { return true } else { return 'Please enter the team manager.' } },
        },
        {
            type: 'input',
            message: 'Please enter the employee ID for the team manager.',
            name: 'managerID',
            validate: (value) => { if (value) { return true } else { return 'Please enter an employee ID.' } },
        },
        {
            type: 'input',
            message: 'Please enter the email address for the team manager.',
            name: 'managerEmail',
            validate: (value) => { if (value) { return true } else { return 'Please enter the email address for the team manager.' } },
        },
        {
            type: 'input',
            message: 'Please enter the phone number for the team manager.',
            name: 'managerPhone',
            validate: (value) => { if (value) { return true } else { return 'Please enter the phone number for the team manager.' } },
        }]).then(() => {
            employeeChoice(); 
        })
    }


    function employeeChoice() {
        inquirer
        .prompt([  
        {
            type: 'list',
            message: 'What type of employee do you need to add?',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'Finish Building My Team'],
            validate: (value) => { if (value) { return true } else { return 'Please select an option.' } },
        }]).then(data => {
            switch (data.employeeType) {
                case 'Engineer':
                    return engineerChoice();
                case 'Intern':
                    return internChoice();
                case 'Finish Building My Team':
                    return quit;
                default:
                    break;
            }
            console.log(data);
        })
    }

function engineerChoice() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of the Engineer.',
                name: 'engName',
                validate: (value) => { if (value) { return true } else { return 'Please enter the name for the new team member.' } },
            },
            {
                type: 'input',
                message: 'Please enter the employee ID.',
                name: 'employeeID',
                validate: (value) => { if (value) { return true } else { return 'Please enter an employee ID.' } },
            },
            {
                type: 'input',
                message: 'Please enter the email address for the team member.',
                name: 'employeeEmail',
                validate: (value) => { if (value) { return true } else { return 'Please enter the email address for the team member.' } },
            },
            {
                type: 'input',
                message: 'Please enter the GitHub username for the team member.',
                name: 'github',
                validate: (value) => { if (value) { return true } else { return 'Please enter the GitHub username for the team member.' } },
            },
        ]).then(info => {
            employeeChoice();
            console.log(info);
        });
}

function internChoice() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of the Intern.',
                name: 'internName',
                validate: (value) => { if (value) { return true } else { return 'Please enter the name for the new team member.' } },
            },
            {
                type: 'input',
                message: 'Please enter the employee ID.',
                name: 'employeeID',
                validate: (value) => { if (value) { return true } else { return 'Please enter an employee ID.' } },
            },
            {
                type: 'input',
                message: 'Please enter the email address for the team member.',
                name: 'employeeEmail',
                validate: (value) => { if (value) { return true } else { return 'Please enter the email address for the team member.' } },
            },
            {
                type: 'input',
                message: 'Please enter the GitHub username for the team member.',
                name: 'github',
                validate: (value) => { if (value) { return true } else { return 'Please enter the GitHub username for the team member.' } },
            },
            {
                type: 'input',
                message: 'Please enter the school name for the Intern.',
                name: 'school',
                validate: (value) => { if (value) { return true } else { return 'Please enter the school for the team member.' } },
            },
        ]).then(info => {
            employeeChoice();
            console.log(info);
        });
    }
            // fs.writeFile('index.html', employeeProfile, (error) => {
            //     if(error) {
            //         console.log(error)
            //     }
            // });


   function quit() {
        const employeeProfile = generateHTML(data);
        console.log(data);

        fs.writeFileSync('index.html', employeeProfile, (error) => {
            if(error) {
                console.log(error)
            }
        });
    }

    managerPrompt();