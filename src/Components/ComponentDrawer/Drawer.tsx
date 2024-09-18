import React, { useState } from "react";
import { DrawerProps, NodeEdgeOption } from "../../types";
import "./drawer.css";
import {
  BsSuitDiamond,
  TbOvalVertical,
  LuRectangleHorizontal,
  FaRegCommentAlt,
  FaArrowRightLong,
  TbArrowCurveRight,
  PiStepsLight,
  PiSteps,
} from "../../utils/icons";
import CanvasList from "../ComponentCanvas/Canvas";
import { edgeText, nodeText } from "../../utils/translation";
const getNodeOptions = (
  onAddDefaultNode: () => void,
  onAddCircleNode: () => void,
  onAddDiamondNode: () => void,
  onAddCommentNode: () => void
): NodeEdgeOption[] => [
  {
    onClick: onAddDefaultNode,
    icon: <LuRectangleHorizontal />,
    label: "Default Node",
  },
  { onClick: onAddCircleNode, icon: <TbOvalVertical />, label: "Circle Node" },
  { onClick: onAddDiamondNode, icon: <BsSuitDiamond />, label: "Diamond Node" },
  {
    onClick: onAddCommentNode,
    icon: <FaRegCommentAlt />,
    label: "Comment Node",
  },
];

const getEdgeOptions = (
  onEdgeTypeChange: (
    type: "default" | "straight" | "step" | "smoothstep"
  ) => void
): NodeEdgeOption[] => [
  {
    onClick: () => onEdgeTypeChange("default"),
    icon: <TbArrowCurveRight />,
    label: "Default Edge",
  },
  {
    onClick: () => onEdgeTypeChange("straight"),
    icon: <FaArrowRightLong />,
    label: "Straight Edge",
  },
  {
    onClick: () => onEdgeTypeChange("step"),
    icon: <PiStepsLight />,
    label: "Step Edge",
  },
  {
    onClick: () => onEdgeTypeChange("smoothstep"),
    icon: <PiSteps />,
    label: "Smooth Step Edge",
  },
];

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
  const [isNodesOpen, setNodesOpen] = useState<boolean>(false);
  const [isEdgesOpen, setEdgesOpen] = useState<boolean>(false);

  const handleEdgesClick = () => {
    setEdgesOpen(!isEdgesOpen);
    if (isNodesOpen) {
      setNodesOpen(false);
    }
  };

  const handleNodesClick = () => {
    setNodesOpen(!isNodesOpen);
    if (isEdgesOpen) {
      setEdgesOpen(false);
    }
  };
  const nodeOptions = getNodeOptions(
    onAddDefaultNode,
    onAddCircleNode,
    onAddDiamondNode,
    onAddCommentNode
  );
  const edgeOptions = getEdgeOptions(onEdgeTypeChange);

  return (
    <div className="drawer">
      <CanvasList
        onSelectCanvas={onCanvasSelect}
        currentNodes={nodes}
        currentEdges={edges}
      />
      <div className="button">
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleNodesClick}>
            {nodeText}
          </button>
          {isNodesOpen && (
            <div className="dropdown-menu">
              {nodeOptions.map(({ onClick, icon, label }) => (
                <button key={label} onClick={onClick}>
                  {icon} {label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown">
          <button className="dropdown-button" onClick={handleEdgesClick}>
            {edgeText}
          </button>
          {isEdgesOpen && (
            <div className="dropdown-menu">
              {edgeOptions.map(({ onClick, icon, label }) => (
                <button key={label} onClick={onClick}>
                  {icon} {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
