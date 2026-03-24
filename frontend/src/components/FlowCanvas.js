import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const FlowCanvas = ({ prompt, setPrompt, result }) => {
  const nodes = [
    {
      id: "1",
      position: { x: 50, y: 100 },
      data: {
        label: (
          <textarea
            placeholder="Enter prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{
              width: "220px",
              height: "100px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "14px"
            }}
          />
        ),
      },
    },
    {
      id: "2",
      position: { x: 350, y: 80 },
      data: {
        label: (
          <div
            style={{
              width: "300px",
              height: "200px",
              draggable: false,
              overflowY: "auto",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
              fontSize: "14px",
              lineHeight: "1.5"
            }}
          >
            {result || "AI response will appear here..."}
          </div>
        ),
      },
    },
  ];

  const edges = [{ id: "e1-2", source: "1", target: "2" }];

  return<ReactFlow
  nodes={nodes}
  edges={edges}
  nodesDraggable={false}
  zoomOnScroll={false}
  panOnDrag={false}
  zoomOnPinch={false}
  panOnScroll={false}
  zoomOnDoubleClick={false}
  fitView
/>
};

export default FlowCanvas;