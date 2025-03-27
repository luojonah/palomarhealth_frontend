---
layout: post
title: Lodging Listings
search_exclude: true
permalink: /travel/paris/lodging_listings_paris
menu: nav/paris_hotbar.html
---

<head>
  <link rel="stylesheet" href="../../assets/css/travel/lodging.css" />
</head>

<body id="body">
  <div class="container">
    <main class="main-content" id="main-content">
      <header>
        <h1>Lodging Listings</h1>
        <hr />
        <div class="search-bar">
          <input
            type="text"
            id="destination"
            placeholder="Search for a hotel..."
          />
          <input type="text" id="place" placeholder="Search for a city..." />
          <button id="goButton">Go</button>
        </div>
        <a href="{{ site.baseurl }}/travel/paris/lodging_reviews_paris">Rated Hotels</a>
      </header>
    </main>
  </div>
</body>


<script type="module">
import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

document.addEventListener("DOMContentLoaded", (event) => {
  const goButton = document.getElementById("goButton");
  goButton.addEventListener("click", FindHotels);
});

async function FindHotels() {
  var destination = document
    .getElementById("destination")
    .value.trim()
    .replace(/\s+/g, "+");
  var place = document
    .getElementById("place")
    .value.trim()
    .replace(/\s+/g, "+");
  const url = `https://nominatim.openstreetmap.org/search?q=${destination},${place}&format=json&addressdetails=`;
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "MyHotelApp/1.0 (contact@example.com)",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    const body = document.getElementById("main-content");
    data.forEach((index) => {

      const card = document.createElement("div");
      card.className = "card";

      const hotelTitle = index['display_name'].split(', ')[0]
      const cityTitle = index['address']['city']
      const countryTitle = index['address']['country']

      const hotelElement = document.createElement("h2");
      hotelElement.textContent = hotelTitle;
      card.appendChild(hotelElement);
      
      const locationElement = document.createElement("p");
      locationElement.textContent = `${cityTitle}, ${countryTitle}`;
      card.append(locationElement);

      const starsContainer = document.createElement("div");
      starsContainer.className = "stars-container";
      let selectedRating = 5;

      for (let i = 1; i <= 5; i++) {
          const star = document.createElement("span");
          star.className = "star";
          star.textContent = "★";
          star.dataset.value = i;
          star.onclick = () => {
              selectedRating = i;
              updateStars(starsContainer, selectedRating);
          };
          starsContainer.appendChild(star);
      }

      updateStars(starsContainer, selectedRating);

      card.appendChild(starsContainer);
  
      const saveButton = document.createElement("button");
      saveButton.className = "save-button";
      saveButton.textContent = "Add review";
      saveButton.onclick = () => {
        postHotelData(hotelTitle, cityTitle, countryTitle, selectedRating);
        saveButton.textContent = "Review added!";
      };
      card.appendChild(saveButton);

      body.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
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

async function postHotelData(hotelTitle, cityTitle, countryTitle, rating) {

  const note = prompt("Add a note about this hotel:");

  const postData = {
    hotel: hotelTitle,
    city: cityTitle,
    country: countryTitle,
    rating: rating,
    note: note
  };

  try {
    const response = await fetch(`${pythonURI}/api/hotel`, {
      ...fetchOptions,
      method: 'POST',
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Post response:', data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

</script>
