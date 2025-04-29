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
        <section class="px-6 py-12 bg-white shadow-xl shadow-blue-200 rounded-3xl max-w-4xl mx-auto font-sans text-neutral-900">
  <div class="mb-10">
    <h1 class="text-4xl font-extrabold text-center text-blue-700 mb-4">Welcome to <span class="text-black">Viralyze</span></h1>
    <p class="text-lg leading-relaxed text-center text-gray-800 max-w-2xl mx-auto">
      <span class="inline-block text-2xl font-extrabold text-blue-600">Viralyze</span> is your all-in-one content intelligence platform, purpose-built for creators, influencers, and digital marketers seeking to take their social presence to the next level. In a world overflowing with content, breaking through the noise can be overwhelming — and that's where we come in.
    </p>
    <div class="flex justify-center mt-8">
      <img src="/images/analytics-dashboard.svg" alt="Analytics Dashboard" class="w-3/4 md:w-1/2 drop-shadow-lg" />
    </div>
  </div>

  <section class="palomar-intro bg-white py-12 px-8">
  <div class="max-w-6xl mx-auto text-center">
    <img src="images/palomar-health-logo.png" alt="Palomar Health Logo" class="mx-auto mb-6 w-40">
    <h1 class="text-4xl font-bold text-blue-800 mb-4">Optimizing Digital Wellness</h1>
    <p class="description-text text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
      The <strong>Palomar Health Social Media Optimization Initiative</strong> is a forward-thinking project built to transform how San Diego’s largest public healthcare system connects with its community online. As a trusted provider with cutting-edge facilities like <em>Palomar Medical Center Escondido</em> and <em>Poway</em>, and services reaching over half a million residents, Palomar Health stands at the forefront of patient care—and now, digital innovation.
    </p>
    <img src="images/hospital-community-engagement.jpg" alt="Palomar Health community engagement" class="rounded-xl shadow-md my-8 w-full max-w-4xl mx-auto">
  </div>
</section>

<section class="palomar-features bg-blue-50 py-12 px-8">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-semibold text-center text-blue-900 mb-8">What We Offer</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
      <div class="feature-card bg-white p-6 rounded-xl shadow">
        <img src="images/data-insights-icon.svg" alt="Data Insights" class="w-12 mb-4">
        <h3 class="text-xl font-bold text-blue-700 mb-2">Deep Data Insights</h3>
        <p>We analyze thousands of social media posts across platforms to detect trends, optimize hashtags, and determine what truly engages Palomar’s audience—from health tips to behind-the-scenes hero moments.</p>
      </div>
      <div class="feature-card bg-white p-6 rounded-xl shadow">
        <img src="images/ml-model-icon.svg" alt="ML Model" class="w-12 mb-4">
        <h3 class="text-xl font-bold text-blue-700 mb-2">Predictive Machine Learning</h3>
        <p>Our custom ML models forecast how content will perform before it's published—helping marketing teams craft posts that are not only informative but inspiring.</p>
      </div>
      <div class="feature-card bg-white p-6 rounded-xl shadow">
        <img src="images/dashboard-icon.svg" alt="Dashboard" class="w-12 mb-4">
        <h3 class="text-xl font-bold text-blue-700 mb-2">Interactive Engagement Dashboard</h3>
        <p>Healthcare professionals can now explore performance metrics, community feedback, and improvement suggestions in a sleek, user-friendly interface.</p>
      </div>
    </div>
  </div>
</section>

<section class="palomar-mission bg-white py-12 px-8 text-center">
  <div class="max-w-5xl mx-auto">
    <h2 class="mission-title text-3xl font-semibold text-blue-900 mb-4">Our Mission</h2>
    <p class="mission-text text-lg text-gray-700 leading-relaxed mb-6">
      Our mission is to bring Palomar Health’s compassionate, world-class care into the digital spotlight. We aim to empower its team with the tools and intelligence to tell stories that build trust, educate, and uplift our community—one post at a time. In a region as vibrant and diverse as San Diego, we believe that impactful healthcare communication must be personal, data-driven, and deeply human.
    </p>
    <img src="images/mission-image.jpg" alt="Mission image" class="rounded-xl shadow-md mx-auto mt-4 w-full max-w-3xl">
  </div>
</section>

<section class="palomar-impact bg-blue-100 py-12 px-8">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-3xl font-semibold text-blue-900 mb-4">Why It Matters</h2>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
      In an age where patients turn to Instagram for inspiration, Twitter for news, and TikTok for health tips, the way a hospital shows up online matters more than ever. Through our project, Palomar Health is setting a new standard—not just for digital healthcare communication in San Diego, but across the nation.
    </p>
    <img src="images/impact-visual.jpg" alt="Digital impact visualization" class="rounded-xl shadow-lg my-8 w-full max-w-4xl mx-auto">
  </div>
</section>

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
