---
toc: true
layout: post
title: Computing Bias Lesson
description: By Shawn Ray, Jonah Luo, Tarun Rayavarapu, Arya Savlani
---

# Computing Bias Lesson 🧠

## Introduction 📌

Computing bias occurs when computer systems systematically and unfairly discriminate against certain groups. Bias in computing can reinforce social inequalities, create unfair advantages, and lead to real-world harm. This lesson explores how bias emerges, real-world examples, and strategies for mitigation.

---

## What is Computing Bias? 

> "We can say that a computer system is biased if it both unfairly and systematically discriminates against one group in favor of another." – *Nissenbaum et al.* ([Cornell Paper](https://nissenbaum.tech.cornell.edu/papers/Discerning%20Bias%20in%20Computer%20Systems.pdf))

<h2>Doctor or Nurse Drawings 🎨</h2> 

<button id="roleButton">Get Role</button>
<p id="result"></p>

<style>
    button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    button:hover {
        background-color: #45a049;
    }
    #result {
        margin-top: 20px;
        font-size: 22px;
        font-weight: bold;
        color: #333;
    }
</style>

<script>
    document.getElementById("roleButton").addEventListener("click", function() {
        let role = Math.random() < 0.5 ? "Doctor" : "Nurse";
        document.getElementById("result").innerText = "Draw a: " + role;
    });
</script>

### **Types of Bias in Computing** 🔍

1. **Pre-existing Social Bias**
   - Originates from societal norms, stereotypes, or historical inequalities.
   - Embedded into technology due to biased data, biased creators, or societal influence.
   - **Examples:**
     - Hiring algorithms favoring men over women.
     - Facial recognition systems performing poorly on non-white faces.

2. **Technical Bias**
   - Stems from design, implementation, or structural limitations in technology.
   - Even systems built with good intentions may introduce bias through their function.
   - **Examples:**
     - Google Translate assigning gendered pronouns based on stereotypes.
     - Default settings not representing all user demographics.

3. **Emergent Social Bias**
   - Develops over time as a system interacts with users or adapts to real-world data.
   - AI models may evolve in a biased manner based on user interactions.
   - **Examples:**
     - AI chatbots learning harmful language from users.
     - Search engines amplifying biased content over time.

---
## **Solutions to Combat Biases**
#### **Pre-existing Social Biases**

**Bias Awareness Training**: 
- Train developers, engineers, and data scientists to recognize and understand social biases so they can mitigate them during the design and data collection process.
- Inclusive Design: Incorporate diverse perspectives during the design and development of algorithms to ensure that systems reflect multiple viewpoints and experiences. This could involve creating advisory boards or seeking feedback from underrepresented communities.
- Bias Mitigation in Data Collection: Regularly examine and adjust the sources of data to ensure that it does not reflect harmful stereotypes. This could mean auditing data for biases in terms of gender, race, or other social factors, and balancing it accordingly.

#### **Technical Bias**

**Transparent Algorithms** : 
- Implement algorithms that are explainable and transparent. This helps ensure that developers and users can understand how decisions are made and identify where bias might be creeping in.
- Bias Testing and Auditing: Implement continuous testing and auditing to ensure that algorithms are fair across various demographics and that the system doesn't favor certain groups over others due to technical choices.
- Improved Evaluation Metrics: Use fairness-aware metrics, such as statistical parity or equalized odds, when evaluating the performance of a model to ensure that no group is disproportionately disadvantaged by the technical decisions made.

#### **Emergent Social Bias**

**Human Oversight and Feedback Loops**: 
- Include human oversight mechanisms where AI systems or platforms can be monitored, and biased outputs can be corrected in real-time. Feedback loops from diverse user groups can help correct emergent biases.
- User Moderation and Controls: Implement strong moderation controls in social platforms, allowing users to flag harmful or biased content. This will help reduce the amplification of harmful behaviors and ideas.
- Algorithmic Accountability: Ensure that algorithms adapt to evolving social norms and values, so as biases emerge, they can be corrected. Employ systems of continuous learning that adjust based on changing cultural understandings and feedback.

---

#### **Question 1:**  ❓
A company implements an AI hiring system that unintentionally prefers male candidates over female candidates because it was trained on past hiring data from a male-dominated industry. What type of bias is this an example of?  

- A) Pre-existing Social Bias  
- B) Technical Bias  
- C) Emergent Social Bias  
- D) No Bias Present  

<details>  
<summary>Reveal Answer</summary>  

Answer: A) Pre-existing Social Bias  

This bias originates from societal inequalities reflected in historical hiring data.  
</details>  

---  

#### **Question 2:**  ❓
An AI-powered chatbot gradually starts using offensive language after interacting with online users who repeatedly expose it to toxic content. What type of bias does this represent?  

- A) Pre-existing Social Bias  
- B) Technical Bias  
- C) Emergent Social Bias  
- D) Algorithmic Efficiency Bias  

<details>  
<summary>Reveal Answer</summary>  

Answer: C) Emergent Social Bias  

The chatbot learns bias over time from user interactions, rather than being biased from the start.  
</details>

---

## Real-World Examples of Computing Bias 🌍

### **Amazon's AI Hiring Tool**
- **Bias Type:** Pre-existing Social Bias  
- Amazon's AI recruitment system favored male candidates due to past hiring data.
- The system penalized resumes with words like "women" (e.g., *“Women’s Chess Club”*).
- **Impact:** Women were unfairly ranked lower for job opportunities.  
🔗 [Read More](https://www.ml.cmu.edu/news/news-archive/2016-2020/2018/october/amazon-scraps-secret-artificial-intelligence-recruiting-engine-that-showed-biases-against-women.html)

### **Google Translate Gender Bias**
- **Bias Type:** Technical Bias  
- When translating from gender-neutral languages, it introduced gender assumptions.
- Example:
  - Turkish: *O bir doktor* → English: *He is a doctor*  
  - Turkish: *O bir hemşire* → English: *She is a nurse*  
- **Impact:** Reinforced stereotypes about professions.  
🔗 [Read More](https://qz.com/1141122/google-translates-gender-bias-pairs-he-with-hardworking-and-she-with-lazy-and-other-examples)

### **Microsoft’s AI Chatbot Tay**
- **Bias Type:** Emergent Social Bias  
- Tay learned from Twitter interactions but was manipulated into tweeting racist and offensive content within 24 hours.
- **Impact:** AI can absorb and amplify human biases without proper safeguards.  
🔗 [Read More](https://fortune.com/longform/ai-bias-problem)

---

(Insert Bias Mitigations here)

| **MCQ Topic** | **Connection to Computing Bias** |
|-----------|---------------------------------|
| **2.3: Extracting Information from Data** | Bias can emerge when datasets are skewed or incomplete, leading to biased AI predictions and decisions. |
| **3.12: Calling Procedures** | If biased functions or APIs are repeatedly used, the bias spreads throughout a system, such as facial recognition errors. |
| **3.17: Algorithmic Efficiency** | Some efficient algorithms may prioritize speed over fairness, reinforcing biases in search engines or recommendation systems. |
| **5.1: Beneficial and Harmful Effects** | Biased algorithms can offer personalized recommendations (benefit) but may also create filter bubbles and reinforce stereotypes (harm). |
| **5.2: Digital Divide** | Bias in computing can worsen accessibility gaps, such as voice recognition software struggling with non-native accents. |
