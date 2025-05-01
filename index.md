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
        color: #f8f9fa; /* Light text color for overall body */
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
        width: 120px;
        margin-bottom: 1.5rem;
    }

    .main-title {
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #ffffff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .mission-title {
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #007bff; /* Accent color for section titles */
    }

    .mission-text {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 2rem;
        color: #495057; /* Darker text for readability */
        text-align: center;
        max-width: 85%;
    }

    .description-title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #007bff; /* Accent color for section titles */
    }

    .description-text {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 2rem;
        color: #495057; /* Darker text for readability */
        text-align: center;
        max-width: 85%;
    }

    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        padding: 15px 25px;
        margin-bottom: 25px;
        animation: slideInDown 1s ease-out forwards;
        opacity: 0;
        transform: translateY(-20px);
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    @keyframes slideInDown {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Button Styles */
    #pageNavBtn {
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        padding: 10px 18px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    #pageNavBtn:hover,
    #pageNavBtn:focus {
        background-color: rgba(255, 255, 255, 0.3);
        outline: none;
    }

    /* Box Styles */
    #pageNavBox {
        display: none;
        position: absolute;
        top: 65px;
        right: 25px;
        background-color: #ffffff;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 10;
        border-radius: 8px;
        margin-top: 5px;
        padding: 10px 0;
        text-align: left;
    }

    #pageNavBox a {
        color: #343a40;
        padding: 12px 20px;
        text-decoration: none;
        display: block;
        border-radius: 0;
        transition: background-color 0.3s ease;
        white-space: nowrap;
    }

    #pageNavBox a:hover {
        background-color: #f8f9fa;
    }

    #pageNavBox.show {
        display: block;
    }

    .fa-bars {
        display: inline-block;
        font-size: 20px;
    }

    /* Main content sections - Ensuring dark text on light backgrounds */
    section {
        background-color: #ffffff; /* Solid white background for better contrast */
        color: #343a40; /* Dark gray text for main content */
        padding: 30px;
        margin-bottom: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 90%;
        max-width: 1200px;
        box-sizing: border-box;
    }

    .palomar-intro {
        background-color: #f8f9fa; /* Light gray background */
        color: #343a40; /* Dark gray text */
    }

    .palomar-features {
        background-color: #e9ecef; /* Slightly darker gray background */
        color: #343a40; /* Dark gray text */
    }

    .palomar-mission {
        background-color: #f8f9fa; /* Light gray background */
        color: #343a40; /* Dark gray text */
    }

    .palomar-impact {
        background-color: #e9ecef; /* Slightly darker gray background */
        color: #343a40; /* Dark gray text */
    }

    .feature-card {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        text-align: left;
    }

    .feature-card h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #007bff; /* Accent color for headings within cards */
        margin-bottom: 8px;
    }

    .feature-card p {
        font-size: 1rem;
        line-height: 1.6;
        color: #495057; /* Darker text for paragraphs within cards */
    }

    .palomar-intro img,
    .palomar-mission img,
    .palomar-impact img {
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-top: 15px;
        max-width: 100%;
        height: auto;
    }

    /* Specific text colors within sections to ensure visibility */
    .px-6.py-12 h1,
    .px-6.py-12 p,
    .palomar-intro h1,
    .palomar-intro p,
    .palomar-features h2,
    .palomar-features p,
    .palomar-mission h2,
    .palomar-mission p,
    .palomar-impact h2,
    .palomar-impact p {
        color: #343a40; /* Ensure dark text on the light backgrounds */
    }

    .px-6.py-12 h1 span {
        color: #000000; /* Keep specific spans black if intended */
    }

    .palomar-intro strong {
        color: #212529; /* Darker color for emphasis */
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
                <a href="/palomarhealth_frontend/feedback">Content Feedback Tool</a>
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

<section class="palomar-features bg-blue-50 py-12 px-8 font-serif tracking-wide">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center text-blue-900 mb-10">What We Offer at Palomar Health San Diego</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
      <div class="feature-card bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
        <img src="images/data-insights-icon.svg" alt="Data Insights" class="w-12 mb-4">
        <h3 class="text-xl font-bold text-blue-700 mb-2">Deep Data Insights</h3>
        <p>We analyze thousands of social media posts across platforms to detect trends, optimize hashtags, and determine what truly engages Palomar Health San Diego’s audience—from health tips to behind-the-scenes hero moments.</p>
      </div>
      <div class="feature-card bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
        <img src="images/ml-model-icon.svg" alt="ML Model" class="w-12 mb-4">
        <h3 class="text-xl font-bold text-blue-700 mb-2">Predictive Machine Learning</h3>
        <p>Our custom ML models forecast how content will perform before it's published—helping Palomar’s marketing teams craft posts that are not only informative but inspiring.</p>
      </div>
      <div class="feature-card bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
        <img src="images/dashboard-icon.svg" alt="Dashboard" class="w-12 mb-4">
        <h3 class="text-xl font-bold text-blue-700 mb-2">Interactive Engagement Dashboard</h3>
        <p>Healthcare professionals at Palomar Health can now explore performance metrics, community feedback, and suggestions for improvement in a sleek, user-friendly interface.</p>
      </div>
    </div>
  </div>
</section>

<section class="palomar-mission bg-white py-12 px-8 text-center font-serif tracking-wide">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      At Palomar Health San Diego, our mission is to bring compassionate, world-class care into the digital spotlight. We empower healthcare teams with intelligent tools to tell meaningful stories that build trust, educate the public, and uplift our diverse community—one post at a time.
    </p>
    <img src="images/mission-image.jpg" alt="Mission image" class="rounded-2xl shadow-xl mx-auto mt-4 w-full max-w-3xl">
  </div>
</section>

<section class="palomar-impact bg-blue-100 py-12 px-8 font-serif tracking-wide">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-blue-900 mb-6">Why It Matters</h2>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
    In an age where patients turn to Instagram for inspiration, Twitter for news, and TikTok for health tips, how a hospital shows up online truly matters. Through this initiative, Palomar Health San Diego is setting a new national benchmark for healthcare communication in the digital era.
    </p>
    <img src="images/impact-visual.jpg" alt="Digital impact visualization" class="rounded-2xl shadow-2xl my-8 w-full max-w-4xl mx-auto">
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

<style>
.team-section {
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.team-card {
  max-width: 700px;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  line-height: 1.6;
  color: #343a40; /* Darker text for better contrast */
  transition: transform 0.2s ease;
}

.team-card:hover {
  transform: scale(1.02);
}

.team-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #007bff; /* Accent color for headings */
}

.team-card p {
  font-size: 1.1rem;
  color: #495057; /* Slightly darker text for paragraphs */
}
</style>