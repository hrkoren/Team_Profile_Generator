class Employee {
    constructor (name, employeeID) {
        this.name = name;
        this.employeeID = employeeID;
    }
    returnName() {
        return this.name;
    }
    returnID() {
        return this.employeeID
    }
}

module.exports = Employee;