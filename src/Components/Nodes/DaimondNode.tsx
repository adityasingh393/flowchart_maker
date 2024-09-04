import { Handle, Position } from "@xyflow/react";

const DiamondNode = ({ id, data }: any) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        transform: "rotate(45deg)",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          transform: "rotate(-45deg)",
          textAlign: "center",
        }}
      >
        {data.label}
      </div>
      <Handle
        type="source"
        position={Position.Top}
        style={{
          top: -1,
          left: -2,
          backgroundColor:'darkgreen'
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{
          top: 100,
          left: 100,
          backgroundColor:'red'
        }}
      />
    </div>
  );
};

export default DiamondNode;
