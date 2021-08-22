const Team = require('../lib/Employee');

test('Creates Employee objects', () => {
    const employee = new Employee('David');
    expect(typeof(employee)).toBe('object');
});

test('Sets name using constructor arguments', () => {
    const name = 'David';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});