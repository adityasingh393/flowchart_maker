import { Handle, Position } from "@xyflow/react";
import { useState } from "react";

const DiamondNode = ({ id, data }: any) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };

  return (
    <div
      style={{
        width: 100,
        height: 100,
        transform: "rotate(45deg)",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          transform: "rotate(-45deg)",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          value={label}
          onChange={handleLabelChange}
          style={{
            border:"none",
            height: "100%",
            outline:"none",
            width: "90%",
            background: "transparent",
            textAlign: "center",
          }}
        />
      </div>
      <Handle
        type="source"
        position={Position.Top}
        style={{
          top: -1,
          left: -2,
          backgroundColor: "darkgreen",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{
          top: 100,
          left: 100,
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default DiamondNode;
