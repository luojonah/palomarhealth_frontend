---
layout: post
title: Paris Activity Chat
permalink: /travel/Paris/activity/chat
menu: nav/paris_hotbar.html
---

<h1>Simple Chat Room</h1>
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
    color: white;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #add8e6;
}

#chat-window {
    border: 2px solid #add8e6;
    border-radius: 8px;
    padding: 10px;
    background: black;
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 20px;
}

#messages div {
    margin: 10px 0;
    padding: 8px;
    border-radius: 8px;
    background-color: #073461; /* Dark blue to match the post-item style */
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
    background-color: black;
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
