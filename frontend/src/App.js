import React, { useState } from "react";
import FlowCanvas from "./components/FlowCanvas";
import Controls from "./components/Controls";
import { askAI, saveData as saveAPI } from "./services/api";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const runFlow = async () => {
    if (!prompt) return alert("Enter prompt");

    setLoading(true);
    try {
      const res = await askAI(prompt);
      setResult(res.data.result);
    } catch (err) {
      alert("Error fetching AI response");
    }
    setLoading(false);
  };

  const saveData = async () => {
    try {
      await saveAPI(prompt, result);
      alert("Saved to DB ✅");
    } catch (err) {
      alert("Save failed");
    }
  };

  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <h2>AI Flow Builder</h2>

      <Controls runFlow={runFlow} saveData={saveData} loading={loading} />

      <FlowCanvas prompt={prompt} setPrompt={setPrompt} result={result} />
    </div>
  );
}

export default App;