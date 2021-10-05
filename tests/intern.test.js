const Intern = require('../lib/intern')

describe("Intern", () => {
    it('Create Intern object', () => {
        const intern = new Intern('Jared', '6882', 'jaredacker1@gmail.com');

        expect(intern.name).toBe('Jared');
        expect(intern.id).toBe('6882');
        expect(intern.email).toBe('jaredacker1@gmail.com');
        expect(intern.type).toBe('Intern');
    });
    it('Output intern name', () =>{
        const intern = new Intern('Jared', 'jaredacker1@gmail.com');
        expect(intern.getName()).toBe('Jared');
    });
    it('Output intern ID', () =>{
        const intern = new Intern('Jared', 'jaredacker1@gmail.com');
        expect(intern.getId()).toBe('6882');
    });
    it('Output intern email', () =>{
        const intern = new Intern('Jared', 'jaredacker1@gmail.com');
        expect(intern.getEmail()).toBe('jaredacker1@gmail.com');
    });
    it('Output intern Role', () =>{
        const intern = new Intern('Jared', 'jaredacker1@gmail.com');
        expect(intern.getRole()).toBe('Intern');
    });
});
