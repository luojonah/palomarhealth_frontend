---
layout: post 
title: London Waypoints
search_exclude: true
permalink: /travel/london/wellness_waypoints
menu: nav/london_hotbar.html
---


<div class="container">
    <!-- Sidebar (Left) -->
    <div class="sidebar">
        <h2>Menu</h2>
        <button class="sidebar-btn">Section 1</button>
        <button class="sidebar-btn">Section 2</button>
        <button class="sidebar-btn">Section 3</button>
        <button class="sidebar-btn">Section 4</button>
        <button class="sidebar-btn">Section 5</button>
        <div class="sidebar-footer">
            <a href="#">Settings</a>
            <a href="#">Contact Us</a>
        </div>
    </div>

<!-- Main Content (Center) -->
<div class="main-content">
    <h1>Wellness Waypoints</h1>
    <div class="search-bar">
        <input type="text" placeholder="Search your need">
        <button class="search-btn">Search</button>
    </div>
    <div class="buttons-section">
        <button class="main-btn">Hospitals</button>
        <button class="main-btn">Recovery Centers</button>
        <button class="main-btn">Pharmacies</button>
        <button class="main-btn">Emergency Contacts</button>
        <button class="main-btn">Insurance</button>
    </div>
</div>

<!-- Filters (Right) -->
<div class="filters">
    <h2>Filters</h2>
    <button class="filter-btn">Type</button>
    <button class="filter-btn">Type</button>
    <button class="filter-btn">Type</button>
    <button class="filter-btn">Type</button>
</div>
</div>

<style>
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #333;
}

/* Container Layout */
.container {
    display: grid;
    grid-template-columns: 1.5fr 3fr 1.5fr; /* Sidebar | Main Content | Filters */
    gap: 20px;
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
}

/* Sidebar (Left) */
.sidebar {
    background-color: #d8ecff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 40px); /* Adjust height relative to the page */
    position: sticky;
    top: 20px; /* Leave space for submenus at the top */
    width: 100%;
}

.sidebar h2 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
    text-align: center;
}

.sidebar-btn {
    background-color: #eaf4ff;
    border: none;
    border-radius: 5px;
    padding: 15px; /* Increased padding for better appearance */
    margin: 10px 0;
    width: 90%; /* Adjusted width to ensure single-line display */
    text-align: center;
    cursor: pointer;
    font-size: 16px;
}

.sidebar-btn:hover {
    background-color: #b5dbff;
}

.sidebar-footer {
    margin-top: auto;
    text-align: center;
}

.sidebar-footer a {
    display: block;
    margin: 10px 0;
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
}

.sidebar-footer a:hover {
    color: #0056b3;
}

/* Main Content (Center) */
.main-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.main-content h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
}

.search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.search-bar input {
    width: 60%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

.search-btn {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}

.search-btn:hover {
    background-color: #0056b3;
}

.buttons-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.main-btn {
    width: 80%;
    padding: 15px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.main-btn:hover {
    background-color: #d1d1d1;
}

/* Filters (Right) */
.filters {
    background-color: #d8ecff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    min-height: calc(100vh - 40px); /* Adjust height relative to the page */
    position: sticky;
    top: 20px; /* Leave space for submenus at the top */
}

.filters h2 {
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
}

.filter-btn {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 15px; /* Increased padding for better appearance */
    background-color: #eaf4ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.filter-btn:hover {
    background-color: #b5dbff;
}
</style>
