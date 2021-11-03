const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
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
getInfo();
