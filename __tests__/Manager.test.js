const Manager = require('../lib/Manager');
test('testing employee class in manager', () => {
    const manager = new Manager('Dave', '3', 'gmail');
    expect(manager.getName()).toEqual('Dave');
    expect(manager.getId()).toEqual('3');
    expect(manager.getEmail()).toEqual('gmail');
})
test('testing manager internal function', () => {
    const manager = new Manager('Dave', '3', 'gmail', '100');
    expect(manager.getOfficeNum()).toEqual('100');
    expect(manager.getRole()).toEqual('Manager');
})