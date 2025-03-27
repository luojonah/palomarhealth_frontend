---
layout: post
title: Lodging Listings - Reviews
search_exclude: true
permalink: /travel/paris/lodging_reviews_paris
menu: nav/paris_hotbar.html
---
<head>
  <link rel="stylesheet" href="../../assets/css/travel/lodging.css" />
</head>

<body>
    <main class="main-content" id="main-content">
        <div id="hotelCount"></div>
        <br>
    </main>
</body>

<script type="module">

import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

document.addEventListener("DOMContentLoaded", (event) => {
    fetchLikedHotels();
});

async function fetchLikedHotels() {
    try {
        const response = await fetch(`${pythonURI}/api/hotel`, {...fetchOptions});

        if (!response.ok) {
            throw new Error('Failed to fetch hotels: ' + response.statusText);
        }

        const data = await response.json();
        var hotelCount = data.length || 0;

        document.getElementById('hotelCount').innerHTML = `<h2>There are ${hotelCount} reviews of hotels!</h2>`;

        const body = document.getElementById('main-content');

        data.forEach(item => {

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${item.hotel}</h2>
                <p>${item.city}, ${item.country}</p>
            `;

            const starsContainer = document.createElement("div");
            starsContainer.className = "stars-container";
            let selectedRating = item.rating;


            for (let i = 1; i <= 5; i++) {
                const star = document.createElement("span");
                star.className = "star";
                star.textContent = "★";
                star.dataset.value = i;
                star.onclick = () => {
                    selectedRating = i;
                    updateStars(starsContainer, selectedRating);
                    putHotelData(item.id, i)
                };
                starsContainer.appendChild(star);
            }

            updateStars(starsContainer, selectedRating);

            card.appendChild(starsContainer);

            const userOpinion = document.createElement("div");
            userOpinion.innerHTML = `
                <br>
                <p>Rating added by <span class='user_id'>${item.user_id}</span></p>
                <p class='note'>"${item.note}"</p>
                <br>
            `;

            card.appendChild(userOpinion);

            if (item.is_admin || item.current_user == item.user_id) {
                const removeButton = document.createElement("button");
                removeButton.className = "remove-button";
                removeButton.textContent = "Remove";
                removeButton.onclick = () => {
                    deleteHotel(item.id);
                    hotelCount -= 1;
                    document.getElementById('hotelCount').innerHTML = `<h2>There are ${hotelCount} reviews of hotels!</h2>`;
                    card.remove();
                };
                card.appendChild(removeButton);
            }
            body.appendChild(card);

        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function handleKeyPress(event, id) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const newRating = event.target.textContent;
        putHotelData(id, newRating);
    }
}

function updateStars(container, rating) {
    const stars = container.querySelectorAll(".star");
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = "gold";
        } else {
            star.style.color = "gray";
        }
    });
}

async function putHotelData(id, newRating) {
    
    const putData = {
        id: id,
        rating: parseInt(newRating)
    };

    try {
        const response = await fetch(`${pythonURI}/api/hotel`, {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify(putData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Put response:', data);
    } catch (error) {
        console.error("Error putting data:", error);
    }
}

async function deleteHotel(id) {

    const deleteData = {
        id: id,
    };

    try {
        const response = await fetch(`${pythonURI}/api/hotel`, {
            ...fetchOptions,
            method: 'DELETE',
            body: JSON.stringify(deleteData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Delete response:', data);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}


</script>