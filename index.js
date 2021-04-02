//Packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./Dev/Employee.js');
const engineer = require('./Dev/Engineer');
const intern = require('./Dev/Intern');
const Manager = require('./Dev/Manager');
const generateHTML = require('./Dev/team_profile.js');

//Array of prompts for user input
const profilePrompts = [];
const teamMembers = []

//function to start prompts with team manager
function managerPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of the team manager.',
                name: 'name',
                validate: (value) => { if (value) { return true } else { return 'Please enter the team manager.' } },
            },
            {
                type: 'input',
                message: 'Please enter the employee ID for the team manager.',
                name: 'employeeID',
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
            }]).then((answers) => {
                const { name, employeeID, managerEmail, managerPhone } = answers;
                const manager = new Manager(name, employeeID, managerEmail, managerPhone);
                console.log(manager)
                teamMembers.push(manager)
                employeeChoice();
            })
}
//function to prompt for employee type or to quit
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
                        return quit();
                    default:
                        break;
                }
                console.log(data);
            })
}
//function to prompt engineer questions when engineer is selected
function engineerChoice() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of the Engineer.',
                name: 'name',
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
            const { name, employeeID, employeeEmail, github } = info;
            const engineer = new Engineer(name, employeeID, employeeEmail, github) 
            teamMembers.push(engineer)
            employeeChoice();
        });
}
//function to prompt intern questions when intern is selected
function internChoice() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of the Intern.',
                name: 'name',
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
        ]).then(internInfo => {
            const { name, employeeID, employeeEmail, github, school } = internInfo;
            const engineer = new Engineer(name, employeeID, employeeEmail, github, school)
            teamMembers.push(intern)
            employeeChoice();
        });
}
//function to quit prompting and generate html file
function quit() {
    const employeeProfile = generateHTML(teamMembers);
    // console.log(teamMembers);

    fs.writeFile('index.html', employeeProfile, (error) => {
        if (error) {
            console.log(error)
        }
    });
}

managerPrompt();