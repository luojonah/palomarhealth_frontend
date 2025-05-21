---
layout: bootstrap
title: Grade Predictor
search_exclude: true
description: AP CSP Grade in Class Predictor
hide: true
permalink: /grade-predictor
---

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Grade Predictor</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
  <style>
    #grade-ring-container {
      position: relative;
      width: 150px;
      height: 150px;
      margin: 0 auto;
    }

    #percentage-label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      font-weight: bold;
    }

    svg circle.bg {
      stroke: #e6e6e6;
    }
    
    .chart-container {
      height: 400px;
      margin-top: 2rem;
      width: 100%;
    }
    
    .card {
      margin-bottom: 2rem;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      border-radius: 0.5rem;
      border: none;
    }
    
    .card-header {
      border-top-left-radius: 0.5rem !important;
      border-top-right-radius: 0.5rem !important;
    }
    
    .level-marker {
      position: absolute;
      left: 0;
      width: 100%;
      border-bottom: 1px dashed rgba(0,0,0,0.2);
      z-index: 0;
    }
    
    .level-label {
      position: absolute;
      left: -60px;
      transform: translateY(-50%);
      font-weight: bold;
      font-size: 0.85rem;
      color: #555;
    }
    
    .chart-y-labels {
      position: relative;
      height: 100%;
      margin-right: 20px;
      width: 70px;
    }
    
    .chart-with-labels {
      display: flex;
      height: 400px;
      position: relative;
      margin-top: 20px;
      padding-right: 15px;
    }
    
    table.table th, table.table td {
      vertical-align: middle;
    }
    
    .progress-ring-title {
      margin-bottom: 1rem;
      font-weight: 600;
      color: #495057;
    }
    
    .chart-area {
      flex-grow: 1;
      position: relative;
    }
    
    .chart-legend {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      padding: 0 15px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      margin-right: 15px;
    }
    
    .legend-color {
      width: 12px;
      height: 12px;
      margin-right: 5px;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <div class="container mt-5 mb-5">
    <h2 class="text-center mb-4">Grade in Class Predictor Self-Assessment Quiz</h2>
    <p class="text-center">Rate yourself in each of the following categories on a scale of 1-5:<br>
      1 = Needs Improvement, 2 = Developing, 3 = Satisfactory, 4 = Proficient, 5 = Exemplary</p>

    <div class="card shadow">
      <div class="card-body">
        <form id="grade-predictor-form">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead class="table-light">
                <tr>
                  <th>Skill</th>
                  <th>Mastered</th>
                  <th>Rating (1-5)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <!-- Skills from the provided table -->
                <tr>
                  <td>Attendance</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Attendance" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Attendance">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Regular attendance and punctuality to class</td>
                </tr>
                <tr>
                  <td>Work Habits</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Work Habits" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Work Habits">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Consistency in completing assignments and staying focused</td>
                </tr>
                <tr>
                  <td>Behavior</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Behavior" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Behavior">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Appropriate conduct and participation in class</td>
                </tr>
                <tr>
                  <td>Timeliness</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Timeliness" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Timeliness">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Submitting work by deadlines</td>
                </tr>
                <tr>
                  <td>Tech Sense</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Tech Sense" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Tech Sense">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Understanding and applying technical concepts</td>
                </tr>
                <tr>
                  <td>Tech Talk</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Tech Talk" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Tech Talk">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Using appropriate technical vocabulary</td>
                </tr>
                <tr>
                  <td>Tech Growth</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Tech Growth" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Tech Growth">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Improvement in technical skills over time</td>
                </tr>
                <tr>
                  <td>Advocacy</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Advocacy" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Advocacy">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Self-advocacy and seeking help when needed</td>
                </tr>
                <tr>
                  <td>Communication & Collaboration</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Communication & Collaboration" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Communication & Collaboration">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Working effectively with others and communicating ideas</td>
                </tr>
                <tr>
                  <td>Integrity</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Integrity" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Integrity">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Academic honesty and ethical behavior</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td><input type="checkbox" class="form-check-input mastery-checkbox" data-skill="Organization" /></td>
                  <td>
                    <select class="form-select skill-rating" data-skill="Organization">
                      <option value="1">1 - Needs Improvement</option>
                      <option value="2">2 - Developing</option>
                      <option value="3" selected>3 - Satisfactory</option>
                      <option value="4">4 - Proficient</option>
                      <option value="5">5 - Exemplary</option>
                    </select>
                  </td>
                  <td>Keeping track of assignments and managing time</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center mt-4">
            <button type="button" class="btn btn-primary" id="calculate-btn">Calculate Grade</button>
          </div>
        </form>
      </div>
    </div>

    <div id="results-card" class="card shadow mt-5" style="display: none;">
      <div class="card-header bg-light">
        <h5 class="mb-0">Your Results</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 text-center mb-4">
            <h5 class="progress-ring-title">Predicted Grade</h5>
            <div id="grade-ring-container">
              <svg width="150" height="150">
                <circle class="bg" cx="75" cy="75" r="65" stroke-width="15" fill="none" />
                <circle id="progress-ring" cx="75" cy="75" r="65" stroke="#007bff" stroke-width="15" fill="none"
                        stroke-linecap="round" stroke-dasharray="408" stroke-dashoffset="408"
                        transform="rotate(-90 75 75)" />
              </svg>
              <div id="percentage-label">0%</div>
            </div>
            <div class="mt-3">
              <h6>Letter Grade: <span id="letter-grade" class="badge bg-primary">-</span></h6>
              <p id="grade-feedback" class="small text-muted mt-2"></p>
            </div>
          </div>
          
          <div class="col-md-8">
            <h5 class="mb-3">Skills Summary</h5>
            <div class="mb-3">
              <span class="fw-bold">Overall Rating: </span><span id="avg-rating">0.0</span> out of 5.0
            </div>
            <div class="table-responsive">
              <table class="table table-sm table-bordered">
                <thead class="table-light">
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
              </table>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <button type="button" class="btn btn-outline-secondary" id="reset-btn">Start Over</button>
        </div>
      </div>
    </div>
    
    <!-- Individual Attributes Section -->
    <div class="card shadow mt-5">
      <div class="card-header bg-light">
        <h5 class="mb-0">Individual Attributes</h5>
        <small class="text-muted">Completed 1 time | Last completed 5/20/25 9:51 PM</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="chart-with-labels">
              <div class="chart-y-labels">
                <!-- Y-axis labels will be added by JavaScript -->
              </div>
              <div class="chart-area">
                <div class="chart-container">
                  <canvas id="attributesChart"></canvas>
                </div>
              </div>
            </div>
            
            <div class="chart-legend mt-4">
              <div class="legend-item">
                <div class="legend-color bg-danger"></div>
                <span>Nurture (0-39%)</span>
              </div>
              <div class="legend-item">
                <div class="legend-color bg-warning"></div>
                <span>Grow (40-69%)</span>
              </div>
              <div class="legend-item">
                <div class="legend-color bg-success"></div>
                <span>Sustain (70-100%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const calculateBtn = document.getElementById('calculate-btn');
      const resetBtn = document.getElementById('reset-btn');
      const resultsCard = document.getElementById('results-card');
      const progressRing = document.getElementById('progress-ring');
      const percentLabel = document.getElementById('percentage-label');
      const gradeFeedback = document.getElementById('grade-feedback');
      const avgRating = document.getElementById('avg-rating');
      const letterGrade = document.getElementById('letter-grade');
      const skillsBreakdown = document.getElementById('skills-breakdown');
      const chartYLabels = document.querySelector('.chart-y-labels');

      const circumference = 2 * Math.PI * 65;
      progressRing.style.strokeDasharray = circumference;

      // Add Y-axis labels for the chart
      const addYAxisLabels = () => {
        // Clear existing labels
        chartYLabels.innerHTML = '';
        
        // Add labels for Sustain, Grow, Nurture
        const levels = [
          { name: 'Sustain', position: 25, color: '#28a745' },
          { name: 'Grow', position: 50, color: '#ffc107' },
          { name: 'Nurture', position: 75, color: '#dc3545' }
        ];
        
        levels.forEach(level => {
          // Create level marker line
          const marker = document.createElement('div');
          marker.className = 'level-marker';
          marker.style.top = `${level.position}%`;
          
          // Create level label
          const label = document.createElement('div');
          label.className = 'level-label';
          label.textContent = level.name;
          label.style.top = `${level.position}%`;
          label.style.color = level.color;
          
          chartYLabels.appendChild(marker);
          chartYLabels.appendChild(label);
        });
      };
      
      addYAxisLabels();

      const masteryCheckboxes = document.querySelectorAll('.mastery-checkbox');
      masteryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
          const skill = this.dataset.skill;
          const ratingSelect = document.querySelector(`.skill-rating[data-skill="${skill}"]`);
          if (this.checked) {
            ratingSelect.value = "5";
            ratingSelect.disabled = true;
          } else {
            ratingSelect.disabled = false;
          }
        });
      });

      calculateBtn.addEventListener('click', () => {
        const ratings = document.querySelectorAll('.skill-rating');
        const checkboxes = document.querySelectorAll('.mastery-checkbox');
        let totalScore = 0;
        let maxScore = ratings.length * 5;
        let skillsData = [];

        ratings.forEach((r, index) => {
          const skillName = r.dataset.skill;
          const rating = parseInt(r.value);
          const isMastered = checkboxes[index].checked;
          const ratio = (rating / 5).toFixed(1);
          
          totalScore += rating;
          
          skillsData.push({
            skill: skillName,
            mastered: isMastered,
            rating: rating,
            ratio: ratio
          });
        });

        const avgRatingValue = (totalScore / ratings.length).toFixed(1);
        const percentage = Math.round((totalScore / maxScore) * 100);
        const offset = circumference * (1 - percentage / 100);
        
        // Update the ring and percentage
        progressRing.style.strokeDashoffset = offset;
        percentLabel.textContent = `${percentage}%`;
        
        // Update average rating
        avgRating.textContent = avgRatingValue;
        
        // Determine letter grade
        let grade = 'F';
        let feedback = 'Immediate intervention is required to pass this course.';
        let badgeColor = 'bg-danger';
        
        if (percentage >= 90) {
          grade = 'A';
          feedback = 'Excellent work! Keep up the great performance.';
          badgeColor = 'bg-success';
        } else if (percentage >= 80) {
          grade = 'B';
          feedback = 'Good work! Continue focusing on improvement.';
          badgeColor = 'bg-info';
        } else if (percentage >= 70) {
          grade = 'C';
          feedback = 'Satisfactory work. Consider seeking additional support.';
          badgeColor = 'bg-warning text-dark';
        } else if (percentage >= 60) {
          grade = 'D';
          feedback = 'You need to significantly improve to pass this course.';
          badgeColor = 'bg-danger';
        }
        
        letterGrade.textContent = grade;
        letterGrade.className = `badge ${badgeColor}`;
        gradeFeedback.textContent = feedback;
        
        // Dynamic ring color
        let color = '#dc3545'; // red for F
        if (percentage >= 90) color = '#28a745'; // green for A
        else if (percentage >= 80) color = '#198754'; // green for B
        else if (percentage >= 70) color = '#ffc107'; // yellow for C
        else if (percentage >= 60) color = '#fd7e14'; // orange for D
        progressRing.style.stroke = color;
        
        // Populate skills breakdown table
        skillsBreakdown.innerHTML = '';
        skillsData.forEach(skill => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${skill.skill}</td>
            <td>${skill.mastered ? '✓' : '—'}</td>
            <td>${skill.rating}</td>
            <td>${skill.ratio}</td>
          `;
          skillsBreakdown.appendChild(row);
        });
        
        // Add average row
        const avgRow = document.createElement('tr');
        avgRow.classList.add('fw-bold', 'table-active');
        avgRow.innerHTML = `
          <td>Average</td>
          <td>${skillsData.filter(s => s.mastered).length}/${skillsData.length}</td>
          <td>${avgRatingValue}</td>
          <td>${(avgRatingValue/5).toFixed(1)}</td>
        `;
        skillsBreakdown.appendChild(avgRow);

        resultsCard.style.display = 'block';
        
        // Scroll to results
        resultsCard.scrollIntoView({behavior: 'smooth'});
      });

      resetBtn.addEventListener('click', () => {
        document.getElementById('grade-predictor-form').reset();
        document.querySelectorAll('.skill-rating').forEach(r => r.disabled = false);
        resultsCard.style.display = 'none';
      });
      
      // Function to get bar color based on value
      const getBarColor = (value) => {
        if (value >= 70) return '#28a745'; // green - Sustain
        if (value >= 40) return '#ffc107'; // yellow - Grow
        return '#dc3545'; // red - Nurture
      };
      
      // Individual Attributes Chart
      const ctx = document.getElementById('attributesChart').getContext('2d');
      
      // Data from the image
      const attributesData = {
        labels: ['Academic Attributes', 'Help Seeking', 'Persistence', 'Procrastination', 'Time Management', 'Focus Of Control'],
        datasets: [{
          data: [70, 40, 70, 50, 85, 65],
          backgroundColor: function(context) {
            const value = context.dataset.data[context.dataIndex];
            return getBarColor(value);
          },
          borderWidth: 0,
          borderRadius: 4,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        }]
      };
      
      const chart = new Chart(ctx, {
        type: 'bar',
        data: attributesData,
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleFont: {
                size: 14,
                weight: 'bold'
              },
              bodyFont: {
                size: 13
              },
              padding: 12,
              callbacks: {
                label: function(context) {
                  const value = context.raw;
                  let status = 'Nurture';
                  if (value >= 70) status = 'Sustain';
                  else if (value >= 40) status = 'Grow';
                  return `${value}% (${status})`;
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 100,
              grid: {
                color: function(context) {
                  if (context.tick.value === 40 || context.tick.value === 70) {
                    return 'rgba(0,0,0,0.15)';
                  }
                  return 'rgba(0,0,0,0.05)';
                },
                lineWidth: function(context) {
                  if (context.tick.value === 40 || context.tick.value === 70) {
                    return 1;
                  }
                  return 0.5;
                }
              },
              ticks: {
                callback: function(value) {
                  return value + '%';
                },
                font: {
                  size: 11
                },
                color: '#666',
                padding: 10
              }
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 12,
                  weight: 'bold'
                },
                color: '#333',
                padding: 12
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 20,
              right: 25,
              bottom: 10,
              left: 10
            }
          }
        }
      });
    });
  </script>
</body>