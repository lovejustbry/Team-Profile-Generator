const inquirer = require('inquirer');

employee questions =

{
    type: 'list',
    message: ''
    choices: []
    name: ''
}

Manager questions =
{
    type: 'input',
    message: "What is the Manager's name?"
    name: 'managerName'
},
{
    type: 'input',
    message: "What is the Manager's ID number?"
    name: 'managerID'
},
{
    type: 'input',
    message: "What is the Manager's email?'"
    name: 'managerEmail'
},
{
    type: 'input',
    message: "What is the Manager's office phone number?"
    name: 'managerPhone'
}