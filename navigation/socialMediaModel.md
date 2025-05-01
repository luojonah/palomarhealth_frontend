---
layout: post
title: Social Media Model
search_exclude: false
description: Viralyze's social media model built off of static data. It will generate the predicted number of likes a post on twitter may get
permalink: /socialMediaModel
toc: false
comments: false
---
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* General body styles */
        body {
            background: linear-gradient(to right, #1b2e4f, #4a9eda);
            font-family: 'Poppins', sans-serif;
            color: white;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding-top: 30px;
            box-sizing: border-box;
            text-align: center;
            position: relative; /* Add relative positioning to the body */
        }
        /* Main title */
        .main-title {
            color: white;
            font-size: 3.5rem;
            margin-bottom: 2rem;
            text-align: center;
            animation: fadeIn 1.5s forwards;
        }
        @keyframes fadeIn {
            100% {
                opacity: 1;
            }
        }
        /* Card styles */
        .card {
            background-color: white;
            color: black;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
            max-width: 450px;
            width: 95%;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .card h1{
           color: black;
           font-size: 2rem;
           margin-bottom: 1.5rem;
        }
        /* Label styling */
        label {
            display: block;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            color: #888;
            font-weight: bold;
            text-align: left;
            width: 100%;
        }
        /* Input styling */
        input, select, textarea {
            width: calc(100% - 24px);
            padding: 0.75rem;
            border-radius: 30px;
            border: 2px solid #546bff;
            background-color: white;
            color: black;
            font-size: 1rem;
            margin-bottom: 1rem;
            text-align: center;
            box-sizing: border-box;
            transition: all 0.3s ease;
        }
       input::placeholder, textarea::placeholder {
            color: #888;
            text-align: center;
        }
        select {
            appearance: none; /* Remove default arrow */
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M50 65L15 35h70z" fill="%23888"/></svg>'); /* Custom arrow */
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 20px;
        }
        /* Button styling */
        button {
            margin-top: 1.5rem;
            width: 100%;
            padding: 0.8rem;
            font-size: 1rem;
            background-color: #546bff;
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
             box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
        }
        button:hover {
            background-color: #3a54c6;
        }
        clear-button{
            background-color: #ff6b6b;
            color: white;
            margin-top: 1.5rem;
            width: 100%;
            padding: 0.8rem;
            font-size: 1rem;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
             box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
        }
        .clear-button:hover{
             background-color: #ff4757;
        }
        /* Circle container */
        .circle-container {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /* Circle design */
        .circle {
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: conic-gradient(#00cec9 0%, #0984e3 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-weight: bold;
            color: white;
            box-shadow: 0 0 20px rgba(0, 206, 201, 0.5);
            border: 6px solid #ffffff;
            margin-top: 1rem;
        }
        /* Circle overlay */
        .circle::before {
            content: '';
            position: absolute;
            width: 160px;
            height: 160px;
            background: white;
            border-radius: 50%;
            z-index: 2;
        }
        .circle .percentage {
            z-index: 3;
            color: black;
        }
        /* Ensure there's no padding/margin left from navbar elements */
        body {
            padding-top: 0 !important;
        }
        /* Ensure content fills entire page  */
        .container {
            margin-top: 0 !important;
            padding-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        textarea {
            resize: none;
            height: 100px;
        }
    </style>
</head>

Welcome to Viralyze's Social Media Model built on static data in order to predict a post on Twitter's reception, with data coming from Palomar Health's previous posts
## How to Use?
1. Paste the text of your tweet into the following text box
2. Define whether or not this post is a retweet or not
3. Declare whether there is a attached piece of media, such as a video or image
4. Click "Confirm" and wait for the result!

<div id="socialMediaModel">
</div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    document.addEventListener("DOMContentLoaded", function () {
        // Create form
        const form = document.createElement("form");

        // --- Tweet Text ---
        const tweetLabel = document.createElement("label");
        tweetLabel.textContent = "Tweet Text: ";
        tweetLabel.setAttribute("for", "tweetText");

        const tweetTextArea = document.createElement("textarea");
        tweetTextArea.id = "tweetText";
        tweetTextArea.name = "tweetText";
        tweetTextArea.rows = 4;
        tweetTextArea.cols = 50;
        tweetTextArea.style.resize = "vertical";

        form.appendChild(tweetLabel);
        form.appendChild(document.createElement("br"));
        form.appendChild(tweetTextArea);
        form.appendChild(document.createElement("br"));

        // --- Is a retweet? ---
        const retweetLabel = document.createElement("label");
        retweetLabel.textContent = "Is a retweet? ";
        retweetLabel.setAttribute("for", "isRetweet");

        const retweetSelect = document.createElement("select");
        retweetSelect.id = "isRetweet";
        retweetSelect.name = "isRetweet";

        ["False", "True"].forEach(value => {
            const option = document.createElement("option");
            option.value = value.toLowerCase();
            option.textContent = value;
            retweetSelect.appendChild(option);
        });

        form.appendChild(retweetLabel);
        form.appendChild(retweetSelect);
        form.appendChild(document.createElement("br"));

        // --- Contains Media? ---
        const mediaLabel = document.createElement("label");
        mediaLabel.textContent = "Contains Media? ";
        mediaLabel.setAttribute("for", "containsMedia");

        const mediaSelect = document.createElement("select");
        mediaSelect.id = "containsMedia";
        mediaSelect.name = "containsMedia";

        ["None", "Image", "Video"].forEach(value => {
            const option = document.createElement("option");
            option.value = value.toLowerCase();
            option.textContent = value;
            mediaSelect.appendChild(option);
        });

        form.appendChild(mediaLabel);
        form.appendChild(mediaSelect);
        form.appendChild(document.createElement("br"));

        // --- Confirm Button ---
        const confirmButton = document.createElement("button");
        confirmButton.type = "button";
        confirmButton.textContent = "Confirm";
        confirmButton.addEventListener("click", sendData);
        form.appendChild(confirmButton);

        // Append form to designated container
        document.getElementById("socialMediaModel").appendChild(form);
    });

    async function sendData() {
        const tweetText = document.getElementById('tweetText').value.trim();
        const isRetweet = document.getElementById('isRetweet').value;
        let containsMedia = document.getElementById('containsMedia').value;
        // Convert "none" to 0
        if (containsMedia.toLowerCase() === "none") {
            containsMedia = 0;
        }

        try {
            const postApiUrl = `${pythonURI}/socialMediaModel`;
            const postApiRequest = await fetch(postApiUrl, {
                ...fetchOptions,
                method: "POST",
                body: JSON.stringify({
                    "tweet_text": tweetText,
                    "is_retweet": isRetweet, // snake_case as requested
                    "type": containsMedia
                })
            });

            const postData = await postApiRequest.json();
            console.log(postData);

            // Create a <p> element below the Confirm button to display the prediction
            const predictionParagraph = document.createElement("p");
            predictionParagraph.textContent = `Predicted Favorites: ${postData.predicted_favorites}`;
            predictionParagraph.style.marginTop = "30px";

            // Append the prediction below the confirm button
            const socialMediaModel = document.getElementById("socialMediaModel");
            socialMediaModel.appendChild(predictionParagraph);

        } catch (error) {
            console.error('Error sending data:', error);
        }
    }
</script>
