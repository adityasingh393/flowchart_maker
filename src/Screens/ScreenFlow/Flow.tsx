import React, { useEffect, useState } from "react";
import { Background, Controls, useNodesState, ReactFlow } from "@xyflow/react";
import Drawer from "../../Components/ComponentDrawer/Drawer";
import { handleAddNode } from "../../Components/ComponentNodes/CreateNode";
import useEdges from "../../customHooks/useEdges";
import { loadFlowFromLocalForage } from "../../utils/storage";
import "./flow.css";
import "@xyflow/react/dist/style.css";
import { CustomNode } from "../../types";
import { a } from "../../utils/constant";
import {
  CircularNode,
  CommentNode,
  DiamondNode,
  ReactangularNode,
} from "../../Components/ComponentNodes";
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
  //move it in a constant file

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
