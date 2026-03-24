import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://ai-flow-backend-bblo.onrender.com/api" // live backend
      : "http://localhost:5000/api", //  local backend
});

export const askAI = (prompt) => API.post("/ask-ai", { prompt });

export const saveData = (prompt, response) =>
  API.post("/save", { prompt, response });
