import { CustomNode, SetNodesFunction } from "../../types/types";

export const createNewNode = (
  nodes: CustomNode[],
  setNodes: SetNodesFunction,
  shape: "default" | "circle" | "diamond" | "oval"
) => {
  const newNodeId = Date.now().toString();

  let newNode: CustomNode;

  if (shape === "default") {
    newNode = {
      id: newNodeId,
      type: "default",
      position: { x: 400, y: Math.random() * 600 },
      data: { label: `Default Node ${newNodeId}` },
    };
  } else if (shape === "oval") {
    newNode = {
      id: newNodeId,
      type: "oval",
      position: { x: 400, y: Math.random() * 600 },
      data: { label: `Circle Node ${newNodeId}` },
    };
  } else if (shape === "diamond") {
    newNode = {
      id: newNodeId,
      type: "diamond",
      position: { x: 400, y: Math.random() * 600 },
      data: { label: `Diamond Node ${newNodeId}` },
    };
  }

  setNodes((nds) => [...nds, newNode]);
};

export const handleAddNode = (
  nodes: CustomNode[],
  setNodes: SetNodesFunction,
  shape: "default" |  "diamond" | "oval"
) => {
  createNewNode(nodes, setNodes, shape);
};
