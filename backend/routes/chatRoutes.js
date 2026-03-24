const express = require("express");
const router = express.Router();
const axios = require("axios");
const Chat = require("../models/Chat");

// ==================== ASK AI ====================
router.post("/ask-ai", async (req, res) => {
  const { prompt } = req.body;

  try {
    // REAL AI IMPLEMENTATION (OpenRouter)

    /*
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "google/gemini-2.0-flash-lite-preview-02-05:free",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ai-flow-builder-nu.vercel.app",
          "X-Title": "AI Flow Builder"
        }
      }
    );

    return res.json({
      result: response.data.choices[0].message.content
    });
    */

    // TEMP MOCK RESPONSE (USED FOR DEMO)

    res.json({
      result: `AI Response for: ${prompt}`,
    });
  } catch (err) {
    console.log("ERROR:", err.message);

    res.status(500).json({
      error: err.message,
    });
  }
});

router.post("/save", async (req, res) => {
  const { prompt, response } = req.body;

  try {
    const data = await Chat.create({ prompt, response });
    res.json(data);
  } catch (err) {
    console.log("DB ERROR:", err.message);

    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
