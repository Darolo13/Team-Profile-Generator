const Intern = require("../lib/Intern");

test("Set school using constructor", () => {
  const value = "MIT";
  const intern = new Intern("test", 13, "placeholder@test.com", value);
  expect(intern.school).toBe(value);
});

test("getRole() returns 'Intern'", () => {
  const value = "Intern";
  const intern = new Intern("test", 13, "placeholder@test.com", "MIT");
  expect(intern.getRole()).toBe(value);
});

test("Get school using getSchool()", () => {
  const value = "MIT";
  const intern = new Intern("test", 13, "placeholder@test.com", value);
  expect(intern.getSchool()).toBe(value);
});
