import { Handle, NodeResizer, Position } from "@xyflow/react";

import { CustomNodeProp } from "../../types";
import useInput from "../../customHooks/useInput";
import InputField from "../CommonComponents/ComponentInput";
const CircularNode = ({ data, selected }: CustomNodeProp) => {
  const { labelValue, handleChange } = useInput(data.label);
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
        position={Position.Right}
        style={{
          top: "50%",
          backgroundColor: "green",
        }}
      />
    <InputField
    value={labelValue}
    onChange={(e)=>{
      const updatedLabel=handleChange(e);
      data.label=updatedLabel;
    }}
    style={{
      color:"green",
      fontSize:"160%"
    }}
 />
      <Handle
        type="target"
        position={Position.Left}
        style={{
          top: "50%",
          backgroundColor: "red",
        }}
      />
    </>
  );
};

export default CircularNode;
