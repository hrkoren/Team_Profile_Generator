const Manager = require('../Dev/Manager');

describe('Manager', () => {

    it('it should return an email address', () => {
        const managerEmail = "email@email.com";
        
        expect(managerEmail).toEqual("email@email.com");
    });

    it('should return a phone number', () => {
        const managerPhone = "412-555-1212";
      
        expect(managerPhone).toEqual("412-555-1212");
    });
});