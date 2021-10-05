const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    it('Create Engineer object', () => {
        const engineer = new Engineer('Jared', '6882', 'jaredacker1@gmail.com');

        expect(engineer.name).toBe('Jared');
        expect(engineer.id).toBe('6882');
        expect(engineer.email).toBe('jaredacker1@gmail.com');
        expect(engineer.type).toBe('Engineer');
    });
    it('Output engineer name', () =>{
        const engineer = new Engineer('Jared', 'jaredacker1@gmail.com');
        expect(engineer.getName()).toBe('Jared');
    });
    it('Output engineer ID', () =>{
        const engineer = new Engineer('Jared', 'jaredacker1@gmail.com');
        expect(engineer.getId()).toBe('6882');
    });
    it('Output engineer email', () =>{
        const engineer = new Engineer('Jared', 'jaredacker1@gmail.com');
        expect(engineer.getEmail()).toBe('jaredacker1@gmail.com');
    });
    it('Output engineer Role', () =>{
        const engineer = new Engineer('Jared', 'jaredacker1@gmail.com');
        expect(engineer.getRole()).toBe('Engineer');
    });
});