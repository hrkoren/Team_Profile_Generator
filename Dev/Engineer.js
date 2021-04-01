const Employee = require('./Employee');

class Engineer extends Employee {
    constructor name, employeeID,) {
        super(name, employeeID, employeeEmail, github);
	this.employeeID = employeeID;
	this.employeeEmail = employeeEmail;
        this.github = github;
    }
    returnRole() {
        return 'Engineer';
    }
    returnGithub() {
        return this.github;
    }
}

module.exports = Engineer;