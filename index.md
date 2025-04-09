---
layout: bootstrap
title: Viralyze 
search_exclude: true
description: 
hide: true
menu: nav/home.html
---


<style>
    body {
        background: linear-gradient(to right, #1b2e4f, #4a9eda);
        font-family: 'Segoe UI', sans-serif;
        color: white;
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
        background-color: #546bff;
        color: white;
        border: none;
        padding: 12px 24px;
        font-weight: bold;
        border-radius: 30px;
        margin: 10px;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
        width: 250px;
        text-align: center;
    }
    .input-custom::placeholder,
    .textarea-custom::placeholder {
        color: #ddd;
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
</style>

<div class="container-custom">
    

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
        <option>Twitter / X</option>
    </select>

    <textarea class="textarea-custom" placeholder="Enter Content Here"></textarea>

<button class="btn-custom" onclick="window.location.href='/palomarhealth_frontend/analytics'">Generate Analytics</button>


</div>

