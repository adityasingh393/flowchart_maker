import { CustomNode, SetNodesFunction } from "../../types/types";

export const createNewNode = (
  nodes: CustomNode[],
  setNodes: SetNodesFunction,
  shape: "rectangel" | "diamond" | "oval" | "comment"
) => {
  const newNodeId = Date.now().toString();

  let newNode: CustomNode;

  if (shape === "rectangel") {
    newNode = {
      id: newNodeId,
      type: "rectangel",
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
  } else if (shape === "comment") {
    newNode = {
      id: newNodeId,
      type: "comment",
      position: { x: 400, y: 400 },
      data: { label: `comment Node` },
    };
  }

  setNodes((nds) => [...nds, newNode]);
};

export const handleAddNode = (
  nodes: CustomNode[],
  setNodes: SetNodesFunction,
  shape: "rectangel" | "diamond" | "oval" | "comment"
) => {
  createNewNode(nodes, setNodes, shape);
};
