import { Handle, NodeResizer, Position } from "@xyflow/react";
import { useState } from "react";
import { CustomNodeProp } from "../../types";

const ReactangularNode = ({ data, selected }: CustomNodeProp) => {
  const [label, setLabel] = useState(data.label);
  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value;
    setLabel(newLabel);
    data.label = newLabel;
  };

  return (
    <>
      <NodeResizer
        minHeight={20}
        minWidth={40}
        isVisible={selected}
        keepAspectRatio={true}
      />
      <Handle
        type="source"
        position={Position.Top}
        style={{
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
          width: "80%",
          color: "green",
          fontSize: "120%",
          backgroundColor: "transparent",
          outline: "none",
        }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        style={{
          backgroundColor: "red",
        }}
      />
    </>
  );
};

export default ReactangularNode;
