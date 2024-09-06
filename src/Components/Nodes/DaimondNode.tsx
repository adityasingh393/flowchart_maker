import { Handle, NodeResizer, Position } from "@xyflow/react";
import { useState } from "react";
import { CustomNodeProp } from "../../types/types";

const DiamondNode = ({ id, data, selected }:CustomNodeProp) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };

  return (
    <>
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
          // top: "-1%",
          // left: "0%",
          backgroundColor: "darkgreen",
        }}
      />
      <input
        type="text"
        value={label}
        onChange={handleLabelChange}
        style={{
          border: "none",
          height: "10%",
          transform: "rotate(-45deg)",
          outline: "none",
          width: "90%",
          background: "transparent",
          textAlign: "center",
        }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        style={{
          // top: "-1%",
          // left: "1%",
          backgroundColor: "red",
        }}
      />
    </>
  );
};

export default DiamondNode;
