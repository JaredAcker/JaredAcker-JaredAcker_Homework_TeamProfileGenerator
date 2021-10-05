const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');

test('Retrieve the github account', () => {
    const testGithub = 'testUser';
    const testEngineer = new Engineer('test', 2, 'test@test.com', testGithub);
    expect(testEngineer.github).toBe(testGithub);
});

test('The role will read Engineer', () => {
    const testRole = 'Engineer';
    const testEngineer = new Engineer('test', 2, 'test@test.com', 'testUser');
    expect(testEngineer.getRole()).toBe(testRole);
});