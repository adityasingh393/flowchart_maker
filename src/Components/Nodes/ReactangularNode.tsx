import { Handle, NodeResizer, Position } from "@xyflow/react";
import { useState } from "react";
import { CustomNodeProp } from "../../types/types";
const ReactangularNode = ({ id, data, selected }: CustomNodeProp) => {
  const [label, setLabel] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };

  return (
    <>
      <NodeResizer
        minHeight={40}
        minWidth={80}
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
      {/* </div> */}
    </>
  );
};

export default ReactangularNode;
