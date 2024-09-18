import { Position, NodeResizer, Handle } from "@xyflow/react";
import { CustomNodeProp } from "../../types";
import useInput from "../../customHooks/useInput";
import InputField from "../CommonComponents/ComponentInput";

const CustomRhombusNode = ({ data, selected }: CustomNodeProp) => {
  const { labelValue, handleChange } = useInput(data.label);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transform: "rotate(45deg)",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <InputField
        value={labelValue}
        onChange={(e) => {
          const updatedLabel = handleChange(e);
          data.label = updatedLabel;
        }}
        style={{
          width: "95%",
          height: "95%",
          transform: "rotate(-45deg)",
        }}
      />

      <NodeResizer
        minHeight={40}
        minWidth={40}
        isVisible={selected}
        keepAspectRatio={true}
      />

      <Handle
        type="source"
        position={Position.Top}
        style={{
          left: "0%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Bottom}
        style={{
          left: "100%",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default CustomRhombusNode;
