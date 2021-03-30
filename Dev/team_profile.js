function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./Dev/style.css">
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
    <h2 class="manHeading">${data.teamManager}</h2>
    <p>${data.managerID}</p>
    <p>${data.managerEmail}</p>
    <p>${data.managerPhone}</p>
    </div>
    <div class="cardBody" id="engineer">
    <h2 class="engHeading">${data.engName}</h2>
    <p>${data.employeeID}</p>
    <p>${data.employeeEmail}</p>
    <p>${data.github}</p>
    </div>
    <div class="cardBody" id="intern">
    <h2 class="intHeading">${data.internName}</h2>
    <p>${data.employeeID}</p>
    <p>${data.employeeEmail}</p>
    <p>${data.school}</p>
    </div>
</body>
</html>`
}

module.exports = generateHTML;