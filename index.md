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
        color: #f8f9fa;
        margin: 0;
        padding: 0;
    }

    .container-custom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; /* Align items from the top */
        min-height: 100vh;
        padding: 30px;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
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

    /* Navigation Button */
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

    /* Navigation Box */
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

    /* Consistent Styling for Sections */
    section {
        background-color: #ffffff; /* Consistent white background */
        color: #495057; /* Consistent dark gray font color */
        padding: 30px;
        margin-bottom: 25px;
        border-radius: 12px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); /* Consistent box shadow */
        width: 90%;
        max-width: 1200px;
        box-sizing: border-box;
        text-align: left; /* Align text to the left within sections for better readability */
    }

    section h1,
    section h2,
    section h3,
    section h4,
    section h5,
    section h6 {
        color: #007bff; /* Consistent blue for headings within sections */
        margin-bottom: 1rem;
    }

    section p {
        line-height: 1.7;
    }

    .feature-card {
        background-color: #f8f9fa; /* Slightly different background for feature cards within the section */
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        margin-bottom: 15px;
    }

    .feature-card h3 {
        color: #007bff;
        margin-top: 0;
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

    /* Specific adjustments for the welcome section */
    .px-6.py-12 {
        background-color: #ffffff;
        color: #495057;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        text-align: center; /* Center text in the welcome section */
    }

    .px-6.py-12 h1 {
        color: #007bff;
    }

    .px-6.py-12 span {
        color: #212529; /* Keep the Viralyze span darker */
    }

    /* Adjustments for Palomar intro section */
    .palomar-intro {
        text-align: center; /* Center text in the intro section */
    }

    .palomar-intro h1 {
        color: #007bff;
    }

    /* Adjustments for Palomar features section */
    .palomar-features {
        text-align: center; /* Center text in the features section */
    }

    .palomar-features h2 {
        color: #007bff;
    }

    .palomar-features .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
        gap: 20px;
        margin-top: 20px;
    }

    /* Adjustments for Palomar mission section */
    .palomar-mission {
        text-align: center; /* Center text in the mission section */
    }

    .palomar-mission h2 {
        color: #007bff;
    }

    /* Adjustments for Palomar impact section */
    .palomar-impact {
        text-align: center; /* Center text in the impact section */
    }

    .palomar-impact h2 {
        color: #007bff;
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
                <a href="/palomarhealth_frontend/socialMediaModel">Social Media Model</a>
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
                </div>
            </div>
        </section>

<section class="palomar-intro py-12 px-8">
            <div class="max-w-6xl mx-auto">
                <img src="images/palomar.png" alt="Palomar Health Logo" class="mx-auto mb-6 w-40">
                <h1 class="text-4xl font-bold text-blue-800 mb-4">Optimizing Digital Wellness</h1>
                <p class="description-text text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    The <strong>Palomar Health Social Media Optimization Initiative</strong> is a forward-thinking project built to transform how San Diego’s largest public healthcare system connects with its community online. As a trusted provider with cutting-edge facilities like <em>Palomar Medical Center Escondido</em> and <em>Poway</em>, and services reaching over half a million residents, Palomar Health stands at the forefront of patient care—and now, digital innovation.
                </p>
            </div>
        </section>

   <section class="palomar-features py-12 px-8 font-serif tracking-wide">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center text-blue-900 mb-10">What We Offer at Palomar Health San Diego</h2>
                <div class="grid">
                    <div class="feature-card">
                        <h3>Deep Data Insights</h3>
                        <p>We analyze thousands of social media posts across platforms to detect trends, optimize hashtags, and determine what truly engages Palomar Health San Diego’s audience—from health tips to behind-the-scenes hero moments.</p>
                    </div>
                    <div class="feature-card">
                        <h3>Predictive Machine Learning</h3>
                        <p>Our custom ML models forecast how content will perform before it's published—helping Palomar’s marketing teams craft posts that are not only informative but inspiring.</p>
                    </div>
                    <div class="feature-card">
                        <h3>Interactive Engagement Dashboard</h3>
                        <p>Healthcare professionals at Palomar Health can now explore performance metrics, community feedback, and suggestions for improvement in a sleek, user-friendly interface.</p>
                    </div>
                </div>
            </div>
        </section>

   <section class="palomar-mission py-12 px-8 text-center font-serif tracking-wide">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    At Palomar Health San Diego, our mission is to bring compassionate, world-class care into the digital spotlight. We empower healthcare teams with intelligent tools to tell meaningful stories that build trust, educate the public, and uplift our diverse community—one post at a time.
                </p>
            </div>
        </section>

  <section class="palomar-impact py-12 px-8 font-serif tracking-wide">
            <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-4xl font-bold text-blue-900 mb-6">Why It Matters</h2>
                <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                    In an age where patients turn to Instagram for inspiration, Twitter for news, and TikTok for health tips, how a hospital shows up online truly matters. Through this initiative, Palomar Health San Diego is setting a new national benchmark for healthcare communication in the digital era.
                </p>
            </div>
        </section>
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
  color: #495057; /* Consistent dark gray font color */
  transition: transform 0.2s ease;
}

.team-card:hover {
  transform: scale(1.02);
}

.team-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #007bff; /* Consistent blue for headings */
}

.team-card p {
  font-size: 1.1rem;
}
</style>