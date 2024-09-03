import React from "react";
import {
  Background,
  Controls,
  useNodesState,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Drawer from "./Drawer";
import { handleAddNode } from "./Nodes";
import useEdges from "./Edges";
import { CustomNode } from "../types/types";
import '../Styles/flow.css'
const initialNodes:CustomNode[]= [];

const Flow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const {
    edges,
    onEdgesChange,
    onConnect,
    onEdgesDelete,
    onSelectionChange,
    handleSelectLines,
  } = useEdges();

  const addNodeHandler = () => handleAddNode(nodes, setNodes);

  return (
    <div className="container">
      <Drawer onAddNode={addNodeHandler} onSelectLines={handleSelectLines} />
      <div className="flowConatiner">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgesDelete={onEdgesDelete}
          onSelectionChange={onSelectionChange}
          // selectNodesOnDrag={true}
defaultEdgeOptions={{type:'smoothstep'}}
        >
          <Controls />
          <Background color="blue" gap={6} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;