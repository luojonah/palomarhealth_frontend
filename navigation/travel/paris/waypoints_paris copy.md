---
layout: post
title: Paris Waypoints
search_exclude: true
permalink: /travel/paris/wellness_waypoints
menu: nav/paris_hotbar.html
---

<script src="{{site.baseurl}}/assets/js/api/config.js"></script>

<div class="waypoints-container">
   <div class="container">
      <div class="form-container">
          <h2>Map Injury to Care Location</h2>
          <form id="selectionForm">
              <label for="injury">Select Injury</label>
              <select id="injury" name="injury" required>
                  <option value="">Select Injury</option>
              </select>
              <label for="location">Care Location</label>
              <input id="location" name="location" type="text" disabled />
              <button id="goButton">Go</button>
          </form>
      </div>


  <!-- Map Section -->
  <div id="map" style="height: 400px; margin-top: 20px; border-radius: 10px;"></div>
  </div>

  <!-- Footer Section -->
  <footer class="footer">
      <p>&copy; 2024 Wellness Waypoints. All Rights Reserved.</p>
  </footer>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <script>
      // JavaScript collection of injury and location data
      const data = [
          { _injury: "Fractures", _location: "Hospital" },
          { _injury: "Broken Bones", _location: "Hospital" },
          { _injury: "Severe Bleeding", _location: "Hospital" },
          { _injury: "Head Injuries", _location: "Hospital" },
          { _injury: "Concussions", _location: "Hospital" },
          { _injury: "Heart Attack", _location: "Hospital" },
          { _injury: "Stroke", _location: "Hospital" },
          { _injury: "Appendicitis", _location: "Hospital" },
          { _injury: "Dehydration", _location: "Hospital" },
          { _injury: "Heatstroke", _location: "Hospital" },
          { _injury: "Allergic Reaction", _location: "Hospital" },
          { _injury: "Burns", _location: "Hospital" },
          { _injury: "Respiratory Issues", _location: "Hospital" },
          { _injury: "Infections", _location: "Hospital" },
          { _injury: "Snake Bite", _location: "Hospital" },
          { _injury: "Animal Bite", _location: "Hospital" },
          { _injury: "Minor Cuts", _location: "Pharmacy" },
          { _injury: "Motion Sickness", _location: "Pharmacy" },
          { _injury: "Mild Allergies", _location: "Pharmacy" },
          { _injury: "Upset Stomach", _location: "Pharmacy" },
          { _injury: "Diarrhea", _location: "Pharmacy" },
          { _injury: "Pain", _location: "Pharmacy" },
          { _injury: "Headaches", _location: "Pharmacy" },
          { _injury: "Coughs", _location: "Pharmacy" },
          { _injury: "Colds", _location: "Pharmacy" },
          { _injury: "Insect Bites", _location: "Pharmacy" },
          { _injury: "Stings", _location: "Pharmacy" },
          { _injury: "Sunburn", _location: "Pharmacy" },
          { _injury: "Blisters", _location: "Pharmacy" },
          { _injury: "Skin Irritation", _location: "Pharmacy" },
          { _injury: "Menstrual Pain", _location: "Pharmacy" },
          { _injury: "Muscle Strains", _location: "Recovery" },
          { _injury: "Sprains", _location: "Recovery" },
          { _injury: "Back Pain", _location: "Recovery" },
          { _injury: "Neck Pain", _location: "Recovery" },
          { _injury: "Post-Surgery Recovery", _location: "Recovery" },
          { _injury: "Joint Injuries", _location: "Recovery" },
          { _injury: "Exhaustion", _location: "Recovery" },
          { _injury: "Chronic Fatigue", _location: "Recovery" },
          { _injury: "Mental Health", _location: "Recovery" },
          { _injury: "Substance Overuse", _location: "Recovery" },
          { _injury: "Addiction", _location: "Recovery" },
          { _injury: "Rehabilitation", _location: "Recovery" },
          { _injury: "Mobility Issues", _location: "Recovery" }
      ];

      // Populate the dropdown
      const injurySelect = document.getElementById("injury");
      data.forEach(item => {
          const option = document.createElement("option");
          option.value = item._injury;
          option.textContent = item._injury;
          injurySelect.appendChild(option);
      });

      // Handle dropdown change event
      injurySelect.addEventListener("change", function () {
          const selectedInjury = this.value;
          const selectedData = data.find(item => item._injury === selectedInjury);

          const locationInput = document.getElementById("location");
          if (selectedData) {
              locationInput.value = selectedData._location;
          } else {
              locationInput.value = ""; // Clear the location if no match
          }
      });
  </script>

  <style>
/* Styling for inline form */
.inline-form {
    display: flex;
    align-items: center; /* Vertically align fields */
    gap: 15px; /* Space between fields */
    background-color: #f7f7f7; /* Light background color */
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visibility */
}

/* Style for each form group */
.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align labels to the left */
    flex: 1; /* Ensure fields take up equal space */
}

/* Select and input fields */
select, input {
    width: 100%; /* Ensure consistent width */
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    background-color: #fff; /* White field background for contrast */
    color: #333; /* Dark text color */
}

/* Labels */
label {
    font-size: 12px;
    margin-bottom: 5px;
    color: #444; /* Slightly darker color for labels */
    font-weight: bold;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .inline-form {
        flex-direction: column; /* Stack fields vertically on small screens */
    }

    .form-group {
        width: 100%; /* Full width for each field */
    }
}

  </style>

<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    /**
     * Fetch groups for dropdown selection
     * User picks from dropdown
     */
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/waypoints`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ section_name: "Wellness Waypoint" }) // Adjust the section name as needed
            });
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.name; // Use group name for payload
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    /**
     * Fetch channels based on selected group
     * User picks from dropdown
     */
    async function fetchChannels(groupName) {
        try {
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ group_name: groupName })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            const channelSelect = document.getElementById('channel_id');
            channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
            channels.forEach(channel => {
                const option = document.createElement('option');
                option.value = channel.id;
                option.textContent = channel.name;
                channelSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }


    /**
     * Fetch posts based on selected channel
     * Handle response: Fetch and display posts
     */
    async function fetchData(channelId) {
        try {
            const response = await fetch(`${pythonURI}/api/posts/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ channel_id: channelId })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch posts: ' + response.statusText);
            }

            // Parse the JSON data
            const postData = await response.json();

            // Extract posts count
            const postCount = postData.length || 0;
            // Update the HTML elements with the data
            document.getElementById('count').innerHTML = `<h2>Care Location for Injury Saved ${postCount}</h2>`;

            // Get the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts

            // Iterate over the postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <p>Injury:${postItem.title}</p>
                    <p><strong>Care Location:</strong> ${postItem.channel_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.comment}</p>
                `;
                detailsDiv.appendChild(postElement);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fetch groups when the page loads
    fetchGroups();
</script>

</div>