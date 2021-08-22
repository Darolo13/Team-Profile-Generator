const Engineer = require('../lib/Engineer');

test('Creates Engineer object', () => {
    const engineer = new Engineer('name');
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
});