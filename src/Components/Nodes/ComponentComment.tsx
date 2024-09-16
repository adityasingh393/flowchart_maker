import { NodeResizer } from "@xyflow/react";
import { useState } from "react";
import { CustomNodeProp } from "../../types";
const CommentNode = ({ data, selected }: CustomNodeProp) => {
  const [label, setLabel] = useState(data.label);
  const handleLabelChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newLabel = e.target.value;
    setLabel(newLabel);
    data.label = newLabel;
  };
  return (
    <>
      <NodeResizer minHeight={40} minWidth={75} isVisible={selected} />
      <textarea
        value={label}
        onChange={handleLabelChange}
        style={{
          border: "none",
          textAlign: "center",
          width: "95%",
          height: "95%",
          color: "green",
          fontSize: "160%",
          backgroundColor: "transparent",
          outline: "none",
        }}
      />
    </>
  );
};

export default CommentNode;
