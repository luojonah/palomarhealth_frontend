---
title: Feature Documentation
description: 
layout: post
permalink: /documentation
type: ccc
toc: True
comments: True
---

#  AP Grade Predictor: Using Machine Learning to Forecast Student Performance

**Project by**: [luojonah/palomarhealth_frontend](https://github.com/luojonah/palomarhealth_frontend)  
**Related Issues**: [#32 - Show Saved Grade After Login](https://github.com/luojonah/palomarhealth_frontend/issues/32), [#28 - Grade Saves to Profile](https://github.com/luojonah/palomarhealth_frontend/issues/28)

---

##  Overview

Our **AP Grade Predictor** is a machine learning-powered web feature designed to give students an estimate of their grade based on their self-assessment. This project is integrated into the Palomar Health Frontend and leverages a trained regression model to generate both a percentage score and a letter grade. The results are saved to the user’s profile for easy retrieval.

---

##  The Machine Learning Model

We trained a **Linear Regression model** using a dataset of student characteristics and their actual grades. The dataset includes 11 input features, all scored from 1–5:

- Attendance  
- Work Habits  
- Behavior  
- Timeliness  
- Advocacy  
- Tech Growth  
- Tech Sense  
- Tech Talk  
- Communication and Collaboration  
- Leadership  
- Integrity

###  Binarizing Input

Before feeding data into the model, we simplify (binarize) the input:
- Ratings of 1–3 become `0`
- Ratings of 4–5 become `1`

This gives a rough estimate of student behavior and performance trends without relying on overly fine-grained data.

###  Output

The model predicts a **percentage score**, which is then converted into a **letter grade** using standard grading thresholds:


---

## 🧠 Backend API

We built a REST API using **Flask** to serve the model:

- POST `/api/grade/predict`
- GET `/api/grade/predict` *(JWT-protected)*

### POST `/predict`

- Accepts JSON with an `inputs` list of 11 values (each between 1 and 5)
- Returns predicted percent and letter grade

### GET `/predict` *(JWT Protected)*

- Returns the **saved grade prediction** from the user's profile

This ensures that users can retrieve their grade later without needing to re-enter their inputs.

---

##  Authentication

We protect the GET endpoint using JWT-based authentication. Only logged-in users can retrieve their saved predictions, which are stored in the database under their user profile.

---

##  Frontend Integration

We tackled a few issues to make the frontend fully functional:

###  [Issue #28](https://github.com/luojonah/palomarhealth_frontend/issues/28)  
We ensured that after a user submits their self-assessment, the **predicted grade is saved to their profile**.

###  [Issue #32](https://github.com/luojonah/palomarhealth_frontend/issues/32)  
We added logic so that when users **log back in**, their previously saved prediction is displayed.

---

##  Tech Stack

- **Frontend**: HTML / Bootstrap (Palomar Health UI)
- **Backend**: Flask, Flask-RESTful, JWT Authorization
- **ML**: Scikit-learn (Linear Regression)
- **Data**: Custom CSV dataset of self-reported academic habits and grades

---

#  Raw Backend Code (API + Model)

## `grade_api` and Predict API Resource
```python
from flask import Blueprint, request, jsonify, g
from flask_restful import Api, Resource
from api.jwt_authorize import token_required
from model.user import User
from model.grade_model import GradePredictionModel

grade_api = Blueprint('grade_api', __name__, url_prefix='/api/grade')
api = Api(grade_api)

model_instance = GradePredictionModel()

class Predict(Resource):
    def post(self):
        data = request.get_json()

        if not data or 'inputs' not in data:
            return {"error": "Missing 'inputs' field in JSON payload. Expected a list of 11 numbers (1-5)."}, 400

        user_input = data['inputs']

        if len(user_input) != 11:
            return {"error": f"Expected 11 input values, received {len(user_input)}."}, 400

        try:
            user_input = [int(val) for val in user_input]
        except ValueError:
            return {"error": "All input values must be numbers between 1 and 5."}, 400

        if not all(1 <= val <= 5 for val in user_input):
            return {"error": "Input values should be between 1 and 5."}, 400

        percent, letter = model_instance.predict(user_input)

        return jsonify({
            'predicted_percent': percent,
            'predicted_grade': letter
        })

    @token_required()
    def get(self):
        user = g.current_user
        return jsonify(user.grade_data)

api.add_resource(Predict, '/predict')
```
```python
import pandas as pd
from sklearn.linear_model import LinearRegression

class GradePredictionModel:
    def __init__(self):
        data = pd.read_csv("datasets/ap_predict_data.csv")
        data = data.dropna(subset=['Grade'])
        data.columns = data.columns.str.strip()

        grade_map = {'A': 90, 'B': 80, 'C': 70, 'D': 60, 'F': 50}
        data['GradePercent'] = data['Grade'].map(grade_map)

        self.features = ['Attendance','Work Habits','Behavior','Timeliness','Advocacy','Tech Growth',
                         'Tech Sense','Tech Talk','Communication and Collaboration','Leadership','Integrity']

        X = data[self.features]
        y = data['GradePercent']

        self.model = LinearRegression()
        self.model.fit(X, y)

    def predict(self, user_input):
        if len(user_input) != len(self.features):
            raise ValueError(f"Expected {len(self.features)} inputs, got {len(user_input)}")

        binarized = [0 if x <= 3 else 1 for x in user_input]
        percent = self.model.predict([binarized])[0]
        percent = max(0, min(100, percent))

        if percent >= 90:
            letter = 'A'
        elif percent >= 80:
            letter = 'B'
        elif percent >= 70:
            letter = 'C'
        elif percent >= 60:
            letter = 'D'
        else:
            letter = 'F'

        return round(percent, 2), letter
```