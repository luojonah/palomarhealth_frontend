---
layout: post 
title: Hong Kong-Budget
search_exclude: true
permalink: /travel/Hong_Kong/budget
menu: nav/hong_hotbar.html
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
            color: #ff4747;
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
            border: 2px solid #ff7a7a;
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
            border: 1px solid #ff7a7a;
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
            border: 2px solid #ff7a7a;
            border-radius: 8px;
            background: black;
            color: white;
        }
        .budget-summary h3 {
            color: #ff4747;
        }
        .category {
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #ff7a7a;
            border-radius: 8px;
            background: black;
            color: white;
        }
        .post-item {
            border: 1px solid #ff7a7a;
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
            color: #ff4747;
            border-bottom: 1px solid #ff7a7a;
            padding-bottom: 5px;
        }
        .post-item p {
            margin: 10px 0;
            color: #E6E6FA;
        }
    </style>
</head>
// linear-gradient(to right, #001F3F, #073461); 
<body>
    <div class="header">
        <h1>Trip Budget Planner</h1>
        <p>Plan your budget plan for Hong Kong!</p>
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
                </select>
                <button type="submit">Get Options</button>
            </form>
        </div>
    </div>
    <div class="container">
        <div class="budget-summary" id="budgetSummary">
            <h3>Your Budget Summary</h3>
            <p id="budgetStatus">Set your budget to see the summary.</p>
        </div>
    </div>
    <div class="container">
        <div class="category">
            <h2>Post-Trip Budget Tips</h2>
            <div class="post-item">
                <h3>Budget-Saving Tip</h3>
                <p>Consider staying in budget hostels or using public transportation instead of taxis for savings!</p>
            </div>
        </div>
    </div>
</body>