---
layout: post
title: About Us
permalink: /about/
menu: nav/home.html
search_exclude: true
show_reading_time: false
---

<div id="cards" style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center;"></div>

<script>
    async function fetchTeamInfo() {
        try {
            const responses = await Promise.all([
                fetch('http://127.0.0.1:8101/api/people/derek'),
                fetch('http://127.0.0.1:8101/api/people/kiruthic'),
                fetch('http://127.0.0.1:8101/api/people/tarun'),
                fetch('http://127.0.0.1:8101/api/people/aadi'),
                fetch('http://127.0.0.1:8101/api/people/aaditya'),
                fetch('http://127.0.0.1:8101/api/people/arhaan'),
                fetch('http://127.0.0.1:8101/api/people/rohan')
            ]);
            const data = await Promise.all(responses.map(response => response.json()));
            data.forEach(member => displayTeamInfo(member));

        } catch (error) {
            console.error('Error fetching team info:', error);
        }
    }

function displayTeamInfo(member) {
    const container = document.getElementById('cards');
    
    const card = document.createElement('div');
    card.className = 'card';

    const name = document.createElement('h3');
    name.textContent = member.name;
    card.appendChild(name);

    const age = document.createElement('p');
    age.textContent = `Age: ${member.age}`;
    card.appendChild(age);

    const classesSection = document.createElement('div');
    const classesLabel = document.createElement('p');
    classesLabel.textContent = 'Classes:';
    classesSection.appendChild(classesLabel);
    
    const classList = document.createElement('ul');
    member.classes.forEach(classItem => {
        const li = document.createElement('li');
        li.textContent = classItem;
        classList.appendChild(li);
    });
    classesSection.appendChild(classList);
    card.appendChild(classesSection);

    const favoriteColor = document.createElement('p');
    favoriteColor.textContent = `Favorite Color: ${member.favorite.color}`;
    card.appendChild(favoriteColor);

    const favoriteFood = document.createElement('p');
    favoriteFood.textContent = `Favorite Food: ${member.favorite.food}`;
    card.appendChild(favoriteFood);

    container.appendChild(card);
}

fetchTeamInfo();
</script>

<style>
    #cards {
        font-family: 'Verdana', sans-serif;
        margin: 40px auto;
        padding: 20px;
    }

    .card {
        background: linear-gradient(145deg, #1c9b7b, #2c96ac);
        border-radius: 12px;
        color: #fff;
        padding: 25px;
        width: 350px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        text-align: center;
        transition: transform 0.2s ease-in-out;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card h3 {
        margin-bottom: 15px;
        font-size: 1.6em;
        color: #f0f8ff;
    }

    .card p {
        margin: 8px 0;
        font-size: 1.1em;
        color: #f3f3f3;
    }

    .card ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 1em;
    }
</style>