import { Handle, NodeResizer, Position } from "@xyflow/react";
import { useState } from "react";

const ReactangularNode = ({ id, data, selected }: any) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };

  return (
    <>
      <NodeResizer minHeight={40} minWidth={80} isVisible={selected} />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          bottom: "100%",
          // left: "50%",
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
          textAlign: "center",
          width: "90%",
          backgroundColor: "transparent",
          outline: "none",
        }}
      />
      <Handle
        type="target"
        position={Position.Top}
        style={{
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "red",
        }}
      />
      {/* </div> */}
    </>
  );
};

export default ReactangularNode;
