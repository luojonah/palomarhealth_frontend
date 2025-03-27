---
layout: post 
title: Paris Activity Planner
permalink: /travel/Paris/activity
menu: nav/paris_hotbar.html
---

<div class="container">
    <a href="{{site.baseurl}}/travel/Paris/activity/eiffel_tower" class="card" id="eiffel">
        <img src="{{site.baseurl}}/images/eiffel_paris.jpg" alt="Eiffel Tower">
        <p>Eiffel Tower</p>
        <div class="rating-display">
            <h2>Average Rating: 0.0</h2>
        </div>
        <div class="rating-bar-container">
            <div class="rating-bar"></div>
            <span class="rating-bar-text">0/10</span>
        </div>
    </a>
    <a href="{{site.baseurl}}/travel/Paris/activity/louvre" class="card" id="louvre">
        <img src="{{site.baseurl}}/images/louvre_paris.jpeg" alt="Louvre Museum" height="100" width="500">
        <p>Louvre Museum</p>
        <div class="rating-display">
            <h2>Average Rating: 0.0</h2>
        </div>
        <div class="rating-bar-container">
            <div class="rating-bar"></div>
            <span class="rating-bar-text">0/10</span>
        </div>
    </a>
    <a href="{{site.baseurl}}/travel/Paris/activity/notre_dame" class="card" id="notre_dame">
        <img src="{{site.baseurl}}/images/notre_dame_paris.jpeg" alt="Notre-Dame Cathedral">
        <p>Notre-Dame Cathedral</p>
        <div class="rating-display">
            <h2>Average Rating: 0.0</h2>
        </div>
        <div class="rating-bar-container">
            <div class="rating-bar"></div>
            <span class="rating-bar-text">0/10</span>
        </div>
    </a>
    <a href="{{site.baseurl}}/travel/Paris/activity/palace_versailles" class="card" id="palace_versailles">
        <img src="{{site.baseurl}}/images/palace_versailles_paris.jpg" alt="Palace of Versailles">
        <p>Palace of Versailles</p>
        <div class="rating-display">
            <h2>Average Rating: 0.0</h2>
        </div>
        <div class="rating-bar-container">
            <div class="rating-bar"></div>
            <span class="rating-bar-text">0/10</span>
        </div>
    </a>
    <a href="{{site.baseurl}}/travel/Paris/activity/champs_elysees" class="card" id="champs_elysees">
        <img src="{{site.baseurl}}/images/champs-elysees.jpeg" alt="Champs-Élysées">
        <p>Champs-Élysées</p>
        <div class="rating-display">
            <h2>Average Rating: 0.0</h2>
        </div>
        <div class="rating-bar-container">
            <div class="rating-bar"></div>
            <span class="rating-bar-text">0/10</span>
        </div>
    </a>
</div>

<style>
h1 {
    text-align: center;
    font-size: 2rem;
    color: #007bff;
    margin: 20px 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}

