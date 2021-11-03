const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officNum = officeNum;
    }
    getOfficeNum() {
        return this.officNum;
    }
    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;