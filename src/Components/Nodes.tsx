import { CustomNode } from "../types/types";
import { SetNodesFunction } from "../types/types";
export const createNewNode = (
  nodes: CustomNode[],
  setNodes: SetNodesFunction
) => {
  const newNodeId = Date.now().toString();
  const newNode: CustomNode = {
    id: newNodeId,
    position: { x: 400, y: Math.random() * 600 },
    data: { label: `Node ${newNodeId}` },
  };
  setNodes((nds) => [...nds, newNode]);
};

export const handleAddNode = (
  nodes: CustomNode[],
  setNodes: SetNodesFunction
) => {
  createNewNode(nodes, setNodes);
};

// export const useCustomNodeState = () => {
//   const [nodes, setNodes] = React.useState<CustomNode[]>([]);

//   const addNode = (newNode: CustomNode) => {
//     setNodes(prevNodes => [...prevNodes, newNode]);
//   };

//   return [nodes, addNode] as const;
// };
