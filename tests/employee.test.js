const Employee = require('../lib/employee')

describe("Employee", () => {
    it('Create Employee object', () => {
        const employee = new Employee('Jared', '6882', 'jaredacker1@gmail.com');

        expect(employee.name).toBe('Jared');
        expect(employee.id).toBe('6882');
        expect(employee.email).toBe('jaredacker1@gmail.com');
        expect(employee.role).toBe('Employee');
    });
    it('Output employee name', () =>{
        const employee = new Employee('Jared', '6882', 'jaredacker1@gmail.com', 'Employee');
        expect(employee.getName()).toBe('Jared');
    });
    it('Output employee ID', () =>{
        const employee = new Employee('Jared', '6882', 'jaredacker1@gmail.com', 'Employee');
        expect(employee.getId()).toBe('6882');
    });
    it('Output employee email', () =>{
        const employee = new Employee('Jared', '6882', 'jaredacker1@gmail.com', 'Employee');
        expect(employee.getEmail()).toBe('jaredacker1@gmail.com');
    });
    it('Output employee role', () =>{
        const employee = new Employee('Jared', '6882', 'jaredacker1@gmail.com', 'Employee');
        expect(employee.getRole()).toBe('Employee');
    });
});