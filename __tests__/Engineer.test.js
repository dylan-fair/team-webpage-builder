const Engineer = require('../lib/Engineer');
test('Checking import of employee class', ()=> {
    const engineer = new Engineer('Dave', '2', 'hello@gmail');
    expect(engineer.getName()).toEqual('Dave');
    expect(engineer.getId()).toEqual('2');
    expect(engineer.getEmail()).toEqual('hello@gmail');
})
test('Checking Enginner internal functions', () => {
    const engineer = new Engineer('Dave', '2', 'hello', 'Github');
    expect(engineer.getGithub()).toEqual('Github');
    expect(engineer.getRole()).toEqual('Engineer');
})