const Manager = require('../lib/Manager');

test('Creates Manager object', () => {
    const manager = new Manager('name');

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
});