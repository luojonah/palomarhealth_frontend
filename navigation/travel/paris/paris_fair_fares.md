---
layout: post 
title: Fair Fares
search_exclude: true
permalink: /travel/paris/paris_fair_fares
menu: nav/paris_hotbar.html
---

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #FDF5E6;
    color: white;
}

.header {
    background: black;
    color: #add8e6;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
}

.container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.section {
    flex: 1 1 calc(45% - 20px);
    background-color: black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    min-width: 300px;
    color: white;
    border: 2px solid #add8e6;
}

.section h2 {
    color: #add8e6;
    border-bottom: 2px solid #FFD700;
    padding-bottom: 10px;
}

.section label {
    display: block;
    margin-bottom: 10px;
    color: white;
}

.section input,
.section select,
.section button {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #add8e6;
    border-radius: 5px;
    color: white;
    background: black;
}

.section button {
    background-color: #FFD700;
    color: black;
    border: none;
    cursor: pointer;
}

.section button:hover {
    background-color: #C5B358;
}

.info-card {
    background-color: black;
    border: 2px solid #add8e6;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
    color: white;
    max-height: 300px;
    overflow-y: auto;
}

.info-card h3 {
    color: #add8e6;
}

.footer {
    text-align: center;
    padding: 10px;
    background-color: black;
    color: #add8e6;
    border-top: 5px solid #FFD700;
}

/* Table styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
}

table th, table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #add8e6;
}

table th {
    background-color: #add8e6;
    color: black;
}

table tr:nth-child(even) {
    background-color: #073461;
}

#flightResults {
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #add8e6;
}

</style>

<div class="header">
    <h1>Fair Fares</h1>
    <p>Your travel, your way – simplified!</p>
</div>

<div>
    <form id="flightForm" class="form">
        <input type="text" id="origin" name="origin" placeholder="Origin IATA" required>
        <input type="text" id="destination" name="destination" placeholder="Destination IATA" required>
        <button type="submit">Search Flights</button>
    </form>
    <div class="info-card">
        <div id="flightResults"></div>
        <div id="noteSection" style="display:none;">
            <input type="text" id="noteInput" placeholder="Type your note here">
            <button id="saveNoteButton">Save Note</button>
        </div>
    </div>
    <div id="notesTable"></div> <!-- Table will appear here -->
</div>

<div class="footer">
    <p>&copy; Fair Fares is Fairly Fantastic</p>
</div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    document.getElementById('flightForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        await fetchFlightData();
    });

    async function fetchFlightData() {
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const flightResults = document.getElementById('flightResults');
        const noteSection = document.getElementById('noteSection');
        const noteInput = document.getElementById('noteInput');
        const saveNoteButton = document.getElementById('saveNoteButton');

        flightResults.innerHTML = '<p>Loading...</p>';

        try {
            const response = await fetch(`${pythonURI}/api/flight-api?origin=${origin}&destination=${destination}`, {...fetchOptions});
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data && data.data && data.data.length > 0) {
                flightResults.innerHTML = data.data.map(flight =>
                    `<div class="flight-card">
                        <p>Flight ${flight.flight.iata}: ${flight.airline.name} - Departure: ${flight.departure.scheduled}, Arrival: ${flight.arrival.scheduled}</p>
                        <button class="note-button">Add Note</button>
                        <div class="note-input" style="display:none;">
                            <input type="text" class="note-text" placeholder="Type your note here">
                            <button class="save-note">Save Note</button>
                        </div>
                    </div>`
                ).join('');

                const noteButtons = document.querySelectorAll('.note-button');
                noteButtons.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        const noteInputSection = button.closest('.flight-card').querySelector('.note-input');
                        noteInputSection.style.display = 'block';
                    });
                });

                const saveNoteButtons = document.querySelectorAll('.save-note');
                saveNoteButtons.forEach((button, index) => {
                    button.addEventListener('click', async () => {
                        const noteText = button.closest('.flight-card').querySelector('.note-text').value;
                        if (noteText) {
                            await postFlightData(origin, destination, noteText);
                            // showNotesTable(); // Refresh the notes table after saving
                        }
                    });
                });
            } else {
                flightResults.innerHTML = `<p>No flights found for the provided details.</p>`;
            }
        } catch (error) {
            flightResults.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }

async function postFlightData(origin, destination, note) {
        const postData = {
            origin: origin,
            destination: destination,
            note: note
        };

        try {
            const response = await fetch(`${pythonURI}/api/flight`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Post response:', data);
            alert('Note saved successfully!');
            showNotesTable(); // Refresh the notes table after saving
        } catch (error) {
            console.error("Error posting data:", error);
        }
    }
// Define your helper functions first
async function updateFlightData(id, note, origin, destination) {
    const updateData = { note: note };
    const response = await fetch(`${pythonURI}/api/flight`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,  // Use the correct ID for the rating to update
            origin: origin,  // Pass the new rating value
            destination: destination,
            note: note

        })
    });

    if (!response.ok) {
        console.error('Failed to update note');
    } else {
        console.log('Note updated');
    }
}

async function deleteFlightData(id) {
    await fetch(`${pythonURI}/api/flight`, {
        ...fetchOptions,
        method: 'DELETE',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id }),  // Use rating_id from the backend response
        
    });
    /*
    const response = await fetch(`http://127.0.0.1:8101/api/flight/${id}`, {
        method: 'DELETE'
    });
    */
    /*
    if (!response.ok) {
        console.error('Failed to delete note');
    } else {
        console.log('Note deleted');
    }
    */
}

