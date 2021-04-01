const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, employeeID, employeeEmail, github, school) {
        super(name, employeeID);
	    this.employeeEmail = employeeEmail;
        this.github = github;
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }

    getEmail() { return this.employeeEmail };
    getGithub() {
        return this.github;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
