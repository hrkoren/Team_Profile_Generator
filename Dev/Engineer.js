const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (engName, employeeID, employeeEmail, github) {
        super(engName, employeeID, employeeEmail);
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