import { NodeResizer } from "@xyflow/react";
import { CustomNodeProp } from "../../types";
import useInput from "../../customHooks/useInput";
const CommentNode = ({ data, selected }: CustomNodeProp) => {
  const {labelValue, handleChange}=useInput(data.label);
  return (
    <>
      <NodeResizer minHeight={40} minWidth={75} isVisible={selected} />
      <textarea
        value={labelValue}
        onChange={(e)=>{
          const updatedLabel=handleChange(e);
          data.label=updatedLabel;
        }}
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
