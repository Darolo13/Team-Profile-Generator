const Employee = require("../lib/Employee");

test("Creates Employee object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Set name using constructor", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set id using constructor", () => {
  const value = 13;
  const employee = new Employee("test", value);
  expect(employee.id).toBe(value);
});

test("Set email using constructor", () => {
  const value = "placeholder@test.com";
  const employee = new Employee("test", 13, value);
  expect(employee.email).toBe(value);
});

test("Get name using getName()", () => {
  const value = "David";
  const employee = new Employee(value);
  expect(employee.getName()).toBe(value);
});

test("Get id using getId()", () => {
  const value = 13;
  const employee = new Employee("test", value);
  expect(employee.getId()).toBe(value);
});

test("Get email using getEmail()", () => {
  const value = "placeholder@test.com";
  const employee = new Employee("test", 13, value);
  expect(employee.getEmail()).toBe(value);
});

test("getRole() returns 'Employee'", () => {
  const value = "Employee";
  const employee = new Employee("David", 13, "placeholder@test.com");
  expect(employee.getRole()).toBe(value);
});
