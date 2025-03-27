---
layout: post
title: Mumbai Budget
search_exclude: true
permalink: /travel/Mumbai/budget
menu: nav/mumbai_hotbar.html
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #FDF5E6;
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
            margin: 0 auto;
            padding: 20px;
        }
        .form-container {
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #add8e6;
            border-radius: 8px;
            background: black;
            color: white;
        }
        .form-container h2 {
            margin-bottom: 15px;
        }
        .form-container label {
            display: block;
            margin-bottom: 8px;
        }
        .form-container input,
        .form-container select,
        .form-container textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #add8e6;
            border-radius: 5px;
        }
        .form-container button {
            padding: 10px 20px;
            background-color: #FFD700;
            border: none;
            color: black;
            cursor: pointer;
            border-radius: 5px;
        }
        .form-container button:hover {
            background-color: #C5B358;
        }
        .budget-summary {
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #add8e6;
            border-radius: 8px;
            background: black;
            color: white;
        }
        .budget-summary h3 {
            color: #add8e6;
        }
        .category {
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #add8e6;
            border-radius: 8px;
            background: black;
            color: white;
        }
        .post-item {
            border: 1px solid #add8e6;
            border-radius: 15px;
            background-color: #073461;
            margin-bottom: 20px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
            color: white;
        }
        .post-item:hover {
            transform: scale(1.02);
        }
        .post-item h3 {
            margin-top: 0;
            color: #add8e6;
            border-bottom: 1px solid #add8e6;
            padding-bottom: 5px;
        }
        .post-item p {
            margin: 10px 0;
            color: #E6E6FA;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #add8e6;
        }
        th {
            background-color: #add8e6;
            color: black;
        }
        td {
            background-color: #073461;
            color: white;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Trip Budget Planner</h1>
        <p>Plan your budget plan for Paris!</p>
    </div>
    <div class="container">
        <div class="form-container">
            <h2>Set Your Trip Budget</h2>
            <form id="budgetForm">
                <label for="budget">Enter your total budget (USD):</label>
                <input type="number" id="budget" name="budget" required placeholder="Enter amount" step="0.01">
                <button type="submit">Set Budget</button>
            </form>
        </div>
    </div>
    <div class="container">
        <div class="form-container">
            <h2>See reviews on value-to-price choices:</h2>
            <form id="cityBudgetForm">
                <label for="category">Select Category:</label>
                <select id="category" name="category" required>
                    <option value="">Select a category</option>
                    <option value="activities">Activities</option>
                    <option value="hotels">Hotels</option>
                    <option value="transportation">Transportation</option>
                    <option value="food">Food</option>
                </select>
                <button type="submit">Check Options!</button>
            </form>
            <a href="chat" style="display: inline-block; margin-top: 20px;">
                <button type="button">Join a Chatroom about these choices!</button>
            </a>
        </div>
    </div>
    <div class="container">
        <div class="budget-summary" id="budgetSummary">
            <h3>Your Budget Summary</h3>
            <p id="budgetStatus">Set your budget to see the summary.</p>
            <table id="budgetTable" style="display:none;">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount (USD)</th>
                        <th>Percentage of Total Budget</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Activities</td>
                        <td id="activitiesAmount">$0</td>
                        <td id="activitiesPercentage">0%</td>
                    </tr>
                    <tr>
                        <td>Hotels</td>
                        <td id="hotelsAmount">$0</td>
                        <td id="hotelsPercentage">0%</td>
                    </tr>
                    <tr>
                        <td>Transportation</td>
                        <td id="transportationAmount">$0</td>
                        <td id="transportationPercentage">0%</td>
                    </tr>
                    <tr>
                        <td>Food</td>
                        <td id="foodAmount">$0</td>
                        <td id="foodPercentage">0%</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td id="totalAmount">$0</td>
                        <td>100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="container">
        <div class="category">
            <h2>Budget Tips</h2>
            <div class="post-item">
                <h3>Budget-Saving Tip</h3>
                <p>Consider staying in budget hostels or using public transportation instead of taxis for savings!</p>
            </div>
        </div>
    </div>
    <script>
        document.getElementById('budgetForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const budget = Number(document.getElementById('budget').value);
            if (budget > 0) {
                document.getElementById('budgetStatus').textContent = `Total Budget: $${budget}`;
                document.getElementById('totalAmount').textContent = `$${budget}`;
                const activities = budget * 0.30;
                const hotels = budget * 0.40; 
                const transportation = budget * 0.30; 
                document.getElementById('activitiesAmount').textContent = `$${activities}`;
                document.getElementById('activitiesPercentage').textContent = `${(activities / budget * 100)}%`;
                document.getElementById('hotelsAmount').textContent = `$${hotels.toFixed(2)}`;
                document.getElementById('hotelsPercentage').textContent = `${(hotels / budget * 100)}%`;
                document.getElementById('transportationAmount').textContent = `$${transportation}`;
                document.getElementById('transportationPercentage').textContent = `${(transportation / budget * 100)}%`;
                document.getElementById('budgetTable').style.display = 'table';
            } else {
                alert("Please enter a valid positive number.");
            }
        });
    </script>
</body>