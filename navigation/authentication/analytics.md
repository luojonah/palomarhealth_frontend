---
layout: bootstrap
title: Palomar Health  
search_exclude: true
permalink: /analytics
description: 
hide: true
menu: nav/home.html
---

<!-- Full-Page Viralzye Form Styled with Bootstrap -->
<div class="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100" style="background: linear-gradient(135deg, 
#0f172a, 
#38bdf8); font-family: 'Comic Sans MS', cursive, sans-serif;">

  <!-- Title -->
  <div class="mb-4 text-white fs-2 text-decoration-underline">Viralzye</div>

  <!-- Form Inputs -->
  <form method="POST" action="http://localhost:5000/api/analyze" class="d-flex flex-column align-items-center gap-3">

   <!-- Post Caption -->
  <input type="text" name="caption" class="form-control text-center bg-black text-white border-0 rounded-pill shadow" placeholder="Enter Post Caption" style="width: 250px; padding: 12px 24px;" />

  <!-- Post Type Selector -->
   <select name="post_type" class="form-select text-center bg-black text-white border-0 rounded-pill shadow" style="width: 250px; padding: 12px 24px;">
      <option disabled selected>Select Post Type</option>
      <option>Image</option>
      <option>Video</option>
      <option>Text</option>
    </select>

  <!-- Platform Selector -->
  <select name="platform" class="form-select text-center bg-black text-white border-0 rounded-pill shadow" style="width: 250px; padding: 12px 24px;">
      <option disabled selected>Twitter / X</option>
      <option>Instagram</option>
      <option>Facebook</option>
    </select>

  <!-- Content Area -->
  <textarea name="content" rows="4" class="form-control text-center bg-black text-white border-0 rounded-4 shadow" placeholder="Enter Content Here" style="width: 250px; padding: 12px 24px;"></textarea>

  <!-- Submit Button -->
  <button type="submit" class="btn btn-dark rounded-pill shadow px-4 py-2">Generate Analytics</button>
  </form>
</div>
