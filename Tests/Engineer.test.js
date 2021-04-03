const Engineer = require('../Lib/Engineer');

describe('Engineer', () => {

    it('should return an email address', () => {
        const employeeEmail = "email@email.com";

        expect(employeeEmail).toEqual("email@email.com");
    });

    it('should return a github url', () => {
        const github = "github.com/engineer";

        expect(github).toEqual("github.com/engineer");
    });
});

