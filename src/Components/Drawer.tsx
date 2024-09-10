import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  saveFlowToLocalForage,
  loadCanvasListFromLocalForage,
  removeCanvasFromLocalForage,
} from "../utils/storage";
import { DrawerProps } from "../types/types";
import "../Styles/drawer.css";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TbOvalVertical } from "react-icons/tb";
import { BsSuitDiamond } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbArrowCurveRight } from "react-icons/tb";
import { PiStepsLight } from "react-icons/pi";
import { PiSteps } from "react-icons/pi";

const Drawer: React.FC<DrawerProps> = ({
  onAddDefaultNode,
  onAddCircleNode,
  onAddDiamondNode,
  onEdgeTypeChange,
  onAddCommentNode,
  nodes,
  edges,
  onCanvasSelect,
}) => {
  const [isNodesOpen, setNodesOpen] = useState(false);
  const [isEdgesOpen, setEdgesOpen] = useState(false);
  const [canvasList, setCanvasList] = useState<{ canvasId: string }[]>([]);
  const [selectedCanvasId, setSelectedCanvasId] = useState<string | null>(null);

  useEffect(() => {
    const loadCanvasList = async () => {
      const canvases = await loadCanvasListFromLocalForage();
      setCanvasList(canvases.map((c) => ({ canvasId: c.canvasId })));
    };

    loadCanvasList();
  }, []);
  const handleEdgesClick = () => {
    setEdgesOpen(!isEdgesOpen);
    if (isNodesOpen) {
      setNodesOpen(!isNodesOpen);
    }
  };
  const handleNodesClick = () => {
    setNodesOpen(!isNodesOpen);
    if (isEdgesOpen) {
      setEdgesOpen(!isEdgesOpen);
    }
  };

  const handleSave = () => {
    if (selectedCanvasId) {
      saveFlowToLocalForage(selectedCanvasId, nodes, edges);
    }
  };

  const handleAddCanvas = () => {
    const newCanvasId = uuidv4();
    setCanvasList([...canvasList, { canvasId: newCanvasId }]);
    setSelectedCanvasId(newCanvasId);
    onCanvasSelect(newCanvasId);
  };

  const handleDeleteCanvas = async (canvasId: string) => {
    await removeCanvasFromLocalForage(canvasId);
    setCanvasList(canvasList.filter((c) => c.canvasId !== canvasId));
    if (selectedCanvasId === canvasId) {
      setSelectedCanvasId(null);
    }
  };

  const handleSelectCanvas = (canvasId: string) => {
    setSelectedCanvasId(canvasId);
    onCanvasSelect(canvasId);
  };

  return (
    <div className="drawer">
      <div className="canvas-manager">
        <button onClick={handleAddCanvas}>Add Canvas</button>
        <ul>
          {canvasList.map(({ canvasId }) => (
            <li key={canvasId}>
              <button onClick={() => handleSelectCanvas(canvasId)}>
                Select {canvasId}
              </button>
              <button onClick={() => handleDeleteCanvas(canvasId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleSave}>Save Current Canvas</button>
      </div>
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleNodesClick}>
          Nodes
        </button>
        {isNodesOpen && (
          <div className="dropdown-menu">
            <button onClick={onAddDefaultNode}>
              <LuRectangleHorizontal /> Default Node
            </button>
            <button onClick={onAddCircleNode}>
              <TbOvalVertical /> Circle Node
            </button>
            <button onClick={onAddDiamondNode}>
              <BsSuitDiamond /> Diamond Node
            </button>
            <button onClick={onAddCommentNode}>
              <FaRegCommentAlt /> Comment Node
            </button>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleEdgesClick}>
          Edges
        </button>
        {isEdgesOpen && (
          <div className="dropdown-menu">
            <button onClick={() => onEdgeTypeChange("default")}>
              <TbArrowCurveRight />
              Default Edge
            </button>
            <button onClick={() => onEdgeTypeChange("straight")}>
              <FaArrowRightLong /> Straight Edge
            </button>
            <button onClick={() => onEdgeTypeChange("step")}>
              <PiStepsLight /> Step Edge
            </button>
            <button onClick={() => onEdgeTypeChange("smoothstep")}>
              <PiSteps /> Smooth Step Edge
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
