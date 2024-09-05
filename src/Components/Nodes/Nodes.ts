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
      data: { label: `Default Node ` },
      style: {
        border: "1px solid black",
        display: "flex",
        height: 40,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      },
    };
  } else if (shape === "oval") {
    newNode = {
      id: newNodeId,
      type: "oval",
      position: { x: 400, y: Math.random() * 600 },
      data: { label: `Circle Node ` },
      style: {
        border: "1px solid black",
        borderRadius: "50%",
        height: 70,
        width: 140,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      },
    };
  } else if (shape === "diamond") {
    newNode = {
      id: newNodeId,
      type: "diamond",
      position: { x: 400, y: Math.random() * 600 },
      data: { label: `Diamond Node ` },
      style: {
        border: "1px solid black",
        height: 100,
        width: 100,
        // transform:"rotate(45deg)",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
      },
    };
  } else if (shape === "comment") {
    newNode = {
      id: newNodeId,
      type: "comment",
      position: { x: 400, y: 400 },
      data: { label: `comment Node` },
      style: {
        borderRadius: "5px",
        height: 100,
        width: 100,
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
      },
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
