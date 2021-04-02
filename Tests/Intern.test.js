const Intern = require('../Dev/Intern');

describe('Intern', () => {

    it('email address entered', () => {
        const employeeEmail = "email@email.com";
        const result = new employeeEmail();

        expect(result).toEqual("email@email.com");
    });

    it('github url entered', () => {
        const github = "github.com/intern";
        const result = new github();

        expect(result).toEqual("github.com/intern");
    });

    it('school name entered', () => {
        const school = "The OSU Bootcamp";
        const result = new school();

        expect(result).toEqual("The OSU Bootcamp");
    });
});