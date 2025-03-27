---
layout: post 
title: Packing Portal - Personal Packing Checklist
search_exclude: true
permalink: /travel/paris/packing_checklist_paris
menu: nav/paris_hotbar.html
---


<div class="personal_checklist">
    <h3>Personal Packing List</h3>
    <hr>
    <ul id="checklist_area"></ul>
</div>

<script type="module">

import {
    pythonURI,
    fetchOptions,
} from "{{ site.baseurl }}/assets/js/api/config.js";

document.addEventListener("DOMContentLoaded", (event) => {
    getPackingChecklists();
});

function enableEditing(item, listItem, nameSpan, editButton) {
    // Ensure nameSpan is still in the DOM before replacing it
    if (!listItem.contains(nameSpan)) return;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = nameSpan.textContent;
    inputField.className = 'edit-input';

    // Replace nameSpan with inputField
    listItem.replaceChild(inputField, nameSpan);

    editButton.textContent = 'Save';
    editButton.onclick = async () => {
        const newName = inputField.value;

        await putPackingChecklist(item.id, newName);

        // Ensure inputField is still in the DOM before replacing it back
        if (!listItem.contains(inputField)) return;

        nameSpan.textContent = newName;
        listItem.replaceChild(nameSpan, inputField);

        editButton.textContent = 'Edit';
        editButton.onclick = () => enableEditing(item, listItem, nameSpan, editButton);
    };
}


async function getPackingChecklists() {
    try {
        const response = await fetch(`${pythonURI}/api/packing_checklists`, {
            ...fetchOptions,
            method: 'GET',

        });

        if (!response.ok) {
            throw new Error('Failed to fetch packing checklists: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Packing checklists get:', data);

        const checklistArea = document.getElementById('checklist_area');

        checklistArea.innerHTML = '';

        let currentUser = data.length > 0 ? data[0].current_user : null;
        let isAdmin = data.length > 0 ? data[0].is_admin : false;

        console.log("Current user:", currentUser);
        console.log("Is admin:", isAdmin);


        // Filter items based on user role
        const filteredData = isAdmin ? data : data.filter(item => item.user_id === currentUser);

        // Group items by user
        const groupedItems = {};
        filteredData.forEach(item => {
            if (!groupedItems[item.user_id]) {
                groupedItems[item.user_id] = {
                    user_name: item.user_name || `User ${item.user_id}`, // Ensure we display something
                    items: []
                };
            }
            groupedItems[item.user_id].items.push(item);
        });

        // Create sections for each user
        Object.values(groupedItems).forEach(userGroup => {
            // Create a section container
            const userSection = document.createElement('div');
            userSection.className = 'user-section';

            // Create a section header with the user's name
            const userHeader = document.createElement('h3');
            userHeader.textContent = `User: ${userGroup.user_name.replace(/^User\s+/i, '')}`;
            userHeader.className = 'user-section-header';

            userSection.appendChild(userHeader);

            // Create a list for the user's items
            const userList = document.createElement('ul');
            userList.className = 'user-checklist';

            userGroup.items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'checklist-item';

                const nameSpan = document.createElement('span');
                nameSpan.textContent = item.item;

                // Create a container for buttons
                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'button-container';

                const editButton = document.createElement('button');
                editButton.className = 'edit-button';
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => {
                    enableEditing(item, listItem, nameSpan, editButton);
                });

                const removeButton = document.createElement('button');
                removeButton.className = 'remove-button';
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    deletePackingChecklist(item.id);
                    listItem.remove();
                });

                // Append buttons to the button container
                buttonContainer.appendChild(editButton);
                buttonContainer.appendChild(removeButton);

                // Append everything to the checklist item
                listItem.appendChild(nameSpan);
                listItem.appendChild(buttonContainer);
                userList.appendChild(listItem);
            });


            userSection.appendChild(userList);
            checklistArea.appendChild(userSection);
        });

    } catch (error) {
        console.error('Error fetching packing checklists:', error);
        alert('Error fetching packing checklists: ' + error.message);
    }
};


async function deletePackingChecklist(id) {

    const deleteData = {
        id: id,
    }

    try {
        const response = await fetch(`${pythonURI}/api/packing_checklists`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deleteData)
        });

        if (!response.ok) {
            throw new Error('Failed to delete item: ' + response.statusText);
        }

        const data = await response.json();
    } catch (error) {
        console.error('Error deleting item:', error);
        alert('Error deleting item:' + error.message);
    }
}


async function putPackingChecklist(id, new_name) {
    
    const putData = {
        id: id,
        item: new_name
    }
    
    try {
        const response = await fetch(`${pythonURI}/api/packing_checklists`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(putData)
        });

        if(!response.ok) {
            throw new Error('Failed to update item: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Item updated:', data);
    } catch (error) {
        console.error('Error updating item:', error);
        alert('Error updating item: ' + error.message);
    }
}



</script>


<style>



.personal_checklist h3 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: #add8e6;
}

.personal_checklist li {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    color: black;
}

.personal_checklist hr {
    border: 2px solid #add8e6;
}

.checklist-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: rgb(0, 0, 0);
    color: #add8e6 !important;
}

.button-container {
    display: flex;
    gap: 10px; /* Ensures a 10px gap between Edit and Remove buttons */
}

/* Styling the buttons */
button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

/* Specific styling for the Edit button */
.edit-button {
    background-color: rgb(0, 0, 0) !important;
    color: #add8e6 !important;
    border: 1px solid #add8e6;
}

/* Specific styling for the Remove button */
.remove-button {
    background-color: rgb(0, 0, 0) !important;
    color: #add8e6 !important;
    border: 1px solid #add8e6;
}

/* Add hover effects for buttons */
button:hover {
    opacity: 0.9;
}

.edit-input {
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
}

.user-section {
    margin-top: 20px;
    padding-right: 10px;
    border: 2px solid #add8e6;
    border-radius: 10px;
    background-color:rgb(0, 0, 0);
}

.user-section:hover {
    transition: transform 0.7s ease, box-shadow 0.7s ease;
    transform: scale(1.05);
}

.user-section-header {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #add8e6 !important;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
}


</style>