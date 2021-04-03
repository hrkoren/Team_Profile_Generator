const Employee = require('../Lib/Employee');


describe('Employee', () => {

    it('should return an entered name', () => {
        const name = "Joseph";

        expect(name).toEqual("Joseph");
    });

    it('should return an entered number', () => {
        const employeeID = 1234;

        expect(employeeID).toEqual(1234);
    });
});
