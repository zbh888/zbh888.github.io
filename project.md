---
layout: default
title: Projects

---
I keep a list of my completed projects here as a reference in case I forget (Peer-reviewed publications are not included). All papers I have authored or co-authored have their code publicly available.

### [[2022] Academia and Industry Research Collaboration in NLP](https://arxiv.org/abs/2308.04524)
This work investigated the effects of collaboration between academia and industry on NLP. We created a pipeline to extract affiliations and citations from NLP papers and divided them into three categories: academia, industry, and hybrid (collaborations between academia and industry). Our empirical analysis found that there is a trend towards an increase in industry and academia-industry collaboration publications and that these types of publications tend to have a higher impact compared to those produced solely within academia.

### [[2022] Reinforcement Learning to Solve TSP: A Survey](https://uwaterloo.ca/scholar/sites/ca.scholar/files/b327zhan/files/bohanzhang_rl_tsp.pdf)
This paper surveys different heuristics using RL to solve travelling salesman problem. We discovered that pure deep learning based RL can only solve small-scale TSP. Also, we find combining traditional heuristic algorithms and RL is powerful.
The idea is similar as using RL as decision assistant, which helps to get a better solution in a reasonable time for large-scale TSP.

### [[2021] Threshold Signature Ecosystem](https://github.com/zbh888/FROSTsignature)
Built and tested a threshold signature ecosystem [(Flexible Round-Optimized Schnorr Threshold Signatures)](https://eprint.iacr.org/2020/852.pdf) in Golang. Manually reviewed side-channel attacks.

### [[2021] CamoGAM](https://github.com/jorchard/camouflage)
CamoGAN project combines GAN (CNN layers) and statistic method to simulate better the evolution of
predators and prey (moth), aiming to generate moth camouflage and provide potential insights into Biology. The generated
camouflage image is hard to find, which is very deceptive to the human visualization.

### [[2021] Bitcoin Price Prediction](https://github.com/zbh888/BigDataProject)
To see if cryptocurrency price changing direction every minute is related to some weak influencing factors, this research
project was carried out by using the information from big data set like Reddit, and bitcoin price from 2015-2021 to build a
prediction model, with distributed deep learning framework to speed up the learning process. Specifically, we used NLP tools to analyze people's attitude towards bitcoin investment from Reddit comments.
This project involves big data management system such as HDFS and distributed computing framework such as Apache Spark. Of course, we failed to make good prediction model.

### [[2021] MeetSum](https://arxiv.org/abs/2108.06310)
MeetSum transforms the meeting transcript to summarization using transformers. The meeting corpus is usually confidential and limited in quantity, which weakens building a neural 
network summarizing model. This research studied some combination of data sets to solve that problem, and results generated
high-quality summarization with a very limited meeting corpus. 

### [[2021] Gesture Recognizer](https://github.com/zbh888/SoftwareDesign/tree/main/Gesture%20Recognizer)
Gesture Recognizer is an Android app. The app allows users to draw, modify and save gestures. When user draw gestures on board, the app can compute similarity and discover the saved gesture. This was implemented using Java with AndroidX

### [[2021] Bezier Curve Board](https://github.com/zbh888/SoftwareDesign/tree/main/Bezier%20Curve)
Bezier Curve Board is a GUI for users to draw, delete, copy, cut, paste, save and load Bezier curves. This was implemented in Java with JavaFX.

### [[2019] RAIInet](https://github.com/zbh888/SoftwareDesign/tree/main/RAIInet)
RAIInet is a board game implemented in C++, which supports 2 to 4 people to play with it. Each player has different strength of chessman, and different abilities. 
The graphic is supported using XWindows.