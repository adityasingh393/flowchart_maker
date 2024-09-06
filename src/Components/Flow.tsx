import React, { useEffect } from "react";
import { Background, Controls, useNodesState, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Drawer from "./Drawer";
import { handleAddNode } from "./Nodes/Nodes";
import useEdges from "./Edges";
import DiamondNode from "./Nodes/DaimondNode";
import { CustomNode } from "../types/types";
import "../Styles/flow.css";
import CircularNode from "./Nodes/CircularNode";
import CommentNode from "./Nodes/Comment";
import ReactangularNode from "./Nodes/ReactangularNode";

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

  const addRectangelNodeHandler = () =>
    handleAddNode(nodes, setNodes, "rectangel");
  const addCircleNodeHandler = () => handleAddNode(nodes, setNodes, "oval");
  const addDiamondNodeHandler = () => handleAddNode(nodes, setNodes, "diamond");
  const addCommentNodeHandler = () => handleAddNode(nodes, setNodes, "comment");

  const selectAllNodes = () => {
    const updatedNodes = nodes.map((node) => ({
      ...node,
      selected: true,
    }));
    setNodes(updatedNodes);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "a") {
        selectAllNodes();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nodes]);

  return (
    <div className="container">
      <Drawer
        onAddDefaultNode={addRectangelNodeHandler}
        onAddCircleNode={addCircleNodeHandler}
        onAddDiamondNode={addDiamondNodeHandler}
        onEdgeTypeChange={handleEdgeTypeChange}
        onAddCommentNode={addCommentNodeHandler}
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
          nodeTypes={{
            diamond: DiamondNode,
            oval: CircularNode,
            comment: CommentNode,
            rectangel: ReactangularNode,
          }}
          defaultEdgeOptions={{ animated: true }}
        >
          <Controls />
          <Background color="#f0f0f0" gap={5} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
