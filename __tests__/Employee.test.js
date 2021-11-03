const Employee = require('../lib/Employee');
test("Checking functions of Employee", ( )=> {
    const employee = new Employee('Dave', '1', 'dylanfair11@gmail.com');
    expect(employee.getName()).toEqual('Dave');
    expect(employee.getId()).toEqual('1');
    expect(employee.getEmail()).toEqual('dylanfair11@gmail.com');
})
test("checking role", () => {
    const employee = new Employee;
    expect(employee.getRole()).toEqual('Employee');
})