---
layout: bootstrap
title: Viralyze 
search_exclude: true
description: 
hide: true
menu: nav/home.html
---


<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
      crossorigin="anonymous">

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
    body {
        background: linear-gradient(to right, #1b2e4f, #4a9eda);
        font-family: 'Segoe UI', sans-serif;
        color: white;
    }
    h1 {
        color: black;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
    }
    .btn-custom {
        background-color: #546bff;
        color: white;
        border: none;
        padding: 12px 24px;
        font-weight: bold;
        border-radius: 30px;
        margin: 10px;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
    }
    .btn-custom:hover {
        background-color: #3a54c6;
    }
    .dropdown-custom, .input-custom, .textarea-custom {
        background-color: white;
        color: black;
        border: 2px solid #546bff;
        padding: 12px 24px;
        font-weight: bold;
        border-radius: 30px;
        margin: 10px;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
        width: 250px;
        text-align: center;
        appearance: none;
    }
    .input-custom::placeholder,
    .textarea-custom::placeholder {
        color: #888;
        text-align: center;
    }
    .textarea-custom {
        resize: none;
        height: 100px;
    }
    .logo {
        width: 250px;
        margin-bottom: 30px;
    }
    .container-custom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
    .icon-img {
        width: 90px;
        margin-top: 20px;
    }
    #analyticsSection {
        margin-top: 50px;
        width: 80%;
        max-width: 700px;
        display: none;
    }
</style>

<div class="container-custom">
    <h1>Palomar Health Post Generator</h1>

    <input type="text" class="input-custom" placeholder="Enter Post Caption">

    <select class="dropdown-custom">
        <option disabled selected>Select Post Type</option>
        <option>Entertainment</option>
        <option>Comedy</option>
        <option>Educational</option>
        <option>News</option>
        <option>Health & Wellness</option>
        <option>Motivational</option>
        <option>Product Promotion</option>
        <option>Event Announcement</option>
        <option>Behind the Scenes</option>
        <option>User Generated Content</option>
    </select>

    <select class="dropdown-custom">
        <option disabled selected>Select Platform</option>
        <option>Twitter / X</option>
    </select>

    <textarea class="textarea-custom" placeholder="Enter Content Here"></textarea>

    <button class="btn-custom" onclick="showAnalytics()">Generate Analytics</button>

    <div id="analyticsSection">
        <h3 class="text-center" style="color: white; margin-bottom: 20px;">Tester Data - Our real analytic data will go here</h3>
        <canvas id="analyticsChart"></canvas>
    </div>
</div>

<script>
function showAnalytics() {
    document.getElementById('analyticsSection').style.display = 'block';

    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Likes', 'Shares', 'Comments', 'Impressions'],
            datasets: [{
                label: 'Engagement Metrics',
                data: [120, 80, 45, 300],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ],
                borderRadius: 10
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
</script>