function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="screen" href="Assets/css/style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="heading">
    <h1>Team Profiles<h1>
    </div>
    <div class="cards">
    <h2>${data.teamManager}</h2>
    <div class="cardBody">
    <p>${data.managerID}</p>
    <p>${data.managerEmail}</p>
    <p>${data.managerPhone}</p>
    </div>
    <div class="cardBody" id="engineer">
    <h2>${data.engName}</h2>
    <p>${data.employeeID}</p>
    <p>${data.employeeEmail}</p>
    <p>${data.github}</p>
    </div>
    <div class="cardBody" id="intern">
    <h2>${data.internName}</h2>
    <p>${data.employeeID}</p>
    <p>${data.employeeEmail}</p>
    <p>${data.school}</p>
    </div>
</body>
</html>`
}

module.exports = generateHTML;