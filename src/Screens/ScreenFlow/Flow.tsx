import React, { useEffect, useState } from "react";
import { Background, Controls, useNodesState, ReactFlow } from "@xyflow/react";
//make a sideDrawer folder and place it
import Drawer from "../../Components/ComponentDrawer/Drawer";
//./Nodes
import { handleAddNode } from "../../Components/Nodes";
//move to hook folder
import useEdges from "../../Components/Edges";
import { loadFlowFromLocalForage } from "../../utils/storage";
import "./flow.css";
import "@xyflow/react/dist/style.css";
//add a prefix like ComponentDaimondNode
import DiamondNode from "../../Components/Nodes/ComponentDaimondNode";
import CircularNode from "../../Components/Nodes/ComponentCircularNode";
import CommentNode from "../../Components/Nodes/ComponentComment";
import ReactangularNode from "../../Components/Nodes/ComponentReactangularNode";
import { CustomNode } from "../../types";

const initialNodes: CustomNode[] = [];

const Flow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const {
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    onEdgesDelete,
    onSelectionChange,
    handleEdgeTypeChange,
  } = useEdges();
  const [_, setCurrentCanvasId] = useState<string | null>(null);

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
  const a = "a";
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      //make constant and move a there
      if (event.ctrlKey && event.key === a) {
        selectAllNodes();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nodes]);

  const loadCanvas = async (canvasId: string) => {
    const { nodes, edges } = await loadFlowFromLocalForage(canvasId);
    setNodes(nodes);
    setEdges(edges);
    setCurrentCanvasId(canvasId);
  };

  return (
    <div className="container">
      <Drawer
        onAddDefaultNode={addRectangelNodeHandler}
        onAddCircleNode={addCircleNodeHandler}
        onAddDiamondNode={addDiamondNodeHandler}
        onEdgeTypeChange={handleEdgeTypeChange}
        onAddCommentNode={addCommentNodeHandler}
        nodes={nodes}
        edges={edges}
        onCanvasSelect={loadCanvas}
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
          defaultEdgeOptions={{ animated: true }}
          nodeTypes={{
            diamond: DiamondNode,
            oval: CircularNode,
            comment: CommentNode,
            rectangel: ReactangularNode,
          }}
        >
          <Controls />
          <Background color="#f0f0f0" gap={5} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
