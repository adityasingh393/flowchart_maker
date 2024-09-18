import { Handle, NodeResizer, Position } from "@xyflow/react";
import { CustomNodeProp } from "../../types";
import useInput from "../../customHooks/useInput";
import InputField from "../CommonComponents/ComponentInput";

const ReactangularNode = ({ data, selected }: CustomNodeProp) => {

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
      <InputField
        value={labelValue}
        onChange={(e)=>{
          const updatedLabel=handleChange(e);
          data.label=updatedLabel;
        }}
        style={{
          width: "80%",
          fontSize: "120%",
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
