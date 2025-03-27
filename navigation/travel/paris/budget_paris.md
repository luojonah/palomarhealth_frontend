---
layout: post
title: Paris Budget
search_exclude: true
permalink: /travel/Paris/budget
menu: nav/paris_hotbar.html
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/travel/budget.css"> 
<div class="header">
    <h1>Trip Budget Planner</h1>
    <p>Plan your budget plan for Paris!</p>
</div>
<div class="form-container">
    <h2>Set Your Trip Budget</h2>
    <form id="budgetForm">
        <label for="budget">Enter your total budget (USD):</label>
        <input type="number" id="budget" name="budget" required placeholder="Enter amount" step="0.01">
        <button type="submit">Set Budget</button>
    </form>
    <div id="budgetStatus"></div> 
</div>
<div class="container">
    <div class="form-container">
        <h2>Manage Your Budget Entries</h2>
        <form id="entryForm">
            <label for="category">Category:</label>
            <select id="category" name="category" required>
                <option value="">Select a category</option>
                <option value="Activities">Activities</option>
                <option value="Hotels">Hotels</option>
                <option value="Transportation">Transportation</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
            </select>
            <label for="expense">Expense (e.g., Museum visit):</label>
            <input type="text" id="expense" name="expense" required placeholder="Describe your expense">
            <label for="entryAmount">Amount (USD):</label>
            <input type="number" id="entryAmount" name="entryAmount" required placeholder="Enter amount" step="0.01">
            <button type="submit">Add Entry</button>
        </form>
    </div>
</div>
<div class="container">
    <div class="budget-summary" id="budgetSummary">
        <h3>Your Budget Summary</h3>
        <table id="budgeting-table"></table>
    </div>
    <div id="remaining-budget-container">
        <p>Remaining Budget: <span id="remaining-budget">$0</span></p>
    </div>
</div>
<div class="container">
    <h1>Currency Converter</h1>
    <table>
        <thead>
            <tr>
                <th>Symbol</th><th>Name</th><th>Symbol</th><th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>CNY</td><td>Chinese Yuan</td><td>GBP</td><td>British Pound</td>
            </tr>
            <tr>
                <td>CHF</td><td>Swiss Franc</td><td>NZD</td><td>New Zealand Dollar</td>
            </tr>
            <tr>
                <td>AUD</td><td>Australian Dollar</td><td>KRW</td><td>South Korean Won</td>
            </tr>
            <tr>
                <td>PLN</td><td>Polish Zloty</td><td>DKK</td><td>Danish Krone</td>
            </tr>
            <tr>
                <td>TRY</td><td>Turkish Lira</td><td>HKD</td><td>Hong Kong Dollar</td>
            </tr>
        </tbody>
    </table>
    <div class="form-container">
        <label for="have">From (e.g., GBP):</label>
        <input type="text" id="have" placeholder="Currency code" required>
        <label for="want">To (e.g., AUD):</label>
        <input type="text" id="want" placeholder="Currency code" required>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" placeholder="Enter amount" required>
        <button id="convertButton">Convert</button>
    </div>
    <div id="conversionResult"></div>
</div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    document.getElementById('convertButton').addEventListener('click', function() {
        const have = document.getElementById('have').value.trim();
        const want = document.getElementById('want').value.trim();
        const amount = document.getElementById('amount').value.trim();
        const resultElement = document.getElementById('conversionResult');
        // Validate input fields
        if (!have || !want || !amount) {
            resultElement.textContent = 'Please fill out all fields.';
            return;
        }
        // Make a request to the backend API (Flask)
        fetch(`${pythonURI}/api/convertcurrency?have=${have}&want=${want}&amount=${amount}`, {
            ...fetchOptions,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.new_amount) {
                resultElement.textContent = `${amount} ${have} = ${result.new_amount} ${want}`;
            } else {
                resultElement.textContent = `Error: Unable to convert currency.`;
            }
        })
        .catch(error => {
            resultElement.textContent = `Error: ${error.message}`;
        });
    });
