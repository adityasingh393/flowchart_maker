import { Handle, NodeResizer, Position } from "@xyflow/react";
import { useState } from "react";

const CircularNode = ({ id, data, selected }: any) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };

  return (
    <>
      <NodeResizer minHeight={100} minWidth={200} isVisible={selected} keepAspectRatio={true} />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "green",
        }}
      />
      <input
        type="text"
        value={label}
        onChange={handleLabelChange}
        style={{
          border: "none",
          background: "transparent",
          outline: "none",
          textAlign: "center",
        }}
      />
      <Handle
        type="target"
        position={Position.Top}
        style={{
          top: "100%",
          left: "48%",
          transform: "translateY(-50%)",
          backgroundColor: "red",
        }}
      />
    </>
  );
};

export default CircularNode;
