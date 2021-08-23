const Engineer = require("../lib/Engineer");

test("Set GitHub username using constructor", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("test", 13, "placeholder@test.com", value);
  expect(engineer.github).toBe(value);
});

test("getRole() returns 'Engineer'", () => {
  const value = "Engineer";
  const engineer = new Engineer("test", 13, "placeholder@test.com", "GitHubUser");
  expect(engineer.getRole()).toBe(value);
});

test("Can get GitHub username via getGithub()", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("test", 13, "placeholder@test.com", value);
  expect(engineer.getGithub()).toBe(value);
});