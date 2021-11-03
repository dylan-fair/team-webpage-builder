const Intern = require('../lib/Intern');
test('Checking in Employee got loaded correctly', () => {
    const intern = new Intern('Dave', '3', 'gmail');
    expect(intern.getName()).toEqual('Dave');
    expect(intern.getId()).toEqual('3');
    expect(intern.getEmail()).toEqual('gmail');
})
test('Testing internal intern functions', () => {
    const intern = new Intern('Dave', '3', 'gmail', 'uIowa');
    expect(intern.getSchool()).toEqual('uIowa');
    expect(intern.getRole()).toEqual('Intern');
})