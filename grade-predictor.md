---
layout: bootstrap
title: Grade Predictor
search_exclude: true
description: AP CSP Grade in Class Predictor
hide: true
permalink: /grade-predictor
---

<div class="container mt-5 mb-5">
  <h2 class="text-center mb-5">Grade in Class Predictor</h2>

  <div class="card shadow-sm mb-5">
    <div class="card-body">
      <h5 class="card-title mb-4">Self-Assessment Quiz</h5>
      <p class="card-text">Rate yourself in each of the following categories on a scale of 1-5:</p>
      <p class="text-muted small">1 = Needs Improvement, 2 = Developing, 3 = Satisfactory, 4 = Proficient, 5 = Exemplary</p>
      
      <form id="grade-predictor-form">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Mastered?</th>
                <th>Rating (1-5)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Attendance</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="attendance"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="attendance">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Regular attendance and punctuality to class</td>
              </tr>
              <tr>
                <td>Work Habits</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="workHabits"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="workHabits">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Consistency in completing assignments and staying focused</td>
              </tr>
              <tr>
                <td>Behavior</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="behavior"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="behavior">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Appropriate conduct and participation in class</td>
              </tr>
              <tr>
                <td>Timeliness</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="timeliness"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="timeliness">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Submitting work by deadlines</td>
              </tr>
              <tr>
                <td>Tech Sense</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="techSense"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="techSense">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Understanding and applying technical concepts</td>
              </tr>
              <tr>
                <td>Tech Talk</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="techTalk"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="techTalk">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Using appropriate technical vocabulary</td>
              </tr>
              <tr>
                <td>Tech Growth</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="techGrowth"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="techGrowth">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Improvement in technical skills over time</td>
              </tr>
              <tr>
                <td>Advocacy</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="advocacy"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="advocacy">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Self-advocacy and seeking help when needed</td>
              </tr>
              <tr>
                <td>Communication & Collaboration</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="commCollab"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="commCollab">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Working effectively with others and communicating ideas</td>
              </tr>
              <tr>
                <td>Integrity</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="integrity"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="integrity">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Academic honesty and ethical behavior</td>
              </tr>
              <tr>
                <td>Organization</td>
                <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="organization"></td>
                <td>
                  <select class="form-select skill-rating" data-skill="organization">
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Developing</option>
                    <option value="3">3 - Satisfactory</option>
                    <option value="4">4 - Proficient</option>
                    <option value="5">5 - Exemplary</option>
                  </select>
                </td>
                <td class="text-muted small">Keeping track of assignments and managing time</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto mt-4">
          <button type="button" id="calculate-btn" class="btn btn-primary">Calculate Predicted Grade</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Results Card (Initially Hidden) -->
  <div id="results-card" class="card shadow-sm mb-5" style="display: none;">
    <div class="card-body">
      <h5 class="card-title">Your Predicted Grade</h5>
      
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <h3 class="card-title">Overall Rating</h3>
              <div class="display-1 fw-bold my-3" id="average-score">0.0</div>
              <p class="card-text">out of 5.0</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <h3 class="card-title">Predicted Grade</h3>
              <div class="display-1 fw-bold my-3" id="letter-grade">?</div>
              <p class="card-text" id="grade-feedback"></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-4">
        <h5>Skills Breakdown</h5>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Mastered</th>
                <th>Rating</th>
                <th>Ratio</th>
              </tr>
            </thead>
            <tbody id="skills-breakdown">
              <!-- Will be populated by JavaScript -->
            </tbody>
            <tfoot>
              <tr class="table-active">
                <td><strong>Average</strong></td>
                <td id="mastery-count">0/11</td>
                <td id="total-score">0</td>
                <td id="total-ratio">0.0</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <div class="d-grid gap-2 col-6 mx-auto mt-4">
        <button type="button" id="reset-btn" class="btn btn-outline-secondary">Start Over</button>
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('grade-predictor-form');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultsCard = document.getElementById('results-card');
    
    // Initialize mastery checkboxes to update selects
    const masteryCheckboxes = document.querySelectorAll('.mastery-checkbox');
    masteryCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const skill = this.dataset.skill;
        const selectElement = document.querySelector(`.skill-rating[data-skill="${skill}"]`);
        
        if (this.checked) {
          selectElement.value = "5"; // Set to exemplary if marked as mastered
          selectElement.disabled = true;
        } else {
          selectElement.disabled = false;
        }
      });
    });
    
    // Calculate button click handler
    calculateBtn.addEventListener('click', function() {
      // Get all skill ratings
      const skills = {};
      const skillRatings = document.querySelectorAll('.skill-rating');
      
      skillRatings.forEach(select => {
        const skill = select.dataset.skill;
        const rating = parseInt(select.value);
        const masterCheckbox = document.querySelector(`.mastery-checkbox[data-skill="${skill}"]`);
        const mastered = masterCheckbox.checked;
        
        skills[skill] = {
          name: skill,
          rating: rating,
          mastered: mastered,
          ratio: rating / 5  // Calculate ratio (rating / max possible)
        };
      });
      
      // Calculate averages and totals
      const totalRatings = Object.values(skills).reduce((sum, skill) => sum + skill.rating, 0);
      const totalPossible = Object.keys(skills).length * 5; // 5 is max rating
      const averageRating = totalRatings / Object.keys(skills).length;
      const masteredCount = Object.values(skills).filter(skill => skill.mastered).length;
      const totalRatio = totalRatings / totalPossible;
      
      // Determine letter grade based on average rating
      let letterGrade, feedback;
      if (averageRating >= 4.8) {
        letterGrade = 'A+';
        feedback = 'Outstanding! You\'re excelling in all areas of the course.';
      } else if (averageRating >= 4.4) {
        letterGrade = 'A';
        feedback = 'Excellent work! You\'re showing mastery in most areas.';
      } else if (averageRating >= 4.0) {
        letterGrade = 'A-';
        feedback = 'Very good work! You\'re on the right track for success.';
      } else if (averageRating >= 3.7) {
        letterGrade = 'B+';
        feedback = 'Good job! You\'re showing strength in many areas.';
      } else if (averageRating >= 3.4) {
        letterGrade = 'B';
        feedback = 'Solid performance. Continue to develop your skills.';
      } else if (averageRating >= 3.0) {
        letterGrade = 'B-';
        feedback = 'You\'re doing fairly well. Focus on improving your weaker areas.';
      } else if (averageRating >= 2.7) {
        letterGrade = 'C+';
        feedback = 'You\'re meeting basic expectations. Work on consistency.';
      } else if (averageRating >= 2.4) {
        letterGrade = 'C';
        feedback = 'You\'re meeting minimum requirements. More effort is needed.';
      } else if (averageRating >= 2.0) {
        letterGrade = 'C-';
        feedback = 'You\'re at risk. Significant improvement is necessary.';
      } else if (averageRating >= 1.4) {
        letterGrade = 'D';
        feedback = 'You need to address multiple areas to pass this course.';
      } else {
        letterGrade = 'F';
        feedback = 'Immediate intervention is required to pass this course.';
      }
      
      // Update the results display
      document.getElementById('average-score').textContent = averageRating.toFixed(1);
      document.getElementById('letter-grade').textContent = letterGrade;
      document.getElementById('grade-feedback').textContent = feedback;
      
      // Populate skills breakdown table
      const skillsBreakdown = document.getElementById('skills-breakdown');
      skillsBreakdown.innerHTML = '';
      
      // Convert skills object to array and sort by rating (highest first)
      const skillsArray = Object.values(skills).sort((a, b) => b.rating - a.rating);
      
      skillsArray.forEach(skill => {
        const row = document.createElement('tr');
        
        // Format the skill name for display (convert camelCase to Title Case)
        const skillNameFormatted = skill.name
          .replace(/([A-Z])/g, ' $1') // Add space before capital letters
          .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
        
        row.innerHTML = `
          <td>${skillNameFormatted}</td>
          <td>${skill.mastered ? '✓' : '—'}</td>
          <td>${skill.rating}</td>
          <td>${skill.ratio.toFixed(1)}</td>
        `;
        skillsBreakdown.appendChild(row);
      });
      
      // Update totals
      document.getElementById('mastery-count').textContent = `${masteredCount}/${Object.keys(skills).length}`;
      document.getElementById('total-score').textContent = totalRatings;
      document.getElementById('total-ratio').textContent = totalRatio.toFixed(1);
      
      // Show results card
      resultsCard.style.display = 'block';
      
      // Scroll to results
      resultsCard.scrollIntoView({ behavior: 'smooth' });
      
      // Save results to localStorage
      localStorage.setItem('apCspGradeResults', JSON.stringify({
        skills: skills,
        averageRating: averageRating,
        letterGrade: letterGrade,
        feedback: feedback,
        totalRatio: totalRatio,
        masteredCount: masteredCount
      }));
    });
    
    // Reset button click handler
    resetBtn.addEventListener('click', function() {
      // Reset form
      form.reset();
      
      // Re-enable all select elements
      document.querySelectorAll('.skill-rating').forEach(select => {
        select.disabled = false;
      });
      
      // Hide results card
      resultsCard.style.display = 'none';
      
      // Scroll to top of form
      form.scrollIntoView({ behavior: 'smooth' });
      
      // Clear localStorage
      localStorage.removeItem('apCspGradeResults');
    });
    
    // Check if there are saved results
    const savedResults = localStorage.getItem('apCspGradeResults');
    if (savedResults) {
      const results = JSON.parse(savedResults);
      
      // Restore form data
      Object.entries(results.skills).forEach(([key, skill]) => {
        const selectElement = document.querySelector(`.skill-rating[data-skill="${key}"]`);
        const checkboxElement = document.querySelector(`.mastery-checkbox[data-skill="${key}"]`);
        
        if (selectElement && checkboxElement) {
          selectElement.value = skill.rating;
          checkboxElement.checked = skill.mastered;
          
          if (skill.mastered) {
            selectElement.disabled = true;
          }
        }
      });
      
      // Show results
      calculateBtn.click();
    }
  });
</script>