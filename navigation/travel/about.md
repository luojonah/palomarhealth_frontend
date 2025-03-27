---
layout: post
title: About
permalink: /about/
menu: nav/home.html
search_exclude: true
show_reading_time: false
---

<div id="team-cards" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>

<script>
    async function fetchTeamInfo() {
        try {
            // Fetch data from multiple endpoints (e.g., /api/derek, /api/john, /api/sarah)
            const responses = await Promise.all([
                fetch('http://127.0.0.1:8101/api/people/derek'),
                fetch('http://127.0.0.1:8101/api/people/kiruthic'),
                fetch('http://127.0.0.1:8101/api/people/tarun'),
                fetch('http://127.0.0.1:8101/api/people/aadi'),
                fetch('http://127.0.0.1:8101/api/people/aaditya'),
                fetch('http://127.0.0.1:8101/api/people/arhaan'),
                fetch('http://127.0.0.1:8101/api/people/rohan')
            ]);
    
            // Convert all the responses to JSON
            const data = await Promise.all(responses.map(response => response.json()));
    
            // Display team info using the data returned by the backend
            data.forEach(member => displayTeamInfo(member)); // Display each member's info
        } catch (error) {
            console.error('Error fetching team info:', error);
        }
    }

function displayTeamInfo(member) {
    const container = document.getElementById('team-cards');
    
    // Create the team card with the data
    const card = document.createElement('div');
    card.className = 'team-card';

    const name = document.createElement('h3');
    name.textContent = member.name;
    card.appendChild(name);

    const age = document.createElement('p');
    age.textContent = `Age: ${member.age}`;
    card.appendChild(age);

    const classes = document.createElement('p');
    classes.textContent = `Classes: ${member.classes}`;
    card.appendChild(classes);

    const favoriteColor = document.createElement('p');
    favoriteColor.textContent = `Favorite Color: ${member.favorite.color}`;
    card.appendChild(favoriteColor);

    const favoriteFood = document.createElement('p');
    favoriteFood.textContent = `Favorite Food: ${member.favorite.food}`;
    card.appendChild(favoriteFood);

    // Add the card to the container
    container.appendChild(card);
}

fetchTeamInfo();
</script>

<style>
#team-cards {
    font-family: 'Arial', sans-serif;
    margin: 20px auto;
}

.team-card {
    background: linear-gradient(145deg, #1e1e2f, #252535);
    border-radius: 10px;
    color: #fff;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s;
}

.team-card:hover {
    transform: scale(1.05);
}

.team-card h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
    color: #00d4ff;
}

.team-card p {
    margin: 5px 0;
    font-size: 1em;
}

.team-card a {
    color: #00d4ff;
    text-decoration: none;
}

.team-card a:hover {
    text-decoration: underline;
}
</style>