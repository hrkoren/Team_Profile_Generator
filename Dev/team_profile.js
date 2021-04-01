const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function generateHTML(data) {

    const generateManager = manager => {
        return `<div class="cardBody" id="manager">
        <h2 class="manHeading">${manager.getName()}</h2>
        <p>${manager.employeeID}</p>
        <p>${manager.managerEmail}</p>
        <p>${manager.managerPhone}</p>
        </div>`
    }

    const html = []

    html.push(data.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)))



    // console.log(data);
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
    <div class="cardBody" id="manager">
    <h2 class="manHeading">${Manager.name}</h2>
    <p>${Manager.managerID}</p>
    <p>${Manager.managerEmail}</p>
    <p>${Manager.managerPhone}</p>
    </div>
    <div class="cardBody" id="engineer">
    <h2 class="engHeading">${Engineer.name}</h2>
    <p>${Engineer.employeeID}</p>
    <p>${Engineer.employeeEmail}</p>
    <p>${Engineer.github}</p>
    </div>
    <div class="cardBody" id="intern">
    <h2 class="intHeading">${Intern.name}</h2>
    <p>${Intern.employeeID}</p>
    <p>${Intern.employeeEmail}</p>
    <p>"${Intern.github}</p>
    <p>${Intern.school}</p>
    </div>
</body>
</html>`
}

module.exports = generateHTML;