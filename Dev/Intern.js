const Intern = require('./Employee');

class Intern extends Employee {
    constructor (internName, employeeID, employeeEmail, github, school) {
        super(internName, employeeID, employeeEmail);
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
