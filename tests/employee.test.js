const Employee = require('../lib/Employee')

describe("Employee", () => {
    it('Create Employee object', () => {
        const employee = new Employee('Jared', '6882', 'jaredacker1@gmail.com');

        expect(employee.name).toBe('Jared');
        expect(employee.id).toBe('6882');
        expect(employee.email).toBe('jaredacker1@gmail.com');
        expect(employee.type).toBe('Employee');
    });
    it('Output employee name', () =>{
        const employee = new Employee('Jared', 'jaredacker1@gmail.com');
        expect(employee.getName()).toBe('Jared');
    });
    it('Output employee ID', () =>{
        const employee = new Employee('Jared', 'jaredacker1@gmail.com');
        expect(employee.getId()).toBe('6882');
    });
    it('Output employee email', () =>{
        const employee = new Employee('Jared', 'jaredacker1@gmail.com');
        expect(employee.getEmail()).toBe('jaredacker1@gmail.com');
    });
    it('Output employee Role', () =>{
        const employee = new Employee('Jared', 'jaredacker1@gmail.com');
        expect(employee.getRole()).toBe('Employee');
    });
});