const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
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
getInfo()
    .then(info => {
        const man = new Manager(info.manName, info.manId, info.manEmail, info.manOffNum);
        generateMan(man)
    })
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
