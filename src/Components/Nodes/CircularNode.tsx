import { Handle, Position } from "@xyflow/react";
import { useState } from "react";

const CircularNode = ({ id, data }: any) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };

  return (
    <div
      style={{
        width: 200,
        height: 90,
        borderRadius: "50%",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <input
        type="text"
        value={label}
        onChange={handleLabelChange}
        style={{
          border: "none",
          height:"40%",
          width:"60%",
          background: "transparent",
          outline:"none",
          textAlign: "center",
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        style={{
          top: -4,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "green",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{
          top: 91,
          left: 100,
          transform: "translateY(-50%)",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default CircularNode;
