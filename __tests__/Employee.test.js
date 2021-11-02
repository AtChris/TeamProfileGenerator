const Employee = require('../lib/Employee');

test("Properly sets a name", () => {
    const name = "Chris";
    const Employee = new Employee(name);
    expect(employee.name).toBe(name);
})