.card {
    text-align: center;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card img {
    width: 100%;
    height: auto;
}
.card p {
    margin: 10px 0;
    font-size: 1.5rem; /* Larger text for the name of the attraction */
    color: #FFFFFF; /* White color for the name of the attraction */
    font-weight: bold;
}

.card a {
    text-decoration: none;
    color: #007bff;
}

.rating-bar-container {
    position: relative;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
}

.rating-bar {
    height: 100%;
    background-color: #800080; /* Purple color for the rating bar */
    width: 0;
    transition: width 0.5s;
}

.rating-bar-text {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #000000; /* Default dark color for the text */
    font-weight: bold;
}

.rating-display h2 {
    font-size: 1rem; /* Smaller text for "Average Rating" */
}
</style>

<script type="module">
import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

async function fetchAndDisplayRating(postId, elementId) {
    try {
        const response = await fetch(`${pythonURI}/api/rate?post_id=${postId}`, fetchOptions);
        const data = await response.json();

        const totalRating = data.reduce((sum, rating) => sum + rating.rating, 0);
        const averageRating = (totalRating / data.length).toFixed(2);
        document.querySelector(`#${elementId} .rating-display h2`).textContent = `Average Rating: ${averageRating}`;

        // Update the rating bar
        const ratingBar = document.querySelector(`#${elementId} .rating-bar`);
        const ratingBarText = document.querySelector(`#${elementId} .rating-bar-text`);
        const ratingPercentage = (averageRating / 10) * 100;
        ratingBar.style.width = `${ratingPercentage}%`;
        ratingBarText.textContent = `${averageRating}/10`;
    } catch (error) {
        console.error("Error fetching rating:", error);
        document.querySelector(`#${elementId} .rating-display`).textContent = "Failed to load rating.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchAndDisplayRating(1, 'eiffel');
    fetchAndDisplayRating(2, 'louvre');
    fetchAndDisplayRating(3, 'notre_dame');
    fetchAndDisplayRating(4, 'palace_versailles');
    fetchAndDisplayRating(5, 'champs_elysees');
});
</script>

<h1>Have Questions?</h1>
<div id="chat-window">
    <div id="messages"></div>
</div>
<form id="chat-form">
    <input type="text" id="chat-input" placeholder="Type your message..." required />
    <button type="submit">Send</button>
</form>

<style>
body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #FDF5E6;
}

h1 {
    text-align: center;
    color: #add8e6;
    margin-bottom: 20px;
}

#chat-window {
    border: 2px solid #add8e6;
    border-radius: 8px;
    padding: 10px;
    background: black;
    color: white;
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 20px;
}

#messages div {
    margin: 10px 0;
    padding: 8px;
    border-radius: 8px;
    background-color: #073461; /* Darker blue to match the theme */
    color: white;
    max-width: 70%;
    border: 1px solid #add8e6;
}

#chat-form {
    display: flex;
    gap: 10px;
}

#chat-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #add8e6;
    border-radius: 8px;
    background: black;
    color: white;
}

button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #FFD700;
    color: black;
    cursor: pointer;
}

button:hover {
    background-color: #C5B358;
}

</style>

<script type="module">
import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
document.getElementById('chat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        
        const msgDiv = document.createElement('div');
        msgDiv.textContent = message;
        document.getElementById('messages').appendChild(msgDiv);
        submitPost(message, null);
        
        const response = await sendToGeminiAPI(message);

        const responseDiv = document.createElement('div');
        responseDiv.textContent = response;

        console.log(response)
        document.getElementById('messages').appendChild(responseDiv);
        submitPost(null, response);

        input.value = '';
        document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
    }
});

async function sendToGeminiAPI(userMessage) {
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB2xY2tmePaUvsK61oGNUQUWA-tGrhfUZo";
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `You are a travel agent who is supposed to help to users with any questions they have about traveling. Your goal is to sound natural, relatable, and like an agent. You may refer to online budgets, travel times, locations, and anything else travel-related. If asked something complex, admit you might not know the full answer. ${userMessage}` }]
                }]
            })
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error communicating with Gemini API:', error);
        return "An error occurred while communicating with the AI.";
    }
}
async function fetchMessages() {
    try {
        const response = await fetch(`${pythonURI}/api/messages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch messages: ' + response.statusText);
        }

        const messages = await response.json();
        messages.forEach(message => {
            const msgDiv = document.createElement('div');
            msgDiv.textContent = message.comment; // Adjust this based on your backend response structure
            document.getElementById('messages').appendChild(msgDiv);
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

async function submitPost(userMessage, geminiResponse) {
    const title = "Title";
    const postData = {
        title: title,
        comment: userMessage || geminiResponse,
        channel_id: 2
    };
    try {
        const response = await fetch(`${pythonURI}/api/post`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error('Failed to add channel: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error adding channel:', error);
        alert('Error adding channel: ' + error.message);
    }
}

console.error()

window.onload = fetchMessages;
</script>
