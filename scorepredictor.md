---
layout: bootstrap
title: Viralyze
search_exclude: true
description: Viralyze social media content generator
hide: true
permalink: /scorepredictor
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AP CSP Course Predictor - Open Coding Society</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous">
    
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    
    <style>
        /* Custom Styling for Light and Dark Themes */
        body[data-bs-theme="dark"] .card {
            background-color: #1e1e1e;
            color: white;
            border-color: #444;
        }
        body[data-bs-theme="light"] .card {
            background-color: white;
            color: black;
            border-color: #ddd;
        }
        body[data-bs-theme="dark"] .btn-primary {
            background-color: #0d6efd;
            border-color: #0d6efd;
        }
        
        /* Position and z-index for the theme toggle button */
        #theme-toggle {
            position: fixed;
            top: 25px;
            right: 100px;
            height: 50px;
            width: 50px;
            z-index: 1000;
            border-radius: 50%;
        }
        
        /* Custom styles for the homepage */
        .hero-section {
            padding: 60px 0;
            text-align: center;
        }
        
        .predictor-card {
            transition: transform 0.3s ease;
            height: 100%;
        }
        
        .predictor-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #0d6efd;
        }
        
        body[data-bs-theme="dark"] .feature-icon {
            color: #66b3ff;
        }
        
        .footer-section {
            margin-top: 80px;
            padding: 40px 0;
            border-top: 1px solid #dee2e6;
        }
        
        body[data-bs-theme="dark"] .footer-section {
            border-top-color: #444;
        }
    </style>
</head>
<body data-bs-theme="light">
    <!-- Theme Toggle Button -->
    <button id="theme-toggle" class="btn btn-outline-secondary">🌙 Dark Mode</button>
    
    <div class="container">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <h1 class="display-4 fw-bold mb-3">AP CSP Course Predictor</h1>
                    <p class="lead mb-4">Get personalized predictions for your AP Computer Science Principles journey</p>
                    <p class="text-muted">Created by Open Coding Society</p>
                </div>
            </div>
        </section>
        
        <!-- Overview Section -->
        <section class="mb-5">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title text-center mb-4">What This Tool Does</h2>
                            <p class="card-text">
                                Our AP CSP Course Predictor helps you understand your performance potential in the 
                                AP Computer Science Principles course. Based on comprehensive assessments developed 
                                by your AP CSP teacher, this tool provides two key predictions:
                            </p>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <h5><i class="fas fa-graduation-cap me-2"></i>Class Grade Prediction</h5>
                                    <p>Evaluate your performance across key classroom areas like attendance, work habits, collaboration, and technical growth.</p>
                                </div>
                                <div class="col-md-6">
                                    <h5><i class="fas fa-clipboard-check me-2"></i>AP Exam Score Prediction</h5>
                                    <p>Assess your readiness for the AP exam based on study habits, practice scores, and confidence levels.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Predictor Cards Section -->
        <section class="mb-5">
            <h2 class="text-center mb-5">Choose Your Predictor</h2>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card predictor-card">
                        <div class="card-body text-center">
                            <div class="feature-icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <h3 class="card-title">Grade in Class Predictor</h3>
                            <p class="card-text">
                                Take a comprehensive quiz covering 11 key areas that impact your class performance. 
                                Get insights into your attendance, work habits, behavior, and technical skills.
                            </p>
                            <div class="mb-3">
                                <small class="text-muted">
                                    <strong>Categories include:</strong><br>
                                    Attendance • Work Habits • Behavior • Timeliness<br>
                                    Tech Sense • Tech Talk • Tech Growth • Advocacy<br>
                                    Communication & Collaboration • Integrity • Organization
                                </small>
                            </div>
                            <a href="/grade-predictor.html" class="btn btn-primary btn-lg">
                                Start Grade Predictor <i class="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card predictor-card">
                        <div class="card-body text-center">
                            <div class="feature-icon">
                                <i class="fas fa-medal"></i>
                            </div>
                            <h3 class="card-title">AP Exam Predictor</h3>
                            <p class="card-text">
                                Evaluate your AP exam readiness through questions about study habits, practice test 
                                performance, and confidence levels. Get a prediction of your potential AP score.
                            </p>
                            <div class="mb-3">
                                <small class="text-muted">
                                    <strong>Assessment areas:</strong><br>
                                    Study Habits • Practice Test Scores<br>
                                    Confidence Levels • Course Understanding<br>
                                    Time Management • Test Preparation
                                </small>
                            </div>
                            <a href="/exam-predictor.html" class="btn btn-primary btn-lg">
                                Start Exam Predictor <i class="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- How It Works Section -->
        <section class="mb-5">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title text-center mb-4">How It Works</h2>
                            <div class="row">
                                <div class="col-md-4 text-center mb-4">
                                    <div class="feature-icon">
                                        <i class="fas fa-clipboard-list"></i>
                                    </div>
                                    <h5>Take the Quiz</h5>
                                    <p>Answer questions honestly about your habits, skills, and performance in each category.</p>
                                </div>
                                <div class="col-md-4 text-center mb-4">
                                    <div class="feature-icon">
                                        <i class="fas fa-calculator"></i>
                                    </div>
                                    <h5>Get Analysis</h5>
                                    <p>Our algorithm processes your responses and calculates weighted scores across all areas.</p>
                                </div>
                                <div class="col-md-4 text-center mb-4">
                                    <div class="feature-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <h5>View Predictions</h5>
                                    <p>Receive personalized predictions with detailed feedback and improvement suggestions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Footer Section -->
        <footer class="footer-section text-center">
            <div class="row">
                <div class="col-lg-12">
                    <h5>Open Coding Society</h5>
                    <p class="text-muted">
                        Helping students succeed in AP Computer Science Principles<br>
                        <small>This tool is designed to provide guidance and should be used alongside teacher feedback and official course materials.</small>
                    </p>
                    <div class="mt-3">
                        <i class="fas fa-code me-2"></i>
                        <span class="text-muted">Built with Bootstrap & JavaScript</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
        crossorigin="anonymous"></script>
    
    <!-- Theme Toggle Logic -->
    <script>
        const toggleButton = document.getElementById("theme-toggle");
        const body = document.body;

        function setTheme(theme) {
            body.setAttribute("data-bs-theme", theme);
            localStorage.setItem("theme", theme);
            toggleButton.innerHTML = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        }

        // Load saved theme
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);

        // Toggle theme on button click
        toggleButton.addEventListener("click", () => {
            const newTheme = body.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
            setTheme(newTheme);
        });
    </script>
</body>
</html>