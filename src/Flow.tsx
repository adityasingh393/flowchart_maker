import React from "react";
import { Edge, Node, ReactFlow } from "@xyflow/react";
import "./flow.css";
import "@xyflow/react/dist/style.css";

const nodes: Node[] = [
  {
    id: "1",
    data: {
      label: "ADITYA",
    },
    position: { x: 10, y: 10 },
  },
  {
    id: "2",
    data: {
      label: "SINGH",
    },
    position: { x: 100, y: 120 },
  },
];

const edges: Edge[] = [
  {
    id: "n1n2",
    source: "1",
    target: "2",
    animated: true,
  },
];
const Flow = () => {
  return (
    <div className="container">
      <ReactFlow nodes={nodes} edges={edges} color="green" />
    </div>
  );
};
export default Flow;
