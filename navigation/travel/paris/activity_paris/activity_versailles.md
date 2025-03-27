---
layout: post 
title: Palace of Versailles Ratings
permalink: /travel/Paris/activity/palace_versailles
menu: nav/paris_hotbar.html
---

<div id="rating-display">
    <h2>Average Rating: 0.0</h2>
</div>

<div id="rating-bar-container">
    <div id="rating-bar" class="rating-bar"></div>
    <span id="rating-bar-text" class="rating-bar-text">0/10</span>
</div>

<h2>Ratings Table</h2>
<table id="ratings-table" class="ratings-table">
    <!-- Table content will be dynamically added here -->
</table>

<button id="createNewRatingBtn" class="create-rating-btn">Create New Rating</button>

<style>
.ratings-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: black;
    color: white;
}

.ratings-table th,
.ratings-table td {
    border: 1px solid #add8e6;
    padding: 10px;
    text-align: center;
}

.ratings-table th {
    background-color: black;
    color: #add8e6;
    border-bottom: 2px solid #add8e6;
}

.ratings-table td {
    background-color: black;
    color: white;
}

.edit-rating-input {
    width: 50px;
    text-align: center;
    border: 1px solid #add8e6;
    border-radius: 5px;
    padding: 5px;
    background-color: black;
    color: white;
}

.action-btn {
    background-color: #FFD700;
    color: black;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.action-btn:hover {
    background-color: #C5B358;
}

.create-rating-btn {
    background-color: #FFD700;
    color: black;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
}

.create-rating-btn:hover {
    background-color: #C5B358;
}

#rating-bar-container {
    position: relative;
    width: 100%;
    background-color: black;
    border-radius: 25px;
    overflow: hidden;
    height: 30px;
    margin-top: 20px;
    border: 2px solid #add8e6;
}

.rating-bar {
    height: 100%;
    background-color: #add8e6;
    width: 0;
    transition: width 0.5s ease-in-out;
}

.rating-bar-text {
    position: absolute;
    width: 100%;
    text-align: center;
    line-height: 30px;
    color: black;
    font-weight: bold;
}

</style>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    const POST_ID = 4; // Static Post ID for Palace of Versailles

    // Fetch and display the overall rating for the Palace of Versailles
    async function fetchAndDisplayRating() {
        try {
            const response = await fetch(`${pythonURI}/api/rate?post_id=${POST_ID}`, fetchOptions);
            const data = await response.json();

            const totalRating = data.reduce((sum, rating) => sum + rating.rating, 0);
            const averageRating = (totalRating / data.length).toFixed(2);
            document.querySelector('#rating-display h2').textContent = `Average Rating for Palace of Versailles: ${averageRating}`;

            // Update the rating bar
            const ratingBar = document.getElementById('rating-bar');
            const ratingBarText = document.getElementById('rating-bar-text');
            const ratingPercentage = (averageRating / 10) * 100;
            ratingBar.style.width = `${ratingPercentage}%`;
            ratingBarText.textContent = `${averageRating}/10`;
        } catch (error) {
            console.error("Error fetching rating:", error);
            document.getElementById('rating-display').textContent = "Failed to load rating.";
        }
    }

    // Submit a new rating
    async function submitRate(rating) {
        try {
            await fetch(`${pythonURI}/api/rate`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ post_id: POST_ID, rating: rating }),
            });

            fetchAndDisplayRating(); // Refresh the rating display
            createRatingsTable(); // Refresh the table
        } catch (error) {
            console.error("Error creating new rating:", error);
        }
    }

    // Update a rating
    // Update the rating
    
    async function updateRate(index, newRating) {
        console.log(index)
        try {
            const response = await fetch(`${pythonURI}/api/rate`, {
                method: 'PUT',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rating_id: index.rating_id,  // Use the correct ID for the rating to update
                    rating: newRating  // Pass the new rating value
                }),
                credentials: 'include',  // This ensures that cookies and session info are included
            });

            if (!response.ok) {
                console.error('Failed to update rating:', response.statusText);
                /*
                console.error(index);
                console.log(index);
                */
                return;
            }

            // Refresh the rating display and table
            fetchAndDisplayRating();
            createRatingsTable();
        } catch (error) {
            console.error("Error updating rating:", error);
        }
    }

    // Delete a rating
    async function deleteRate(index) {
        try {
            // Sending DELETE request with post_id to delete a specific rating
            await fetch(`${pythonURI}/api/rate`, {
                ...fetchOptions,
                method: 'DELETE',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rating_id: index.rating_id }),  // Use rating_id from the backend response
            });

            // Refresh the rating display and table
            fetchAndDisplayRating();
            createRatingsTable();
        } catch (error) {
            console.error("Error deleting rating:", error);
        }
    }
    

    // Dynamically create the ratings table
    async function createRatingsTable() {
        const table = document.getElementById("ratings-table");
        table.innerHTML = ""; // Clear existing table content

        try {
            const response = await fetch(`${pythonURI}/api/rate?post_id=${POST_ID}`, fetchOptions);
            const data = await response.json();

            if (data.length === 0) {
                table.innerHTML = "<tr><td colspan='3'>No ratings available.</td></tr>";
                return;
            }

            // Create table header
            const header = document.createElement("thead");
            header.innerHTML = `
                <tr>
                    <th>Rating</th>
                    <th>User ID</th>
                    <th>Actions</th>
                </tr>`;
            table.appendChild(header);

            // Create table body
            const body = document.createElement("tbody");
            data.forEach((rating, index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${rating.rating}</td>
                    <td>${rating.username}</td>
                    <td>
                        <button class="action-btn" id="update-btn-${index}">Update</button>
                        <button class="action-btn" id="delete-btn-${index}">Delete</button>
                    </td>
                `;

                body.appendChild(row);
            });
            table.appendChild(body);

            // Bind event listeners dynamically after elements are added
            data.forEach((rating, index) => {
                const updateButton = document.getElementById(`update-btn-${index}`);
                const deleteButton = document.getElementById(`delete-btn-${index}`);

                // Ensure buttons exist before attaching event listeners
                if (updateButton) {
                    updateButton.addEventListener("click", () => handleUpdate(rating));
                }
                if (deleteButton) {
                    deleteButton.addEventListener("click", () => handleDelete(rating));
                }
            });

        } catch (error) {
            console.error("Error fetching ratings:", error);
            table.innerHTML = "<tr><td colspan='3'>Failed to load ratings.</td></tr>";
        }
    }

    // Prompt the user to update a rating
    async function handleUpdate(rating) {
        const newRating = prompt("Enter a new rating (1-10):");
        if (newRating >= 1 && newRating <= 10) {
            await updateRate(rating, newRating);
        } else {
            alert("Please enter a valid rating (1-10).");
        }
    }

    // Handle delete rating
    async function handleDelete(rating) {
        const confirmDelete = confirm("Are you sure you want to delete this rating?");
        if (confirmDelete) {
            await deleteRate(rating);
        }
    }

    // Handle new rating creation
    document.getElementById("createNewRatingBtn").addEventListener("click", async () => {
        const rating = prompt("Enter a new rating (1-10):");
        if (rating >= 1 && rating <= 10) {
            await submitRate(rating);
        } else {
            alert("Please enter a valid rating (1-10).");
        }
    });

    // Initialize the app
    fetchAndDisplayRating();
    createRatingsTable();
</script>
