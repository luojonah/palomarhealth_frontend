---
layout: bootstrap
title: Viralyze 
search_exclude: true
description: Viralyze social media content generator
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
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet">
<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
    body {
        background: linear-gradient(to right, #1b2e4f, #4a9eda);
        font-family: 'Poppins', sans-serif;
        color: white;
        margin: 0;
        padding: 0;
    }

    /* Loading Screen Styling */
    #loadingScreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 1;
        transition: opacity 1s ease;
    }

    .loading-content {
        text-align: center;
        color: white;
    }

    /* Glitch Effect for Loading Text */
    @keyframes glitchText {
        0% {
            text-shadow: 2px 2px 0px rgba(255, 0, 0, 0.6), -2px -2px 0px rgba(0, 255, 0, 0.6), 2px -2px 0px rgba(0, 0, 255, 0.6);
        }
        20% {
            text-shadow: -3px 3px 0px rgba(255, 0, 0, 0.8), 3px -3px 0px rgba(0, 255, 0, 0.8), -3px -3px 0px rgba(0, 0, 255, 0.8);
        }
        40% {
            text-shadow: 3px 3px 0px rgba(255, 0, 0, 1), -3px -3px 0px rgba(0, 255, 0, 1), 3px -3px 0px rgba(0, 0, 255, 1);
        }
        60% {
            text-shadow: -3px -3px 0px rgba(255, 0, 0, 0.6), 3px 3px 0px rgba(0, 255, 0, 0.6), -3px 3px 0px rgba(0, 0, 255, 0.6);
        }
        80% {
            text-shadow: 0 0 0px rgba(255, 0, 0, 0.5), 0 0 0px rgba(0, 255, 0, 0.5), 0 0 0px rgba(0, 0, 255, 0.5);
        }
        100% {
            text-shadow: 2px 2px 0px rgba(255, 0, 0, 0.6), -2px -2px 0px rgba(0, 255, 0, 0.6), 2px -2px 0px rgba(0, 0, 255, 0.6);
        }
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 5rem; /* Increased size for better visibility */
        color: white;
        text-transform: uppercase;
        animation: glitchText 1.5s infinite linear;
    }

    /* Loading Spinner */
    .loading-icon {
        width: 60px;
        height: 60px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #4a9eda;
        border-radius: 50%;
        margin-top: 20px;
        animation: spin 1.5s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .main-title {
        opacity: 0;
        animation: fadeIn 1.5s forwards;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 3.5rem;
        color: white;
    }

    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }

    .container-custom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        padding-top: 30px;
        text-align: center;
    }

    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;
        animation: popIn 1.2s ease-out forwards;
        opacity: 0;
        transform: scale(0.95);
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
    }

    .logo {
        width: 70px;
        max-width: 20vw;
        transition: all 0.3s ease;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }

    @keyframes popIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .input-custom, .dropdown-custom, .textarea-custom {
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
        transition: all 0.3s ease;
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

    .btn-custom {
        background-color: #546bff;
        color: white;
        border: none;
        padding: 12px 24px;
        font-weight: bold;
        border-radius: 30px;
        margin: 10px;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    }

    .btn-custom:hover {
        background-color: #3a54c6;
    }

    select, .textarea-custom {
        width: 300px;
    }
</style>

<body>

    <!-- Loading Screen -->
    <div id="loadingScreen">
        <div class="loading-content">
            <!-- Glitching Text -->
            <h1>Viralyze</h1>
            <!-- Loading Spinner -->
            <div class="loading-icon"></div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container-custom">
        <!-- Header with Logo and Title -->
        <div class="header-wrapper">
            <img src="{{site.baseurl}}/images/image.png" alt="Viralyze Logo" class="logo" />
            <h1 class="main-title">Viralyze</h1>
        </div>

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
            <option>User Generated Content</option>
        </select>

        <select class="dropdown-custom">
            <option disabled selected>Select Platform</option>
            <option>Twitter / X</option>
        </select>

        <textarea class="textarea-custom" placeholder="Enter Content Here"></textarea>

        <button class="btn-custom" onclick="showAnalytics()">Generate Analytics</button>

        <div id="analyticsSection">
            <h3 class="text-center" style="color: black; margin-bottom: 20px;">Tester Data - Our real analytic data will go here</h3>
            <canvas id="analyticsChart"></canvas>
        </div>
    </div>

    <script>
        window.onload = function() {
            setTimeout(function() {
                const loadingScreen = document.getElementById('loadingScreen');
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000); // Fade out transition
            }, 1000); // 5 seconds
        };

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
                    plugins: {
                        legend: {
                            labels: {
                                color: 'black'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'black'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: 'black'
                            }
                        }
                    }
                }
            });
        }
    </script>

</body>
