🛡️ AI Insider Threat Detection Dashboard

A full-stack cybersecurity monitoring dashboard that analyzes user activity logs, scores each event by risk, and surfaces AI-style security insights — built for spotting insider threats like suspicious downloads, unusual logins, and unauthorized data access.

📖 Overview

Insider threats — employees or accounts misusing legitimate access — are notoriously hard to catch with traditional perimeter security. This project simulates a Security Operations Center (SOC) dashboard that ingests user activity records (logins, downloads, file access, etc.), assigns each one a risk score, and flags high-risk behavior in real time.

Each activity is enriched with a short, rule-based "AI Analysis" note explaining why it might be risky (e.g. brute-force attempts, data exfiltration, unauthorized HR access), giving analysts context at a glance instead of raw logs.

✨ Features

📊 Live risk dashboard — total users, and high/medium/low risk counts at a glance
🥧 Risk distribution chart — interactive pie chart (Chart.js) visualizing risk severity breakdown
🚨 Security alerts panel — automatically surfaces all high-risk events (≥ 35 risk points)
🤖 AI security summary — auto-generated plain-English summary of the current threat landscape
🔍 Live search — filter activity feed instantly by username
🧠 Per-activity AI analysis — contextual explanation for each event (failed logins, downloads, USB activity, HR access, etc.)
🎨 Color-coded severity badges — 🔴 High / 🟠 Medium / 🟢 Low, styled with Tailwind CSS


🛠️ Tech Stack

Frontend: 

React 19 + Vite
Tailwind CSS 4
Chart.js via react-chartjs-2
React Icons

Frontend: https://ai-insider-threat-detection-rho.vercel.app

Backend:

Node.js + Express 5
MongoDB + Mongoose
cors, dotenv

Backend API: https://ai-insider-threat-detection-api.onrender.com

📁 Project Structure

AI-Insider-Threat-Detection/
├── client/                  # React + Vite frontend
│   └── src/
│       ├── components/
│       │   └── RiskChart.jsx
│       ├── App.jsx
│       └── main.jsx
└── server/                  # Express + MongoDB backend
    ├── models/
    │   └── Activity.js
    ├── routes/
    │   └── activityRoutes.js
    ├── data/
    │   └── activities.js    # sample/demo activity data
    ├── seed.js              # seeds MongoDB with demo users
    └── server.js

🚀 Installation

Prerequisites

Node.js v18+
A MongoDB connection string (local MongoDB or a free MongoDB Atlas cluster)


1. Clone the repo

bashgit clone https://github.com/garimarajput-coder/AI-Insider-Threat-Detection.git
cd AI-Insider-Threat-Detection

2. Set up the backend

bashcd server
npm install

3. Create a .env file inside server/:

envMONGO_URI=your_mongodb_connection_string
PORT=5000

4. Seed the database with demo activity data:

bashnode seed.js

5. Start the API server:

bashnpm run dev

6. The API will run at http://localhost:5000.

7. Set up the frontend

8. In a new terminal:

bashcd client
npm install
npm run dev

The dashboard will run at http://localhost:5173 (Vite's default port).

Note: The frontend currently calls the API at http://localhost:5000/api/activities directly. For deployment, update this to an environment variable pointing at your deployed backend URL.


🗺️ Roadmap

 Replace rule-based "AI Analysis" with a real ML/LLM-based risk classifier
 Add authentication for analyst logins
 Persist and paginate large activity datasets
 Deploy live demo (frontend on Vercel, backend on Render/Railway)
 
📄 License

This project is licensed under the MIT License.
