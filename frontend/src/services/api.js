import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const askAI = (prompt) => API.post("/ask-ai", { prompt });
export const saveData = (prompt, response) =>
  API.post("/save", { prompt, response });