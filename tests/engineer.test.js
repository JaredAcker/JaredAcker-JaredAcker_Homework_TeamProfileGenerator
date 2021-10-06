const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    it('Create Engineer object', () => {
        const engineer = new Engineer('Jared', '6882', 'jaredacker1@gmail.com', 'Jared6882');

        expect(engineer.name).toBe('Jared');
        expect(engineer.id).toBe('6882');
        expect(engineer.email).toBe('jaredacker1@gmail.com');
        expect(engineer.gitHub).toBe('Jared6882');
        expect(engineer.form).toBe('Engineer');
    });
    it('Output engineer name', () =>{
        const engineer = new Engineer('Jared', '6882', 'jaredacker1@gmail.com', 'Jared6882', 'Engineer');
        expect(engineer.getName()).toBe('Jared');
    });
    it('Output engineer ID', () =>{
        const engineer = new Engineer('Jared', '6882', 'jaredacker1@gmail.com', 'Jared6882', 'Engineer');
        expect(engineer.getId()).toBe('6882');
    });
    it('Output engineer email', () =>{
        const engineer = new Engineer('Jared', '6882', 'jaredacker1@gmail.com', 'Jared6882', 'Engineer');
        expect(engineer.getEmail()).toBe('jaredacker1@gmail.com');
    });
    it('Output engineer Role', () =>{
        const engineer = new Engineer('Jared', '6882', 'jaredacker1@gmail.com', 'Jared6882', 'Engineer');
        expect(engineer.getForm()).toBe('Engineer');
    });
    it('Output engineer office number', () =>{
        const engineer = new Engineer('Jared', '6882', 'jaredacker1@gmail.com', 'Jared6882', 'Engineer');
        expect(engineer.getGithub()).toBe('Jared6882');
    });

});