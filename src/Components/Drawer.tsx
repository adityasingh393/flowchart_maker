import React, { useState } from "react";
import { CustomDrawerProps } from "../types/types";
import "../Styles/drawer.css";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TbOvalVertical } from "react-icons/tb";
import { BsSuitDiamond } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbArrowCurveRight } from "react-icons/tb";
import { PiStepsLight } from "react-icons/pi";
import { PiSteps } from "react-icons/pi";
import { saveFlowToLocalForage } from "../utils/storage";
const Drawer: React.FC<CustomDrawerProps> = ({
  onAddDefaultNode,
  onAddCircleNode,
  onAddDiamondNode,
  onEdgeTypeChange,
  onAddCommentNode,
  nodes,
  edges,
}) => {
  const [isNodesOpen, setNodesOpen] = useState(false);
  const [isEdgesOpen, setEdgesOpen] = useState(false);
  const handleSave = () => {
    saveFlowToLocalForage(nodes, edges)
    .then(()=>alert("Progress saved"))
    .catch((err)=>alert(err));
  };
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
  return (
    <div className="drawer">
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
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleSave}>Save Flow</button>
      </div>
    </div>
  );
};

export default Drawer;
