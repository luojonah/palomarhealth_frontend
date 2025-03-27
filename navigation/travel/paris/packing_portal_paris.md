---
layout: post 
title: Packing Portal
search_exclude: true
permalink: /travel/paris/packing_portal_paris
menu: nav/paris_hotbar.html
---

<body>
    <div class="container">
        <!-- Main Content -->
        <div class="main">
            <h1>Packing Portal: Paris</h1>
            <div class="packing-items">
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-1" onclick="handleCheckboxClick(this, 'Comfortable Shoes')">
                    <label for="packing-item-1">Comfortable Shoes</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-2" onclick="handleCheckboxClick(this, 'Umbrella')">
                    <label for="packing-item-2">Umbrella</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-3" onclick="handleCheckboxClick(this, 'Power Bank')">
                    <label for="packing-item-3">Power Bank</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-4" onclick="handleCheckboxClick(this, 'Lip Balm')">
                    <label for="packing-item-4">Lip Balm</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-5" onclick="handleCheckboxClick(this, 'French Dictionary')">
                    <label for="packing-item-5">French Dictionary</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-6" onclick="handleCheckboxClick(this, 'France Guidebook')">
                    <label for="packing-item-6">France Guidebook</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-7" onclick="handleCheckboxClick(this, 'Smartphone Charger')">
                    <label for="packing-item-7">Smartphone Charger</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-8" onclick="handleCheckboxClick(this, 'Water Bottle')">
                    <label for="packing-item-8">Water Bottle</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-9" onclick="handleCheckboxClick(this, 'Comfortable Socks')">
                    <label for="packing-item-9">Comfortable Socks</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-10" onclick="handleCheckboxClick(this, 'Hat')">
                    <label for="packing-item-10">Hat</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-11" onclick="handleCheckboxClick(this, 'Sunglasses')">
                    <label for="packing-item-11">Sunglasses</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-12" onclick="handleCheckboxClick(this, 'Snacks')">
                    <label for="packing-item-12">Snacks</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-13" onclick="handleCheckboxClick(this, 'Backpack')">
                    <label for="packing-item-12">Backpack</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-14" onclick="handleCheckboxClick(this, 'Scarf')">
                    <label for="packing-item-12">Scarf</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item-15" onclick="handleCheckboxClick(this, 'Moisturizer')">
                    <label for="packing-item-12">Moisturizer</label><br>
                </div>
            </div>
        </div>
        <div class="button_container">
        <a href="{{ site.baseurl }}/travel/paris/packing_checklist_paris" id="packing_items_button" class="button">Personal Packing Checklist</a>
        </div>
    </div>
    <div id="weather-cards" class="weather-container">
    </div>  
</body>


<script type="module">

import {
    pythonURI,
    fetchOptions,
} from "{{ site.baseurl }}/assets/js/api/config.js";

// code for weather api

