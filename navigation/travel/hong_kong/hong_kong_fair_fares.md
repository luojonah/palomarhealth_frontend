---
layout: post 
title: Fair Fares
search_exclude: true
permalink: /travel/hong_kong/hong_kong_fair_fares
menu: nav/hong_hotbar.html
---

<style>
    body {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f9;
        color: #333;
    }

    .header {
        background: linear-gradient(to right, #001F3F, #004080);
        color: white;
        text-align: center;
        padding: 20px;
        border-radius: 8px;
    }

    .container {
        max-width: 1200px;
        margin: 20px auto;
        padding: 20px;
    }

    .section {
        margin: 20px 0;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .section h2 {
        color: #004080;
        border-bottom: 2px solid #0073e6;
        padding-bottom: 10px;
    }

    .section label {
        display: block;
        margin-bottom: 10px;
    }

    .section input,
    .section select,
    .section button {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .section button {
        background-color: #0073e6;
        color: white;
        border: none;
        cursor: pointer;
    }

    .section button:hover {
        background-color: #005bb5;
    }

    .info-card {
        background-color: #f1f9ff;
        border: 1px solid #0073e6;
        border-radius: 8px;
        padding: 20px;
        margin: 10px 0;
    }

    .info-card h3 {
        color: #004080;
        margin-top: 0;
    }

    .footer {
        text-align: center;
        padding: 10px;
        background-color: #001F3F;
        color: white;
        border-top: 5px solid #004080;
    }
</style>
<div class="header">
    <h1>Fair Fares</h1>
    <p>Your travel, your way – simplified!</p>
</div>

<div class="container">
    <div class="section">
        <h2>Set Your Travel Budget</h2>
        <form id="budgetForm">
            <label for="budget">Enter your total budget (USD):</label>
            <input type="number" id="budget" name="budget" required placeholder="Enter amount" step="0.01">
            <button type="submit">Set Budget</button>
        </form>
    </div>

    <div class="section">
        <h2>Explore Travel Options</h2>
        <form id="optionsForm">
            <label for="transportType">Select Travel Type:</label>
            <select id="transportType" name="transportType" required>
                <option value="">Choose an option</option>
                <option value="publicTransit">Public Transit</option>
                <option value="rideshare">Rideshare</option>
                <option value="rental">Rental Services</option>
                <option value="flights">Flights</option>
            </select>
            <button type="submit">Get Recommendations</button>
        </form>
    </div>

    <div class="section">
        <h2>Your Budget Summary</h2>
        <div class="info-card" id="budgetSummary">
            <h3>Summary:</h3>
            <p>Set your budget to view a detailed breakdown of your travel options.</p>
        </div>
    </div>

    <div class="section">
        <h2>Tips for Budget-Friendly Travel</h2>
        <div class="info-card">
            <h3>Public Transit Savings</h3>
            <p>Use transit passes for unlimited travel at a lower cost.</p>
        </div>
        <div class="info-card">
            <h3>Ride-sharing Hacks</h3>
            <p>Carpool to split costs with other riders.</p>
        </div>
        <div class="info-card">
            <h3>Flight Deals</h3>
            <p>Book tickets on weekdays for better rates.</p>
        </div>
    </div>
</div>

<div class="footer">
    <p>&copy; Fair Fares is Fairly Fantastic</p>
</div>

<script>
    document.getElementById('budgetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const budget = document.getElementById('budget').value;
        const summary = document.getElementById('budgetSummary');
        summary.innerHTML = `<h3>Summary:</h3><p>Your budget is set to $${budget}. Explore the best options within your range.</p>`;
    });

    document.getElementById('optionsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const type = document.getElementById('transportType').value;
        alert(`Fetching recommendations for ${type}`);
    });
</script>
