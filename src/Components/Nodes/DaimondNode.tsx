import React, { useState } from "react";
import { Position, NodeResizer, Handle } from "@xyflow/react";
import { CustomNodeProp } from "../../types/types";

const CustomRhombusNode = ({  data, selected }: CustomNodeProp) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newLabel=e.target.value;
  setLabel(newLabel);
  data.label=newLabel;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transform: "rotate(45deg)",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <input
        type="text"
        value={label}
        onChange={handleLabelChange}
        style={{
          border: "none",
          backgroundColor: "transparent",
          textAlign: "center",
          outline: "none",
          width: "95%",
          height: "95%",
          color: "green",
          fontSize: "160%",
          transform: "rotate(-45deg)",
        }}
      />

      <NodeResizer
        minHeight={100}
        minWidth={100}
        isVisible={selected}
        keepAspectRatio={true}
      />

      <Handle
        type="source"
        position={Position.Top}
        style={{
          left: "0%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Bottom}
        style={{
          left: "100%",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default CustomRhombusNode;
