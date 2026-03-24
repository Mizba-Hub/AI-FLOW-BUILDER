const express = require('express');
const router = express.Router();
const axios = require('axios');
const Chat = require('../models/Chat');


router.post('/ask-ai', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
      model: "meta-llama/llama-3-8b-instruct:free",
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

    res.json({
      result: response.data.choices[0].message.content
    });

  } catch (err) {
    console.log("ERROR DATA:", err.response?.data);
    console.log("ERROR STATUS:", err.response?.status);
    console.log("ERROR MESSAGE:", err.message);

    res.status(500).json({
      error: err.response?.data || err.message
    });
  }
});
module.exports = router;