const Intern = require('../Dev/Intern');

describe('Intern', () => {

    it('should return an email address', () => {
        const employeeEmail = "email@email.com";

        expect(employeeEmail).toEqual("email@email.com");
    });

    it('should return a github url', () => {
        const github = "github.com/intern";

        expect(github).toEqual("github.com/intern");
    });

    it('should return a school name', () => {
        const school = "The OSU Bootcamp";

        expect(school).toEqual("The OSU Bootcamp");
    });
});