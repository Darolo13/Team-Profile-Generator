const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number using constructor", () => {
  const value = 13;
  const manager = new Manager("test", 13, "placeholder@test.com", value);
  expect(manager.officeNumber).toBe(value);
});

test("getRole() returns 'Manager'", () => {
  const value = "Manager";
  const manager = new Manager("test", 13, "placeholder@test.com", 13);
  expect(manager.getRole()).toBe(value);
});

test("Get office number using getOffice()", () => {
  const value = 13;
  const manager = new Manager("test", 13, "placeholder@test.com", value);
  expect(manager.getOfficeNumber()).toBe(value);
});