</script>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    let totalBudget = 0;
    let USER_ID = null;

    async function getCurrentUserId() {
        try {
            const response = await fetch(`${pythonURI}/api/id`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch user ID");

            const userData = await response.json();
            USER_ID = userData.id; 
            createBudgetingTable(); // Fetch entries after getting user ID
        } catch (error) {
            console.error("Error fetching user ID:", error);
        }
    }

    getCurrentUserId();

    async function fetchAndDisplayBudgeting() {
        try {
            const response = await fetch(`${pythonURI}/api/budgeting?user_id=${USER_ID}`, fetchOptions);
            const data = await response.json();
            const displayElement = document.getElementById('budgeting-display');

            displayElement.innerHTML = data.length === 0 
                ? "No budgeting entries available."
                : data.map(entry => `<br>Expense: ${entry.expense}, Cost: ${entry.cost}, Category: ${entry.category}`).join('');

            updateRemainingBudget();
        } catch (error) {
            console.error("Error fetching budgeting entries:", error);
            document.getElementById('budgeting-display').textContent = "Failed to load budgeting entries.";
        }
    }

    async function updateRemainingBudget() {
        try {
            const response = await fetch(`${pythonURI}/api/budgeting?user_id=${USER_ID}`, fetchOptions);
            const data = await response.json();
            const totalCost = data.reduce((sum, entry) => sum + parseFloat(entry.cost), 0);
            const remainingBudget = totalBudget - totalCost;

            document.getElementById("remaining-budget").textContent = `$${remainingBudget.toFixed(2)}`;
        } catch (error) {
            console.error("Error calculating remaining budget:", error);
        }
    }

    document.getElementById('budgetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const budgetInput = parseFloat(document.getElementById('budget').value);
        if (budgetInput > 0) {
            totalBudget = budgetInput;
            document.getElementById('budgetStatus').textContent = `Your total budget is $${totalBudget.toFixed(2)}`;
            updateRemainingBudget();
        } else {
            alert("Please enter a valid total budget.");
        }
    });

    async function submitBudgeting(expense, cost, category) {
        try {
            const response = await fetch(`${pythonURI}/api/budgeting`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ expense, cost, category, user_id: USER_ID }),
            });

            if (response.ok) {
                createBudgetingTable();
                updateRemainingBudget();
            } else {
                console.error('Failed to submit budgeting entry:', await response.json());
            }
        } catch (error) {
            console.error("Error creating new budgeting entry:", error);
        }
    }

    async function updateBudgeting(id, expense, cost, category) {
        try {
            const response = await fetch(`${pythonURI}/api/budgeting`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, expense, cost, category, user_id: USER_ID }),
                credentials: 'include',
            });

            if (response.ok) {
                createBudgetingTable();
                updateRemainingBudget();
            } else {
                console.error('Failed to update budgeting entry:', await response.json());
            }
        } catch (error) {
            console.error("Error updating budgeting entry:", error);
        }
    }

    async function deleteBudgeting(id) {
        try {
            const response = await fetch(`${pythonURI}/api/budgeting`, {
                ...fetchOptions,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                createBudgetingTable();
                updateRemainingBudget();
            } else {
                console.error('Failed to delete budgeting entry:', await response.json());
            }
        } catch (error) {
            console.error("Error deleting budgeting entry:", error);
        }
    }

    async function createBudgetingTable() {
        const table = document.getElementById("budgeting-table");
        table.innerHTML = ""; // Clear existing table content

        try {
            const response = await fetch(`${pythonURI}/api/budgeting`, fetchOptions);
            const data = await response.json();

            if (data.length === 0) {
                table.innerHTML = "<tr><td colspan='5'>No budgeting entries available.</td></tr>";
                return;
            }

            // Create table header
            const header = document.createElement("thead");
            header.innerHTML = `
                <tr>
                    <th>Expense</th>
                    <th>Cost</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>`;
            table.appendChild(header);

            // Create table body
            const body = document.createElement("tbody");
            data.forEach((entry, index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${entry.expense}</td>
                    <td>${entry.cost}</td>
                    <td>${entry.category}</td>
                    <td>
                        <button class="action-btn" id="update-btn-${index}">Update</button>
                        <button class="action-btn" id="delete-btn-${index}">Delete</button>
                    </td>
                `;

                body.appendChild(row);
            });
            table.appendChild(body);

            // Bind event listeners dynamically after elements are added
            data.forEach((entry, index) => {
                const updateButton = document.getElementById(`update-btn-${index}`);
                const deleteButton = document.getElementById(`delete-btn-${index}`);

                if (updateButton) {
                    updateButton.addEventListener("click", () => handleUpdate(entry));
                }
                if (deleteButton) {
                    deleteButton.addEventListener("click", () => handleDelete(entry));
                }
            });
        } catch (error) {
            console.error("Error fetching budgeting entries:", error);
            table.innerHTML = "<tr><td colspan='5'>Failed to load budgeting entries.</td></tr>";
        }
    }

    async function handleUpdate(entry) {
        const newExpense = prompt("Enter a new expense:");
        const newCost = prompt("Enter a new cost:");
        const newCategory = prompt("Enter a new category:");

        if (newExpense && newCost && newCategory) {
            await updateBudgeting(entry.id, newExpense, newCost, newCategory);
        } else {
            alert("Please enter valid data.");
        }
    }

    // Handle delete budgeting entry
    async function handleDelete(entry) {
        const confirmDelete = confirm("Are you sure you want to delete this budgeting entry?");
        if (confirmDelete) {
            await deleteBudgeting(entry.id);
        }
    }

    document.getElementById('entryForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const expense = document.getElementById('expense').value;
        const cost = parseFloat(document.getElementById('entryAmount').value);
        const category = document.getElementById('category').value;

        if (expense && cost && category) {
            await submitBudgeting(expense, cost, category);
        } else {
            alert("Please enter valid data.");
        }
    });
</script>