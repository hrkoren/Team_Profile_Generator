const Manager = require('../Dev/Manager');
const Employee = require('../Dev/Employee');


describe('Manager', () => {

    it('email address entered', () => {
        const managerEmail = "email@email.com";
        const result = new managerEmail();

        expect(result).toEqual("email@email.com");
    });

    it('phone number entered', () => {
        const managerPhone = "412-555-1212";
        const result = new managerPhone();

        expect(result).toEqual("412-555-1212");
    });
});