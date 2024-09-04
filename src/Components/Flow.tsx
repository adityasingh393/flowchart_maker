import React from "react";
import { Background, Controls, useNodesState, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Drawer from "./Drawer";
import { handleAddNode } from "./Nodes/Nodes";
import useEdges from "./Edges";
import DiamondNode from "./Nodes/DaimondNode";
import { CustomNode } from "../types/types";
import "../Styles/flow.css";
import CircularNode from "./Nodes/CircularNode";

const initialNodes: CustomNode[] = [];

const Flow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const {
    edges,
    onEdgesChange,
    onConnect,
    onEdgesDelete,
    onSelectionChange,
    handleEdgeTypeChange,
  } = useEdges();

  const addDefaultNodeHandler = () => handleAddNode(nodes, setNodes, "default");
  const addCircleNodeHandler = () => handleAddNode(nodes, setNodes, "oval");
  const addDiamondNodeHandler = () => handleAddNode(nodes, setNodes, "diamond");

  return (
    <div className="container">
      <Drawer
        onAddDefaultNode={addDefaultNodeHandler}
        onAddCircleNode={addCircleNodeHandler}
        onAddDiamondNode={addDiamondNodeHandler}
        onEdgeTypeChange={handleEdgeTypeChange}
      />
      <div className="flowConatiner">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgesDelete={onEdgesDelete}
          onSelectionChange={onSelectionChange}
          nodeTypes={{ diamond: DiamondNode, oval: CircularNode }}
          defaultEdgeOptions={{animated:true}}
        >
          <Controls />
          <Background color="orange" gap={6} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
