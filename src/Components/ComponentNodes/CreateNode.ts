import { CustomNode, SetNodesFunction } from "../../types";
import { v4 as uuidv4 } from "uuid";
export const createNewNode = (
  _: CustomNode[],
  setNodes: SetNodesFunction,
  shape: "rectangel" | "diamond" | "oval" | "comment"
) => {
  const newNodeId = uuidv4();

  let newNode: CustomNode;

  switch (shape) {
    case "rectangel":
      newNode = {
        id: newNodeId,
        type: "rectangel",
        position: { x: 400, y: Math.random() * 600 },
        data: { label: `Default Node` },
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
      break;
    case "oval":
      newNode = {
        id: newNodeId,
        type: "oval",
        position: { x: 400, y: Math.random() * 600 },
        data: { label: `Circle Node` },
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
      break;
    case "diamond":
      newNode = {
        id: newNodeId,
        type: "diamond",
        position: { x: 400, y: Math.random() * 600 },
        data: { label: `Diamond Node` },
        style: {
          height: 100,
          width: 100,
        },
      };
      break;
    case "comment":
      newNode = {
        id: newNodeId,
        type: "comment",
        position: { x: 400, y: 400 },
        data: { label: `Comment Node` },
        style: {
          borderRadius: "5px",
          height: 80,
          width: 150,
          border: "1px solid",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "center",
        },
      };
      break;
    default:
      alert("unkown shape has been selelcted");
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
