---
layout: bootstrap
title: Practice Portal
search_exclude: false
description: Interactive practice questions to prep for the AP CSP Exam
hide: false
permalink: /practice-portal
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AP Computer Science Principles Quiz</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/ap-csp-quiz.css">
</head>
<body>
    <div class="container py-5">
        <header class="text-center mb-4">
            <h1 class="display-4">AP Computer Science Principles</h1>
            <h2 class="h3 text-secondary">Interactive Practice Quiz</h2>
        </header>

        <!-- Quiz Setup Section -->
        <section id="quizSetup" class="card shadow-sm mb-4">
            <div class="card-body">
                <h3 class="card-title">Choose Your Practice Mode</h3>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="unitSelect" class="form-label">Select Unit:</label>
                        <select id="unitSelect" class="form-select">
                            <option value="all" selected>All Units</option>
                            <option value="creative-development">Unit 1: Creative Development</option>
                            <option value="data">Unit 2: Data</option>
                            <option value="algorithms-programming">Unit 3: Algorithms & Programming</option>
                            <option value="computer-systems-networks">Unit 4: Computer Systems & Networks</option>
                            <option value="impact-computing">Unit 5: Impact of Computing</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="questionCount" class="form-label">Number of Questions:</label>
                        <select id="questionCount" class="form-select">
                            <option value="5">5 Questions</option>
                            <option value="10" selected>10 Questions</option>
                            <option value="15">15 Questions</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="timerToggle" class="form-label">Timer:</label>
                        <div class="form-check form-switch mt-2">
                            <input class="form-check-input" type="checkbox" id="timerToggle" checked>
                            <label class="form-check-label" for="timerToggle">Enable Timer</label>
                        </div>
                    </div>
                </div>
                <div class="d-grid mt-4">
                    <button id="startQuizBtn" class="btn btn-primary btn-lg">
                        <i class="fas fa-play-circle me-2"></i>Start Quiz
                    </button>
                </div>
            </div>
        </section>

        <!-- Quiz Questions Section (initially hidden) -->
        <section id="quizArea" class="card shadow-sm mb-4" style="display:none;">
            <div class="card-header bg-light d-flex justify-content-between align-items-center">
                <div>
                    <span id="questionNumber" class="badge bg-primary">1/10</span>
                    <span id="unitBadge" class="badge bg-secondary ms-2">Unit 3</span>
                </div>
                <div id="timerContainer" class="d-flex align-items-center">
                    <i class="fas fa-clock me-2"></i>
                    <span id="timer" class="fw-bold">05:00</span>
                </div>
            </div>
            <div class="card-body">
                <div class="progress mb-3" style="height: 6px;">
                    <div class="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
                <h4 id="questionText" class="card-title mb-4">Question text will appear here</h4>
                
                <div id="optionsContainer" class="d-grid gap-2">
                    <!-- Options will be dynamically inserted here -->
                </div>
                
                <div id="feedbackArea" class="mt-4" style="display:none;">
                    <div id="correctFeedback" class="alert alert-success d-none">
                        <i class="fas fa-check-circle me-2"></i>Correct! Great job!
                    </div>
                    <div id="incorrectFeedback" class="alert alert-danger d-none">
                        <i class="fas fa-times-circle me-2"></i>Incorrect. The correct answer is: <span id="correctAnswer"></span>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <button id="prevQuestion" class="btn btn-outline-secondary" disabled>
                    <i class="fas fa-arrow-left me-1"></i>Previous
                </button>
                <div>
                    <span class="badge bg-success p-2">
                        Score: <span id="currentScore">0</span>/<span id="maxScore">10</span>
                    </span>
                </div>
                <button id="nextQuestion" class="btn btn-primary">
                    Next<i class="fas fa-arrow-right ms-1"></i>
                </button>
            </div>
        </section>

        <!-- Results Section (initially hidden) -->
        <section id="resultsArea" class="card shadow-sm text-center" style="display:none;">
            <div class="card-body">
                <div class="mb-4">
                    <i class="fas fa-award text-warning" style="font-size: 5rem;"></i>
                </div>
                <h3 class="card-title">Quiz Completed!</h3>
                <div class="row mt-4">
                    <div class="col-md-4">
                        <div class="card bg-light">
                            <div class="card-body">
                                <h5 class="card-title">Final Score</h5>
                                <p id="finalScore" class="display-6 text-primary">85%</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-light">
                            <div class="card-body">
                                <h5 class="card-title">Time Taken</h5>
                                <p id="timeTaken" class="display-6 text-primary">2:45</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-light">
                            <div class="card-body">
                                <h5 class="card-title">Accuracy</h5>
                                <p id="accuracy" class="display-6 text-primary">85%</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-4">
                    <button id="reviewQuizBtn" class="btn btn-outline-primary me-2">
                        <i class="fas fa-search me-1"></i>Review Answers
                    </button>
                    <button id="restartQuiz" class="btn btn-primary">
                        <i class="fas fa-redo me-1"></i>Take Another Quiz
                    </button>
                </div>
            </div>
        </section>

        <!-- Review Section (initially hidden) -->
        <section id="reviewArea" class="card shadow-sm" style="display:none;">
            <div class="card-header bg-light">
                <h3 class="card-title mb-0">Review Your Answers</h3>
            </div>
            <div class="card-body">
                <div id="reviewQuestionsContainer">
                    <!-- Review questions will be inserted here -->
                </div>
            </div>
            <div class="card-footer text-center">
                <button id="backToResultsBtn" class="btn btn-primary">
                    <i class="fas fa-arrow-left me-1"></i>Back to Results
                </button>
            </div>
        </section>

        <!-- Footer -->
        <footer class="mt-5 text-center text-muted">
            <p>
                <small>Created to help students prepare for the AP Computer Science Principles exam.</small>
            </p>
            <p>
                <small>© 2025 AP CSP Quiz | Not affiliated with College Board</small>
            </p>
        </footer>
    </div>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Quiz JavaScript -->
    <script src="js/ap-csp-quiz.js"></script>
</body>
</html>
