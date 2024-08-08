document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const cost = document.getElementById('project-cost').value;
    const expectedInvestment = document.getElementById('expected-investment').value;
    const personalInvestment = document.getElementById('personal-investment').value;

    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="project-details">
            <p class="cost">Coût du projet : ${cost}</p>
            <p class="investment">Investissement attendu : ${expectedInvestment}</p>
            <p class="personal-investment">Investissement personnel : ${personalInvestment}</p>
        </div>
    `;

    document.getElementById('project-container').appendChild(projectCard);

    document.getElementById('project-form').reset();
});
