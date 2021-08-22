const Employee = require('../lib/Employee');

test('Creates Employee objects', () => {
    const employee = new Employee('David');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});