// Now define the showNotesTable function
async function showNotesTable() {
    const tableSection = document.getElementById('notesTable');
    tableSection.innerHTML = ''; // Clear any previous content

    try {
        // Fetch notes from the server
        const response = await fetch(`${pythonURI}/api/flight`, {...fetchOptions});

        if (!response.ok) {
            throw new Error(`Failed to fetch flight data with notes. Status: ${response.status}`);
        }

        const flights = await response.json();
        console.log(flights); // Log the returned data for debugging

        if (flights && flights.length > 0) {
            const table = document.createElement('table');
            table.innerHTML = `<tr><th>Origin</th><th>Destination</th><th>Note</th><th>Actions</th></tr>`;

            flights.forEach(flight => {
                table.appendChild(buildTableRow(flight));
            });

            tableSection.appendChild(table);
        } else {
            tableSection.innerHTML = '<p>No notes available.</p>';
        }
    } catch (error) {
        console.error('Error loading the notes table:', error);
        tableSection.innerHTML = '<p>Failed to load notes. Please try again later.</p>';
    }
}

// Helper function to build a table row
function buildTableRow(flight) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${sanitize(flight.origin)}</td>
        <td>${sanitize(flight.destination)}</td>
        <td>${sanitize(flight.note || '')}</td>
        <td>
            <button class="edit-note-button" data-id="${sanitize(flight.id)}">Edit Note</button>
            <button class="delete-note-button" data-id="${sanitize(flight.id)}">Delete</button>
        </td>
    `;

    // Attach event listeners
    row.querySelector('.edit-note-button').addEventListener('click', async () => {
        const noteId = flight.id;
        const newNote = prompt('Edit your note:', flight.notes || '');
        if (newNote !== null) { // Allow empty notes
            await updateFlightData(noteId, newNote,flight.origin, flight.destination);
            showNotesTable(); // Refresh the notes table
        }
    });

    row.querySelector('.delete-note-button').addEventListener('click', async () => {
        const noteId = flight.id;
        if (confirm(`Are you sure you want to delete the note for flight from ${flight.origin} to ${flight.destination}?`)) {
            await deleteFlightData(noteId);
            showNotesTable(); // Refresh the notes table
        }
    });

    return row;
}

// Basic sanitization function
function sanitize(input) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
}


</script>