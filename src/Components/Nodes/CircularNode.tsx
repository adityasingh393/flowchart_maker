import { Handle, Position } from "@xyflow/react";

const CircularNode = ({ id, data }: any) => {
  return (
    <div
      style={{
        width: 200,
        height: 90,
        borderRadius: "50%",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {data.label}
      <Handle
        type="source"
        position={Position.Top}
        style={{
          top: -4,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "green",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{
          top: 91,
          left: 100,
          transform: "translateY(-50%)",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default CircularNode;
