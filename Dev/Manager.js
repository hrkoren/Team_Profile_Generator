const Employee = require('./Employee');

class Manager extends Employee {
    constructor (teamManager, managerID) {
        super(teamManager, managerID, managerEmail, managerPhone);
        this.managerPhone = managerPhone;
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

module.exports = Manager;