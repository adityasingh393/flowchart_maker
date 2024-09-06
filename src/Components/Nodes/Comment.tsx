import { NodeResizer } from "@xyflow/react";
import { useState } from "react";
import { CustomNodeProp } from "../../types/types";
const CommentNode = ({ id, data, selected }: CustomNodeProp) => {
  const [label, setLabel] = useState(data.label);
  const handleLabelChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };
  return (
    <>
      <NodeResizer minHeight={80} minWidth={150} isVisible={selected} />
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
