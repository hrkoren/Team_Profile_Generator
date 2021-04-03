const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, employeeID, managerEmail, managerPhone) {
        super(name, employeeID);
        this.managerEmail = managerEmail;
        this.managerPhone = managerPhone;
    }

    getRole() { return 'Manager' };
    
    getEmail() { return this.managerEmail };

    getPhone() { return this.managerPhone };
}

module.exports = Manager;