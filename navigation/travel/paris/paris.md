---
layout: post 
title: Paris
search_exclude: true
permalink: /travel/Paris
menu: nav/paris_hotbar.html
---

<img src="{{site.baseurl}}/images/eiffel_paris.jpg" height="300" width="250">

Paris, the City of Light, captivates visitors with its blend of timeless beauty and modern charm. Walking along the Seine, I couldn't help but admire the stunning architecture, from the intricate Gothic details of Notre-Dame to the grand elegance of the Eiffel Tower. The cobbled streets are alive with the aroma of freshly baked croissants from local bakeries, and the cafes offer the perfect spot to relax while watching Parisians go about their day. Museums like the Louvre house masterpieces, while Montmartre offers a bohemian vibe with its art galleries and charming cafes. Paris feels like a city where history, art, and culture intertwine, making every corner an adventure waiting to be explored.

<style>
   /* Full-Page Background with Strong Glowing Effect */
body {
    background: linear-gradient(135deg, #1254f0, hsla(277, 87%, 54%, 0.632), #0ee070, #5a67d8);
    background-size: 400% 400%;
    animation: glowingBackground 20s ease infinite;
    font-family: Arial, sans-serif;
    color: #fff;
}

/* Glowing Animation for Background */
@keyframes glowingBackground {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
</style> 


<!-- Chat Room Container -->
<div class="chat-room-container">
<p class="chat-header">Share your feedback, discuss guesses, and chat with others in real time!</p>

<!-- Chat Box -->
<div id="chat-box" class="chat-box"></div>

<!-- Chat Input -->
<div class="chat-input">
    <input type="text" id="chat-message" placeholder="Type your message here...">
    <button id="send-message" class="send-button">Send</button>
    <button id="clear-chat" class="send-button">Clear Chat</button>
</div>
</div>

<!-- JavaScript -->
<script>
document.addEventListener("DOMContentLoaded", function() {
const chatBox = document.getElementById("chat-box");
const chatMessage = document.getElementById("chat-message");
const sendMessageButton = document.getElementById("send-message");
const clearChatButton = document.getElementById("clear-chat");

const username = "Guest"; // Default username

// Send message function
function sendMessage() {
    const message = chatMessage.value.trim();

    if (message !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = `${username}: ${message}`;
        chatBox.appendChild(messageElement);

        saveMessage(`${username}: ${message}`);
        chatBox.scrollTop = chatBox.scrollHeight;
        chatMessage.value = "";
    }
}

// Save messages to localStorage
function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(message);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

// Load messages on page load
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.forEach(msg => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = msg;
        chatBox.appendChild(messageElement);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Clear chat history
clearChatButton.addEventListener("click", function() {
    localStorage.removeItem("chatMessages");
    chatBox.innerHTML = "";
});

// Event listeners for message sending
sendMessageButton.addEventListener("click", sendMessage);
chatMessage.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

loadMessages();
});
</script>

<!-- CSS Styling -->
<style>
/* Full-Page Background with Strong Glowing Effect */
body {
background: linear-gradient(135deg, #1254f0, #8a2be2, #5a67d8);
background-size: 400% 400%;
animation: glowingBackground 20s ease infinite;
font-family: Arial, sans-serif;
color: #fff;
margin: 0;
padding: 0;
}

@keyframes glowingBackground {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}

/* General Chat Room Styling */
.chat-room-container {
max-width: 800px;
margin: 50px auto;
padding: 20px;
background: linear-gradient(135deg, #2c3e50, #4ca1af);
border-radius: 12px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
color: #ffffff;
font-family: 'Arial', sans-serif;
}

/* Chat Header */
.chat-header {
font-size: 1.8em;
text-align: center;
margin-bottom: 20px;
color: #4ca1af;
text-shadow: 0 0 5px rgba(76, 161, 175, 0.7);
}

/* Chat Box Styling */
.chat-box {
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 10px;
height: 350px;
overflow-y: scroll;
padding: 15px;
font-size: 1.2em;
background: rgba(43, 58, 72, 0.9);
box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);
color: #f0f8ff;
}

/* Message Styling */
.message {
margin-bottom: 15px;
padding: 10px 15px;
border-radius: 10px;
background: linear-gradient(135deg, #34495e, #2c3e50);
color: #f0f8ff;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3), 0 0 8px rgba(76, 161, 175, 0.3);
}

/* Input Box Styling */
.chat-input {
display: flex;
margin-top: 20px;
}

#chat-message {
flex: 1;
padding: 12px;
font-size: 1.2em;
border: 1px solid rgba(255, 255, 255, 0.5);
border-radius: 10px;
background-color: rgba(76, 161, 175, 0.1);
color: #ffffff;
box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
margin-right: 10px;
}

/* Send and Clear Buttons */
.send-button {
padding: 12px 20px;
font-size: 1.2em;
background: linear-gradient(135deg, #3498db, #2980b9);
color: #ffffff;
border: none;
border-radius: 10px;
cursor: pointer;
transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(52, 152, 219, 0.5);
}

.send-button:hover {
background: linear-gradient(135deg, #2980b9, #1f618d);
transform: scale(1.05);
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3), 0 0 15px rgba(52, 152, 219, 0.7);
}
</style>
