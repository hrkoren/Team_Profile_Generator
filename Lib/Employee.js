class Employee {
    constructor (name, employeeID) {
        this.name = name;
        this.employeeID = employeeID;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.employeeID
    }
}

module.exports = Employee;