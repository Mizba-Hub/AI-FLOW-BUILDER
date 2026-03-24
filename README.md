# AI Flow Builder (MERN Task)

## Overview
This is a MERN stack application where users can enter a prompt, get an AI-generated response, and save the data to MongoDB. The app demonstrates integration between frontend, backend, AI API, and database.

---

## Features
- Input prompt using React Flow node
- Get AI response using OpenRouter API
- Save prompt and response to MongoDB
- Simple and clean user interface
- Fixed flow-based UI 

---

## Tech Stack
- **Frontend:** React, React Flow
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **API:** OpenRouter AI

---

## Folder Structure

FUTUREBLINK-MERN-TASK/
│
├── backend/ # Node.js + Express API
├── frontend/ # React application
├── .gitignore
├── README.md


---

## How to Run Locally

🔹 Backend
```bash
cd backend
npm install
node server.js

🔹 Frontend
cd frontend
npm install
npm start

🔹API Endpoints
Ask AI
POST /api/ask-ai
Save Data
POST /api/save

🔹Application Flow

User enters prompt -> Frontend sends request -> Backend calls OpenRouter API -> Response returned -> Displayed in UI -> Saved to MongoDB

🔹Demo
https://www.loom.com/share/8d968fc3e2034db4a267b7360b7a6c6f


🔹Live Demo
https://ai-flow-builder-nu.vercel.app/


🔹Note
OpenRouter API integration is implemented in the backend.
Due to API credit limitations, a mock response is used for demonstration.

🔹Author
Fathimathul Mizba