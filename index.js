const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');
const { get } = require('https');
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
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'school',
                        message: "What school do they attend"
                    })
                    .then(info => {
                        intArr.push(new Intern(data.name, data.id, data.email, info.school));
                    })
                    .then(() => {
                        inquirer
                            .prompt({
                                type: 'confirm',
                                name: 'addNew',
                                message: 'Would you like to add another employee',
                                default: false
                            })
                            .then(data => {
                                if(data.addNew){
                                    getEmp()
                                } else {
                                    return;
                                }
                            })
                    })
            } else {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'github',
                        message: 'What is their github username?'
                    })
                    .then(info => {
                        engArr.push(new Engineer(data.name, data.id, data.email, info.github));
                    })
                    .then(() => {
                        inquirer
                            .prompt({
                                type: 'confirm',
                                name: 'addNew',
                                message: 'Would you like to add another employee',
                                default: false
                            })
                            .then(data => {
                                if(data.addNew){
                                    getEmp()
                                } else {
                                    return;
                                }
                            })
                    })
            }
        })
}
getEmp()
    .then(console.log(engArr))
//getInfo()
//    .then(info => {
//        const man = new Manager(info.manName, info.manId, info.manEmail, info.manOffNum);
//        generateMan(man)
//    })
function generateMan(man) {
    return `
<div class="team-member">
    <div class="head">
        h3>${man.getName()}</h3>
        <h4>${man.getRole()}</h4>
    </div>
    <div class="info">
        <p>ID: ${man.getId()}</p>
        <p>Email: <a href="${man.getEmail()}">${man.getEmail()}</a></p>
        <p>Office Number: ${man.getOfficeNum()}</p>
    </div>
</div>
    `
}
function generateHtml(man, eng, inter) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <section class="team">
        ${generateMan(man)}
    </section?>
    </body>
    </html>
    
    `
}
