import { Handle, NodeResizer, Position } from "@xyflow/react";
import { CustomNodeProp } from "../../types";
import useInput from "../../customHooks/useInput";

const ReactangularNode = ({ data, selected }: CustomNodeProp) => {
 //make a hook for this
const {labelValue,handleChange}=useInput(data.label);

  return (
    <>
      <NodeResizer
        minHeight={20}
        minWidth={40}
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
        value={labelValue}
        onChange={(e)=>{
          const updatedLabel=handleChange(e);
          data.label=updatedLabel;
        }}
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
    </>
  );
};

export default ReactangularNode;
