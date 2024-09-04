import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CircularNode = ({ id, data }: any) => {
  return (
    <div
      style={{
        width: 200,
        height: 90,
        borderRadius: '50%',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      {data.label}
      <Handle
        type="source"
        position={Position.Top}
        style={{ top: -5, left: '50%', transform: 'translateX(-50%)' }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ bottom: -5, left: '50%', transform: 'translateX(-50%)' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{ top: '50%', left: -5, transform: 'translateY(-50%)' }}
      />
      <Handle
        type="target"
        position={Position.Right}
        style={{ top: '50%', right: -5, transform: 'translateY(-50%)' }}
      />
    </div>
  );
};

export default CircularNode;
