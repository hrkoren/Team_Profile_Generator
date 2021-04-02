const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function generateHTML(data) {

    const generateManager = manager => {
        return `<div class="cardBody" id="manager">
        <h2 class="manHeading">${manager.getRole()}</h2>
        <p><strong>${manager.getName()}</strong></p>
        <p>${manager.getID()}</p>
        <p><a href=${manager.getEmail()}>${manager.getEmail()}</a></p>
        <p>${manager.getPhone()}</p>
        </div>`
    }

    const generateEngineer = engineer => {
        return `<div class="cardBody" id="engineer">
        <h2 class="engHeading">${engineer.getRole()}</h2>
        <p><strong>${engineer.getName()}</strong></p>
        <p>${engineer.getID()}</p>
        <p><a href=${engineer.getEmail()}>${engineer.getEmail()}</a></p>
        <p><a href=${engineer.getGithub()}>${engineer.getGithub()}</a></p>
        </div>`
    }

    const generateIntern = intern => {
        return `<div class="cardBody" id="intern">
        <h2 class="intHeading">${intern.getRole()}</h2>
        <p><strong>${intern.getName()}</strong></p>
        <p>${intern.getID()}</p>
        <p><a href=${intern.getEmail()}>${intern.getEmail()}</a></p>
        <p><a href=${intern.getGithub()}>${intern.getGithub()}</a></p>
        <p>${intern.getSchool()}</p>
        </div>`
    }

    const html = []

    //push data for each employee into html
    html.push(data.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)))
    html.push(data.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)))
    html.push(data.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)))


    // html format
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <title>Team Profile Generator</title>
    <style>
    .container-md {
        background-color: rgb(19, 52, 241);
        color: #000000;
        text-align: center;
        height: 100px;
        justify-content: center;
        padding-top: 10px;
    }
    .cards {
        display: inline-flex;
        margin-left: 520px;
    }
    .cardBody {
        border: 1px solid rgb(19, 52, 241);
        padding: 4px;
        margin: 15px 15px 5px 15px;
        align-content: center;
    }
    h2 {
        padding: 2px;
        margin-top: 0;
        background-color: rgb(19, 52, 241);
        text-align: center;
    }
    .manHeading {
        background-color: rgb(218, 85, 32);
        color: rgb(19, 52, 241);
    }
    .engHeading {
        background-color: rgb(6, 146, 29);
        color: rgb(19, 52, 241);
    }
    .intHeading {
        background-color: goldenrod;
        color: rgb(19, 52, 241);
    }
    #manager, #engineer, #intern {
        padding: 5px;
    }
    </style>
</head>
<body>
    <div class="container-md">
    <h1>Team Profiles<h1>
    </div>
    <div class="cards">
    ${html.join("")}
</body>
</html>`
}

module.exports = generateHTML;