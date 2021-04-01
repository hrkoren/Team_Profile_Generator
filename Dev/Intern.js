const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, employeeID) {
        super(internName, employeeID, employeeEmail, github, school);
	this.employeeEmail = employeeEmail;
        this.github = github;
        this.school = school;
    }
    returnRole() {
        return 'Intern';
    }
    returnGithub() {
        return this.github;
    }
    returnSchool() {
        return this.school;
    }
}

module.exports = Intern;
