---
title: Feature Documentation
description: 
layout: post
permalink: /documentation1
type: ccc
toc: True
comments: True
---

# AP Grade Predictor Documentation

## Overview
Machine learning-powered web feature that estimates student grades based on self-assessment data. Integrated into Palomar Health Frontend with profile persistence.

**Project**: [luojonah/palomarhealth_frontend](https://github.com/luojonah/palomarhealth_frontend)  
**Issues**: [#32](https://github.com/luojonah/palomarhealth_frontend/issues/32), [#28](https://github.com/luojonah/palomarhealth_frontend/issues/28)


## User Stories:

### 1. AP Grade Predictor: Tarun
As a high school student using the Palomar Health frontend,
I want to input my ratings for personal and academic behaviors (like attendance, leadership, and tech skills),
so that I can receive a predicted percentage and letter grade that reflects my performance and helps me understand where I need to improve.

### 2. AP Exam Predictor: Arya 
As a student preparing for the AP Computer Science Principles exam,
I want to enter my multiple choice and FRQ practice scores,
so that the system can calculate a projected AP score based on my performance and give me feedback on how close I am to my goal score.

### 3. Study Tracker: Akshaj
As a user studying for the AP CSP exam,
I want to check off subtopics as I study them and save my progress,
so that I can clearly see what I’ve covered, monitor my progress through the curriculum, and stay organized throughout my exam prep.

### 4. Profile Page: Jonah
As a logged-in student,
I want to view a summary of my past grade predictions, AP exam scores, and study progress,
so that I can track my improvements over time and easily revisit my previous results for motivation and planning.



<img src="{{site.baseurl}}/images/flowchart.png" alt="Viralyze Logo" class="logo" />

## Machine Learning Model

| Component | Details |
|-----------|---------|
| **Model Type** | Linear Regression |
| **Input Features** | 11 characteristics (1-5 scale) |
| **Output** | Percentage score + Letter grade |
| **Training Data** | Student characteristics and actual grades |

### Input Features

| Feature | Description | Scale |
|---------|-------------|-------|
| Attendance | Class attendance rate | 1-5 |
| Work Habits | Study consistency | 1-5 |
| Behavior | Classroom conduct | 1-5 |
| Timeliness | Assignment submission | 1-5 |
| Advocacy | Self-advocacy skills | 1-5 |
| Tech Growth | Technology learning | 1-5 |
| Tech Sense | Technical understanding | 1-5 |
| Tech Talk | Technical communication | 1-5 |
| Communication and Collaboration | Teamwork skills | 1-5 |
| Leadership | Leadership abilities | 1-5 |
| Integrity | Academic honesty | 1-5 |

### Data Processing

| Step | Process | Result |
|------|---------|--------|
| **Input Binarization** | Ratings 1-3 → 0, Ratings 4-5 → 1 | Simplified binary features |
| **Grade Mapping** | A=90, B=80, C=70, D=60, F=50 | Numerical targets |
| **Prediction Range** | Clamp output between 0-100 | Valid percentage scores |

### Grade Conversion

| Percentage Range | Letter Grade |
|------------------|--------------|
| 90-100 | A |
| 80-89 | B |
| 70-79 | C |
| 60-69 | D |
| 0-59 | F |

## API Endpoints

| Method | Endpoint | Authentication | Purpose |
|--------|----------|----------------|---------|
| POST | `/api/grade/predict` | None | Submit assessment, get prediction |
| GET | `/api/grade/predict` | JWT Required | Retrieve saved prediction |

### POST Request Format
```json
{
  "inputs": [4, 5, 3, 4, 2, 5, 4, 3, 4, 5, 4]
}
```

### Response Format
```json
{
  "predicted_percent": 85.67,
  "predicted_grade": "B"
}
```

## Technical Implementation

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | HTML/Bootstrap | User interface |
| **Backend** | Flask, Flask-RESTful | API server |
| **Authentication** | JWT | Secure user sessions |
| **Data Storage** | CSV → Database | User profile persistence |

## Key Features

| Feature | Implementation | Benefit |
|---------|----------------|---------|
| **Profile Persistence** | JWT-protected storage | Users can retrieve saved predictions |
| **Real-time Prediction** | Linear regression model | Instant feedback on assessment |
| **Input Validation** | Range checking (1-5) | Prevents invalid data |
| **Grade History** | Database integration | Track prediction over time |

# AP CSP Study System Documentation

## System Overview

The AP Computer Science Principles Study System consists of two integrated tools designed to help students prepare for the AP exam through practice tracking and score prediction.

### Core Components

| Component | Function | Technology |
|-----------|----------|------------|
| **Exam Predictor** | Score prediction and practice tracking | HTML5, Vanilla JS, CSS3 |
| **Study Tracker** | Topic progress monitoring | Bootstrap 5, LocalStorage/API |

## 1. Exam Predictor

### Architecture Flow

<img src="{{site.baseurl}}/images/flowchart1.png" alt="Viralyze Logo" class="logo" />

### Key Features

#### Practice Tracking System
**MCQ Practice Tests**: 2018, 2020, 2021 exams (70 points each)
**FRQ Practice**: Create Performance Task (6 points)
**Time Tracking**: Minutes spent per section
**Confidence Levels**: Based on number of completed practices

#### Scoring Algorithm

```javascript
// Core prediction logic
const compositeScore = (avgMCQ * 0.7) + (practiceFRQ * 5 * 0.3);
const scaledScore = (compositeScore / 65) * 100;

// AP Score mapping
if (scaledScore >= 90) apScore = 5;
else if (scaledScore >= 81) apScore = 4;
else if (scaledScore >= 42) apScore = 3;
else if (scaledScore >= 30) apScore = 2;
```


### State Management

| Variable | Purpose | Range |
|----------|---------|-------|
| `mcq2018-2021` | Practice test scores | 0-70 |
| `practicefrq` | FRQ score | 0-6 |
| `*Time` variables | Time tracking | 0-∞ minutes |
| `compositeScore` | Weighted total | 0-100 |

## 2. Study Tracker

<img src="{{site.baseurl}}/images/flowchart2.png" alt="Viralyze Logo" width=350 class="logo" />


### Data Structure

#### Topics Hierarchy
```javascript
const topicsData = [
  {
    title: "Big Idea 1: Creative Development",
    subtopics: [
      "1.1 Collaboration",
      "1.2 Program Function and Purpose",
      // ... more subtopics
    ]
  }
  // ... 5 total big ideas
];
```


### Backend Integration

### Record Structure
```javascript
const studyRecord = {
  topic: "Big Idea X: Title",
  subtopic: "X.X Specific Topic",
  userName: currentUser.name,
  studied: true,
  timestamp: new Date().toISOString()
};
```

## Key Metrics

| Metric | Exam Predictor | Study Tracker |
|--------|---------------|---------------|
| Input Fields | 8 score + 4 time | 30+ subtopic buttons |
| Calculations | Real-time composite scoring | Progress percentage |
| Storage | Practice results + predictions | Study completion records |
| User Feedback | Confidence levels + breakdowns | Statistics dashboard |

## Maintenance Notes

### Regular Updates Required
- **Score Thresholds**: Adjust based on College Board changes
- **Topic Content**: Update for curriculum modifications
- **Browser Compatibility**: Test across modern browsers

### Monitoring Points
- **API Availability**: Server connection status
- **Data Integrity**: LocalStorage backup verification  
- **User Engagement**: Completion rates and usage patterns