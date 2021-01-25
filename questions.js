const inquirer = require('inquirer');

const employeeQuestions = {
    type: 'list',
    message: "What is the employee's role?",
    choices: ['Manager','Engineer','Intern'],
    name: 'employeeChoice',
}

const managerQuestions = [
{
    type: 'input',
    message: "What is the Manager's name?",
    name: 'managerName',
},
{
    type: 'input',
    message: "What is the Manager's ID number?",
    name: 'managerID',
},
{
    type: 'input',
    message: "What is the Manager's email?",
    name: 'managerEmail',
},
{
    type: 'input',
    message: "What is the Manager's office phone number?",
    name: 'managerPhone',
}
];

const engineerQuestions = [

{
    type: 'input',
    message: "What is the Engineer's name?",
    name: 'engineerName',
},
{
    type: 'input',
    message: "What is the Engineer's ID number?",
    name: 'engineerID',
},
{
    type: 'input',
    message: "What is the Engineer's email?",
    name: 'engineerEmail',
},
{
    type: 'input',
    message: "What is the Engineer's github username?",
    name: 'engineerGithub',
}
];
const internQuestions = [

{
    type: 'input',
    message: "What is the Intern's name?",
    name: 'internName',
},
{
    type: 'input',
    message: "What is the Intern's ID number?",
    name: 'internID',
},
{
    type: 'input',
    message: "What is the Intern's email?",
    name: 'internEmail',
},
{
    type: 'input',
    message: "What is the name of the Intern's University?",
    name: 'internSchool',
}
];

const addTeamMembers = [
    {
    type: 'confirm',
    message: 'Would you like to add more team members?',
    name: 'addTeamMembers',
    },
    {
        type: 'list',
        message: 'What type of team member would like to add?',
        choices: ['Engineer','Intern'],
        name: 'addTeamMembers',
    },
]

module.exports = {
    employeeQuestions, 
    engineerQuestions, 
    managerQuestions, 
    internQuestions, 
    addTeamMembers
}