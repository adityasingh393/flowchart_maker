import { Handle, NodeResizer, Position } from "@xyflow/react";
import { useState } from "react";
import { CustomNodeProp } from "../../types/types";
const CircularNode = ({ data, selected }: CustomNodeProp) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel=e.target.value;
    setLabel(newLabel);
    data.label = newLabel;
  };
  return (
    <>
      <NodeResizer
        minHeight={100}
        minWidth={200}
        isVisible={selected}
        keepAspectRatio={true}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{
          top: "50%",
          backgroundColor: "green",
        }}
      />
      <input
        type="text"
        value={label}
        onChange={handleLabelChange}
        style={{
          border: "none",
          textAlign: "center",
          width: "90%",
          color: "green",
          fontSize: "160%",
          backgroundColor: "transparent",
          outline: "none",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{
          top: "50%",
          backgroundColor: "red",
        }}
      />
    </>
  );
};

export default CircularNode;
