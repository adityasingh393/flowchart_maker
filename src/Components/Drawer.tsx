import React from "react";
import { CustomDrawerProps } from "../types/types";
import "../Styles/drawer.css";

const Drawer: React.FC<CustomDrawerProps> = ({
  onAddDefaultNode,
  onAddCircleNode,
  onAddDiamondNode,
  onEdgeTypeChange,
}) => {
  return (
    <div className="drawer">
      <h3>Nodes </h3>
      <button onClick={onAddDefaultNode}>Add Default Node</button>
      <button onClick={onAddCircleNode}>Add Oval Node</button>
      <button onClick={onAddDiamondNode}>Add Diamond Node</button>
      <div className="edges">
        <h3>Choose an edge </h3>
        <button onClick={() => onEdgeTypeChange("default")}>
          Default Edge
        </button>
        <button onClick={() => onEdgeTypeChange("straight")}>
          Straight Edge
        </button>
        <button onClick={() => onEdgeTypeChange("step")}>Step Edge</button>
        <button onClick={() => onEdgeTypeChange("smoothstep")}>
          Smooth Step Edge
        </button>
      </div>
    </div>
  );
};

export default Drawer;
