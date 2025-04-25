---
layout: bootstrap
title: Viralyze 
search_exclude: true
description: Viralyze social media content generator
hide: true
menu: nav/home.html
---

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
      crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
    body {
        background: linear-gradient(to right, #1b2e4f, #4a9eda);
        font-family: 'Poppins', sans-serif;
        color: white;
        margin: 0;
        padding: 0;
    }

    .container-custom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 30px;
        text-align: center;
    }

    .logo {
        width: 150px;
        margin-bottom: 2rem;
    }

    .mission-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #ffffff;
    }

    .mission-text {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
        color: #eeeeee;
        text-align: center;
        max-width: 80%;
    }

    .description-title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #ffffff;
    }

    .description-text {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
        color: #eeeeee;
        text-align: center;
        max-width: 80%;
    }

    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px 20px;
        margin-bottom: 30px;
        animation: popIn 1.2s ease-out forwards;
        opacity: 0;
        transform: scale(0.95);
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
        box-sizing: border-box;
    }

    @keyframes popIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Button Styles */
    #pageNavBtn {
        background-color: transparent;
        color: white;
        padding: 10px 15px;
        font-size: 16px;
        border: 2px solid white;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    #pageNavBtn:hover, 
    #pageNavBtn:focus {
        background-color: rgba(255, 255, 255, 0.2);
    }

    /* Box Styles */
    #pageNavBox {
        display: none;
        position: absolute;
        top: 120px; /* Adjusted top positioning */
        right: 0;
        background-color: #f1f1f1;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border-radius: 5px;
        margin-top: 0px; /* Removed top margin */
        padding: 10px;
        text-align: left;
    }

    #pageNavBox a {
        color: black;
        padding: 8px 12px;
        text-decoration: none;
        display: block;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        white-space: nowrap;
    }

    #pageNavBox a:hover {
        background-color: #ddd;
    }

    #pageNavBox.show {
        display: block;
    }

    .fa-bars {
        display: inline-block;
        font-size: 20px;
    }

</style>

<body>
    <div class="container-custom">
        <div class="header-wrapper">
            <img src="{{site.baseurl}}/images/image.png" alt="Viralyze Logo" class="logo" />
            <h1 class="main-title">Viralyze</h1>
            <button id="pageNavBtn" onclick="togglePageNav()">
                <i class="fas fa-bars"></i>
                Menu
            </button>
            <div id="pageNavBox">
                <a href="/palomarhealth_frontend/engagement">Engagement Rate</a>
                <a href="/palomarhealth_frontend/analytic">Analytics Generator</a>
            </div>
        </div>
        <br>
        <p class="description-text">
            Viralyze is a cutting-edge platform designed to empower content creators and businesses to maximize their impact on social media. We understand the challenges of creating engaging content that resonates with audiences and drives results. That's why we've developed a suite of tools to help you every step of the way.
        </p>
        <h2 class="mission-title">Our Mission</h2>
        <p class="mission-text">
            Our mission is to provide you with the insights and resources you need to create viral-worthy content. We believe that everyone should have the opportunity to connect with their audience in a meaningful way, and we're here to make that happen.
        </p>
    </div>

<script>
    function togglePageNav() {
        document.getElementById("pageNavBox").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('#pageNavBtn')) {
            var navBox = document.getElementById("pageNavBox");
            if (navBox.classList.contains('show')) {
                navBox.classList.remove('show');
            }
        }
    }
</script>
</body>
