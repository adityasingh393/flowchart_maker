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
        backgroundColor:'white',
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
            top: -4,
            left: "50%",
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
            bottom: -4,
            left: "50%",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{
            top: "50%",
            left: -4,
        }}
      />
      <Handle
        type="target"
        position={Position.Right}
        style={{
            top: "50%",
            right: -4,     
        }}
      />
    </div>
  );
};

export default DiamondNode;