async function fetchWeatherData() {

    try {

        // fetch weather data for Paris using its latitude and longitude
        const response = await fetch(`${pythonURI}/api/weather?lat=48.8566&lon=2.3522`);


        // check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // convert the response to JSON
        const weatherData = await response.json();

        // displaying the weather info

        displayWeatherInfo(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

function displayWeatherInfo(weather) {
    const container = document.getElementById('weather-cards');

    // create a card to display weather info
    const card = document.createElement('div');
    card.className = 'weather-card';

    const location = document.createElement('h3');
    location.textContent = `Location: Paris`;
    card.appendChild(location);

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${weather.temp}°C (${1.8 * (weather.temp) + 32}°F)`;
    card.appendChild(temperature);

    const min_temp = document.createElement('p');
    min_temp.textContent = `Minimum Temperature: ${weather.min_temp}°C (${1.8 * (weather.min_temp) + 32}°F)`;
    card.appendChild(min_temp);

    const max_temp = document.createElement('p');
    max_temp.textContent = `Maximum Temperature: ${weather.max_temp}°C (${1.8 * (weather.max_temp) + 32}°F)`;
    card.appendChild(max_temp);

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${weather.humidity}%`;
    card.appendChild(humidity);

    const wind_speed = document.createElement('p');
    wind_speed.textContent = `Wind Speed: ${weather.wind_speed} km/h`;
    card.appendChild(wind_speed);

    const feels_like = document.createElement('p');
    feels_like.textContent = `Feels Like: ${weather.feels_like}°C (${1.8 * (weather.feels_like) + 32}°F)`;
    card.appendChild(feels_like);

    const suggestion = document.createElement('h3');

    if ((1.8 * (weather.temp) + 32) < 45) {
        suggestion.textContent = `Wow! It's ${1.8 * (weather.temp) + 32}°F. That's pretty cold! You should wear heavier clothes, such as a jacket, pants, hoodies, etc.`;
    } else if ((1.8 * (weather.temp) + 32) >= 45 && (1.8 * (weather.temp) + 32) < 60) {
        suggestion.textContent = `It's ${1.8 * (weather.temp) + 32}°F. It's not extremely cold, but your should consider wearing heavier clothing, such as pants, hoodies, and long sleeve shirts.`;
    } else if ((1.8 * (weather.temp) + 32) >= 60 && (1.8 * (weather.temp) + 32) < 80) {
        suggestion.textContent = `It's ${1.8 * (weather.temp) + 32}°F. It's getting warmer, so you can wear lighter clothing such as shorts and t-shirts.`;
    } else if ((1.8 * (weather.temp) + 32) >= 80) {
        suggestion.textContent = `Wow! It's ${1.8 * (weather.temp) + 32}°F. That's pretty hot! You should wear lighter clothing such as shorts and t-shirts.`;
    }

    card.appendChild(suggestion);
    

    // Add the card to the container
    container.appendChild(card);
}

// call the function to fetch and display weather data
fetchWeatherData();

</script>


<script type="module">

import {
    pythonURI,
    fetchOptions,
} from "{{ site.baseurl }}/assets/js/api/config.js";


async function postPackingChecklist(itemText) {
    // console.log("post test:", itemText);
    const postData = {
        item: itemText
    };
    
    try {
        const response = await fetch(`${pythonURI}/api/packing_checklists`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
        });


        if (!response.ok) {
            throw new Error('Failed to add item: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Item added:', data);
        return data;
    } catch (error) {
        console.error('Error adding item:', error);
        alert('Error adding item: ' + error.message);
    }
}

window.handleCheckboxClick = async function handleCheckboxClick(checkbox, itemText) {
    await postPackingChecklist(itemText);
};


</script>



<style>

.container {
    display: flex;
    flex-direction: column; 
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background-color: #121212; /* Dark background */
    color: #ffffff; /* White text */
}

.content-wrapper {
    display: flex;
    flex: 3 1 0;
    gap: 20px;
}

.main {
    background: #1e1e1e; /* Dark card background */
    padding: 20px;
    border: 1px solid #add8e6;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 162, 255, 0.2); /* Soft glow */
    box-sizing: border-box;
    width: 100%; 
    margin-bottom: 20px; 
}

.main h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #add8e6;
}

.packing-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 11px;
}

.packing-item {
    padding: 15px;
    background:rgb(0, 0, 0); /* Darker tile */
    /* border: 0.5px solid #add8e6; */
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 162, 255, 0.15);
}

#weather-container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 162, 255, 0.3);
    color: #ffffff;
    background-color: rgba(0, 162, 255, 0.15); /* Soft transparent background */
}

.weather-card {
    border: 1px solid #add8e6;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: #add8e6;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
}

.weather-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 162, 255, 0.5);
}

.weather-card h2 {
    font-size: 2em;
    margin-bottom: 10px;
    color: #00a2ff;
}

.weather-card p {
    font-size: 1.2em;
    margin: 5px 0;
    line-height: 1.6;
}

.weather-card strong {
    font-weight: bold;
    color: #00c8ff;
}

.button_container {
    width: 100%; 
    margin-top: 20px; 
}

#packing_items_button {
    display: block;
    width: 100%;
    padding: 15px;
    background-color:rgb(0, 0, 0); /* Primary blue */
    color: #add8e6 !important; /* Ensure text color is white */
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    border: 2px solid #add8e6;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 162, 255, 0.3);
    box-sizing: border-box;
    transition: background 0.3s ease, transform 0.2s ease;
}

#packing_items_button:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
    color: #add8e6 !important;
    border-color: #add8e6; /* Keep the border color the same on hover */
}


</style>