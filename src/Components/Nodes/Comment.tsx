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
    <NodeResizer minHeight={100} minWidth={100} isVisible={selected}/>
      <textarea
        value={label}
        onChange={handleLabelChange}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          textAlign: "center",
          resize: "none",
          border: "none",
          outline: "none",
          overflow: "hidden",
        }}
      />
    </>

  );
};

export default CommentNode;
