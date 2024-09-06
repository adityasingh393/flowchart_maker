import React, { useState } from "react";
import { Position, NodeResizer, Handle } from "@xyflow/react";
import { CustomNodeProp } from "../../types/types";

const CustomRhombusNode = ({ id, data, selected }: CustomNodeProp) => {
  const [inputValue, setInputValue] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    data.onChange(id, e.target.value);
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
        value={inputValue}
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
          // top: "1%",
          left: "0%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Bottom}
        style={{
          // bottom: "1%",
          left: "100%",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default CustomRhombusNode;
