# 🌐 IoT AI Tutor — Intelligent Learning & Examination Assistant

A production-grade, full-stack AI tutoring platform designed specifically for the complete 5-Unit Internet of Things (IoT) curriculum. Built with the **MERN Stack**, **Vector RAG Engine**, **Anthropic Claude 3.5 Sonnet Obsidian & Terracotta Design**, **Interactive Artifacts System**, and **Strict Syllabus Boundary Guardrails**.

---

## 🌟 Key Features

- **Strict 5-Unit Syllabus Guardrail**: Only answers questions from the official IoT syllabus. Any out-of-syllabus query is instantly detected and returns:
  > *"This question is out of syllabus and we cannot give the answer of this question."*
- **Vector Knowledge Base & RAG**: Semantic retrieval across all 5 units:
  - **Unit 1**: Introduction, Physical & Logical Design, Enabling Technologies, Levels & Templates
  - **Unit 2**: Domain-Specific IoTs (Home, Cities, Environment, Energy, Retail, Logistics, Agriculture, Industry, Health)
  - **Unit 3**: IoT & M2M, Software Defined Networks (SDN), Network Function Virtualization (NFV)
  - **Unit 4**: IoT Platforms Design Methodology & Physical Devices (Raspberry Pi, ESP32, Arduino)
  - **Unit 5**: IoT Physical Servers, Cloud Offerings & Case Studies
- **Interactive Split Artifacts Panel**: Live firmware preview for ESP32/Arduino C++ sketches, JSON specs, and network topologies with 1-click copy and download.
- **Multi-Tier Answer Modes**:
  - **Short Notes** (2–3 marks definition & core formula)
  - **Standard Exam** (5–10 marks structured layout with architecture diagrams)
  - **Deep Dive** (15–20 marks comprehensive analysis with complete code & circuits)
- **Google & Student Authentication**: 1-click Google Sign-In, study streak tracking, and personalized avatar.
- **Hinglish & Multi-Language Support**: Seamlessly understands English, Hindi, and Hinglish technical questions.

---

## 🚀 Quick Start (Local Run)

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Frontend
```bash
npm run build
```

### 3. Run Production Server
```bash
npm start
```
The unified server will be running at `http://localhost:5000`, serving both the API and the React frontend.

---

## ☁️ 100% Free Cloud Deployment (Render.com)

This repository includes a pre-configured `render.yaml` for 1-click free deployment:

1. Create a repository on [GitHub](https://github.com) and push this codebase.
2. Sign in to [Render.com](https://render.com) using your GitHub account (No credit card required).
3. Click **New +** ➔ **Web Service** and select this repository.
4. Render will automatically detect the settings:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (750 free hours/month)
5. Click **Deploy Web Service** to get your permanent `https://<your-app>.onrender.com` URL.

---

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, Framer Motion, Canvas Confetti
- **Backend**: Node.js, Express.js, Custom Vector Store & RAG Engine
- **Styling**: Claude 3.5 Sonnet Palette (Obsidian `#0c0d14` & Terracotta `#d97757`)
- **Hosting**: Render.com / Node.js
