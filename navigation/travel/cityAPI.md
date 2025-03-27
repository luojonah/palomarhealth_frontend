---
layout: post
title: Search for a City
permalink: /city-searcher/
menu: nav/home.html
search_exclude: true
show_reading_time: false
---

<style>
    .card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px;
        max-width: 300px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        background-color: #6837e6;
    }
    .card h3 {
        margin: 0 0 10px;
    }
    .card p {
        margin: 5px 0;
    }
    .cityInput, .fetchButton {
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        margin-right: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>
<body>
    <input type="text" class="cityInput" id="cityInput" placeholder="Enter city name">
    <button class="fetchButton" id="fetchButton">Search</button>
    <br>
    <div class="card" id="cityCard">
        <h3>...</h3>
        <p>Latitude: ...</p>
        <p>Longitude: ...</p>
        <p>Country: ...</p>
        <p>Population: ...</p>
        <p>...</p>
    </div>
</body>
<script>
    const fetchButton = document.getElementById('fetchButton');
    const cityInput = document.getElementById('cityInput');
    const cityCard = document.getElementById('cityCard');
    fetchButton.addEventListener('click', async () => {
        const cityName = cityInput.value.trim();
        if (!cityName) {
            cityCard.innerHTML = `<p>Please enter a city name.</p>`;
            return;
        }
        const apiUrl = `https://api.api-ninjas.com/v1/city?name=${cityName}`;
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'X-Api-Key': 'OEAbfiBNj06NoYKG5zYsiA==EvGPDov4VVDC5GEd'
                }
            });
            if (response.ok) {
                const data = await response.json();
                if (data.length > 0) {
                    const cityInfo = data[0];
                    cityCard.innerHTML = `
                        <h3>${cityInfo.name}</h3>
                        <p>Latitude: ${cityInfo.latitude}</p>
                        <p>Longitude: ${cityInfo.longitude}</p>
                        <p>Country: ${cityInfo.country}</p>
                        <p>Population: ${cityInfo.population.toLocaleString()}</p>
                        <p>${cityInfo.is_capital ? 'This city is a capital!' : 'This city is not a capital.'}</p>
                    `;
                } else {
                    cityCard.innerHTML = `<p>Unable to find city!</p>`;
                }
            } else {
                cityCard.innerHTML = `<p>Error fetching data: ${response.status}</p>`;
            }
        } catch (error) {
            cityCard.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
</script>
