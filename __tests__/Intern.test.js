const Intern = require('../lib/Intern');

test('Creates Intern object', () => {
    const intern = new Intern('name');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
});