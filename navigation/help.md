---
layout: bootstrap
title: Palomar Health  
search_exclude: true
permalink: /analytics
description: 
hide: true
menu: nav/home.html
---

<div class="container py-5">
  <h1 class="text-center mb-4">🆘 Help & Support</h1>
  <p class="lead text-center mb-5">Need help using Viralzye? You're in the right place.</p>

  <div class="row g-4">
    <!-- Getting Started -->
    <div class="col-md-6">
      <div class="card p-4 h-100">
        <h4 class="card-title">📋 Getting Started</h4>
        <p class="card-text">To begin using Viralzye, go to the <a href="/analytics.html">Analytics Page</a>, enter your post details (caption, type, platform), and click "Generate Analytics."</p>
      </div>
    </div>

    <!-- Understanding the Results -->
    <div class="col-md-6">
      <div class="card p-4 h-100">
        <h4 class="card-title">📊 Understanding Your Results</h4>
        <p class="card-text">Our ML model analyzes your content and predicts its engagement potential. It may include metrics like likes, shares, sentiment, and optimization tips.</p>
      </div>
    </div>

    <!-- Tips for Higher Engagement -->
    <div class="col-md-6">
      <div class="card p-4 h-100">
        <h4 class="card-title">💡 Tips for Higher Engagement</h4>
        <ul class="card-text">
          <li>Use high-quality visuals (for images/videos).</li>
          <li>Keep captions relevant and engaging.</li>
          <li>Post during peak hours (use analytics feedback).</li>
          <li>Include relevant hashtags and CTAs (Call-to-Actions).</li>
        </ul>
      </div>
    </div>

    <!-- Troubleshooting -->
    <div class="col-md-6">
      <div class="card p-4 h-100">
        <h4 class="card-title">🔧 Troubleshooting</h4>
        <ul class="card-text">
          <li><strong>Form not submitting?</strong> Ensure all fields are filled.</li>
          <li><strong>No response from backend?</strong> Make sure the backend is running on <code>localhost:5000</code>.</li>
          <li><strong>Styling issues?</strong> Try refreshing or clearing browser cache.</li>
        </ul>
      </div>
    </div>

    <!-- Contact & Support -->
    <div class="col-12">
      <div class="card p-4 h-100">
        <h4 class="card-title">📬 Contact Us</h4>
        <p class="card-text">Still have questions? Reach out to the team at <a href="mailto:support@viralzye.com">support@viralzye.com</a> or contact Akshaj, our frontend lead, for UI-related issues.</p>
      </div>
    </div>
  </div>
</div>

<style>
  body {
    background: linear-gradient(135deg, #0f172a, #38bdf8);
    color: white;
    font-family: 'Segoe UI', sans-serif;
  }
  .card {
    background-color: #1e293b;
    border: none;
    border-radius: 1.5rem;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
  }
  .card-title {
    color: #38bdf8;
  }
  a {
    color: #38bdf8;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
