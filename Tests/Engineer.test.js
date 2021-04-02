const Engineer = require('../Dev/Engineer');

describe('Engineer', () => {

    it('email address entered', () => {
        const employeeEmail = "email@email.com";
        const result = new employeeEmail();

        expect(result).toEqual(employeeEmail);
    });

    it('github url entered', () => {
        const github = "github.com/engineer";
        const result = new github();

        expect(result).toEqual(github);
    });
});

