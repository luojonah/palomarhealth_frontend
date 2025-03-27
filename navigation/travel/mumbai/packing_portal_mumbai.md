---
layout: post 
title: Packing Portal
search_exclude: true
permalink: /travel/mumbai/packing_portal_mumbai
menu: nav/mumbai_hotbar.html
---

<body>
    <div class="container">
        <!-- Main Content -->
        <div class="main">
            <h1>Packing Portal: Mumbai</h1>
            <div class="packing-items">
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Breathable Clothing</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Comfortable Shoes</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Sandals</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Raincoat</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Umbrella</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Sunglasses</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Smartphone Charger</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Water Bottle</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Comfortable Socks</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Hat</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Mosquito Repellent</label><br>
                </div>
                <div class="packing-item">
                    <input type="checkbox" id="packing-item">
                    <label for="packing-item">Snacks</label><br>
                </div>
            </div>
        </div>
        <!-- Filters -->
        <div class="filters">
            <h3>Filters</h3>
            <button>Season</button>
            <button>Trip Duration</button>
            <button>Age</button>
            <button>Transportation</button>
            <button>Technology</button>
        </div>
        <div class="personal_checklist">
            <h3>Personal Packing List</h3>
            <hr>
        </div>
    </div>
</body>

<style>

.container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
}

.content-wrapper {
    display: flex;
    flex: 3 1 600px;
    gap: 20px;
}

.main {
    flex: 3;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    float: left;
}

.main h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: black;
}

.packing-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
}

.packing-item {
    padding: 15px;
    background: #f1f1f1;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    color: black;
}

.filters {
    flex: 1;
    background: #eaf4ff;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
}

.filters h3 {
    text-align: center;
    margin-bottom: 20px;
    color: black;
}

.filters button {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    background-color: #d8ecff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.filters button:hover {
    background-color: #b5dbff;
}

.personal_checklist {
    flex: 3;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.personal_checklist h3 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.personal_checklist hr {
    border: 2px solid black;
}

</style>