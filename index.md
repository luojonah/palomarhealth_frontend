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
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;
        animation: popIn 1.2s ease-out forwards;
        opacity: 0;
        transform: scale(0.95);
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
    }

    @keyframes popIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

</style>

<body>
    <div class="container-custom">
        <div class="header-wrapper">
            <img src="{{site.baseurl}}/images/image.png" alt="Viralyze Logo" class="logo" />
            <h1 class="main-title">Viralyze</h1>
             <a href="/palomarhealth_frontend/engagement" style="color: white; font-weight: bold; text-decoration: none; margin-left: 20px;">
                Engagement Rate
            </a>
             <a href="/palomarhealth_frontend/analytic" style="color: white; font-weight: bold; text-decoration: none; margin-left: 50px;">
                Analytics Generator
            </a>
        </div>
        <p class="description-text">
            Viralyze is a cutting-edge platform designed to empower content creators and businesses to maximize their impact on social media. We understand the challenges of creating engaging content that resonates with audiences and drives results. That's why we've developed a suite of tools to help you every step of the way.
        </p>
        <h2 class="mission-title">Our Mission</h2>
        <p class="mission-text">
            Our mission is to provide you with the insights and resources you need to create viral-worthy content. We believe that everyone should have the opportunity to connect with their audience in a meaningful way, and we're here to make that happen.
        </p>
    </div>
</body>
