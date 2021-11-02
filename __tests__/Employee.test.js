const Employee = require('../lib/Employee');
test("Checking function sof Employee", ()=> {
    const employee = new Employee('Dave', '1', 'dylanfair11@gmail.com');
    expect(employee.getName()).toEqual('Dave');
})