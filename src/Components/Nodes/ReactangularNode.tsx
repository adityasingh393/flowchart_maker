import { Handle, Position } from "@xyflow/react";
import { useState } from "react";

const ReactangularNode = ({ id, data }: any) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };

  return (
    <div
      style={{
        width: 150,
        height: 80,
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <input
        type="text"
        value={label}
        onChange={handleLabelChange}
        style={{
          border: "none",
          textAlign: "center",
          width: "90%",
          backgroundColor: "transparent",
          outline: "none",     
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        style={{
          top: -5,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "green",
        }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        style={{
          bottom: -5,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default ReactangularNode;
