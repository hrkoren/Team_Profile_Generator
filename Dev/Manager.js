const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, employeeID) {
        super(name, employeeID, managerEmail, managerPhone);
        this.managerEmail = this.managerEmail;
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