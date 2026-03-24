import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-flow-backend-bblo.onrender.com/api"
});

export const askAI = (prompt) => API.post("/ask-ai", { prompt });

export const saveData = (prompt, response) =>
  API.post("/save", { prompt, response });