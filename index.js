const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
const html = require('./generateHtml');
let engArr = [];
let intArr = [];

function getInfo() {
    return inquirer
        .prompt([
            {
                type: 'text',
                message: 'Enter Mangers name!',
                name: 'manName',
            },
            {
                type: 'text',
                message: 'Enter manager ID',
                name: 'manId'
            },
            {
                type: 'text',
                message: 'Enter Manager Email',
                name: 'manEmail'
            },
            {
                type: 'text',
                message: 'Enter Managers office number',
                name: 'manOffNum'
            }
        ])
        .then(data => {
            return new Manager(data.manName, data.manId, data.manEmail, data.manOffNum)
        })
}
function getEmp() {
    return inquirer
        .prompt([
            {
                type: 'checkbox',
                name: 'type',
                message: 'Is this employee an intern or an Engineer',
                choices: ['Intern', 'Engineer']
            },
            {
                type: 'text',
                name: 'name',
                message: "What is the employee's name",
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the employee's id"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the employee's email?"
            }

        ])
        .then(data => {
            if(data.type.join() === 'Intern'){
                return inquirer
                    .prompt({
                        type: 'text',
                        name: 'school',
                        message: "What school do they attend"
                    })
                    .then(info => {
                        intArr.push(new Intern(data.name, data.id, data.email, info.school));
                    })
                    .then(() => {
                        return inquirer
                            .prompt({
                                type: 'confirm',
                                name: 'addNew',
                                message: 'Would you like to add another employee',
                                default: false
                            })
                            .then(data => {
                                if(data.addNew){
                                    return getEmp()
                                } else {
                                    return;
                                }
                            })
                    })
            } else {
                return inquirer
                    .prompt({
                        type: 'text',
                        name: 'github',
                        message: 'What is their github username?'
                    })
                    .then(info => {
                        engArr.push(new Engineer(data.name, data.id, data.email, info.github));
                    })
                    .then(() => {
                        return inquirer
                            .prompt({
                                type: 'confirm',
                                name: 'addNew',
                                message: 'Would you like to add another employee',
                                default: false
                            })
                            .then(data => {
                                if(data.addNew){
                                    return getEmp()
                                } else {
                                    return;
                                }
                            })
                    })
            }
        })
}
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};
getInfo()
    .then(data => {
        getEmp()
            .then(() => {
                writeFile(html(data, engArr, intArr));
            })
    })
