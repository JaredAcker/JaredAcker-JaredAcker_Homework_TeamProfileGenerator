
generateHTML = (myTeam) => {
    
    let teamCards = [];
    
    for (var i = 0; i<myTeam.length; i++){
        if (myTeam[i].type === 'Manager') {
            let managerCard = generateManagerCard(myTeam[i]);
            teamCards.push(managerCard);
        } else if (myTeam[i].type === 'Engineer') {
            let engineerCard = generateEngineerCard(myTeam[i]);
            teamCards.push(engineerCard);
        } else if (myTeam[i].type === 'Intern'){
            let internCard = generateInternCard(myTeam[i])
            teamCards.push(internCard);
        }
        
    };

    const allTeamCards = teamCards.join('');
    
    const indexHTML = generateFullHTML(allTeamCards);
    return indexHTML;
};


const generateManagerCard = (manager) => {
    return `
    <div class="col-3 m-3">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h2>${manager.name}</h2>
        <h3><i class="fas fa-coffee"></i> ${manager.type}</h3>
      </div>
      <div class="card-body"></div>
        <p class="border m-2">ID: ${manager.id}</p>
        <p class="border m-2"><i class="fas fa-envelope-square"></i><a href="${manager.email}"> ${manager.email}<br></a></p>
        <p class="border m-2">Office: ${manager.officeNumber}</p>
    </div>
</div>
`
};


const generateEngineerCard = (engineer) => {
    return `
    <div class="col-3 m-3">
    <div class="card">
      <div class="card-header bg-danger text-white">
        <h2>${engineer.name}</h2>
        <h3><i class="fas fa-cogs"></i> ${engineer.type}</h3>
      </div>
      <div class="card-body"></div>
        <p class="border m-2">ID: ${engineer.id}</p>
        <p class="border m-2"><i class="fas fa-envelope-square"></i><a href="mailto:${engineer.email}"> ${engineer.email}<br></a></p>
        <p class="border m-2"><i class="fab fa-github"></i><a href="https://github.com/${engineer.gitHub}" target="_blank"> GitHub.com: ${engineer.gitHub}</a></p>
    </div>
  </div>
`
};


const generateInternCard = (intern) => {
    return `
    <div class="col-3 m-3">
    <div class="card">
      <div class="card-header bg-warning text-white">
        <h2>${intern.name}</h2>
        <h3><i class="fas fa-graduation-cap"></i> ${intern.type}</h3>
      </div>
      <div class="card-body"></div>
        <p class="border m-2">ID: ${intern.id}</p>
        <p class="border m-2"><i class="fas fa-envelope-square"></i><a href="${intern.email}"> ${intern.email}<br></a></p>
        <p class="border m-2">School: ${intern.school}</p>
    </div>  
  </div>
`
};

module.exports = generateHTML;