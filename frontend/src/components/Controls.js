import React from "react";

const Controls = ({ runFlow, saveData, loading }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
     <button
  onClick={runFlow}
  disabled={loading}
  style={{
    padding: "8px 15px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  {loading ? "Running..." : "Run Flow"}
</button>

<button
  onClick={saveData}
  style={{
    marginLeft: "10px",
    padding: "8px 15px",
    background: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Save
</button>
    </div>
  );
};

export default Controls;