const Manager = require('../lib/manager')

describe("Manager", () => {
    it('Create Manager object', () => {
        const manager = new Manager('Jared', '6882', 'jaredacker1@gmail.com');

        expect(manager.name).toBe('Jared');
        expect(manager.id).toBe('6882');
        expect(manager.email).toBe('jaredacker1@gmail.com');
        expect(manager.type).toBe('Employee');
    });
    it('Output manager name', () =>{
        const manager = new Manager('Jared', 'jaredacker1@gmail.com');
        expect(manager.getName()).toBe('Jared');
    });
    it('Output manager ID', () =>{
        const manager = new Manager('Jared', 'jaredacker1@gmail.com');
        expect(manager.getId()).toBe('6882');
    });
    it('Output manager email', () =>{
        const manager = new Manager('Jared', 'jaredacker1@gmail.com');
        expect(manager.getEmail()).toBe('jaredacker1@gmail.com');
    });
    it('Output manager Role', () =>{
        const manager = new Manager('Jared', 'jaredacker1@gmail.com');
        expect(manager.getRole()).toBe('Manager');
    });
});