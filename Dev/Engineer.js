const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, employeeID, employeeEmail, github) {
        super(name, employeeID);
	this.employeeEmail = employeeEmail;
        this.github = github;
    }

    getRole() { return 'Engineer' };

    getEmail() { return this.employeeEmail };

    getGithub() { return this.github };
}

module.exports = Engineer;