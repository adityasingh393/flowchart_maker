// import { Handle, NodeResizer, Position } from "@xyflow/react";
// import { useState } from "react";
// import { CustomNodeProp } from "../../types/types";

// const DiamondNode = ({ id, data, selected }:CustomNodeProp) => {
//   const [label, setLabel] = useState(data.label);

//   const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLabel(e.target.value);
//     data.onChange(id, e.target.value);
//   };

//   return (
//     <>
//       <NodeResizer
//         minHeight={100}
//         minWidth={100}
//         isVisible={selected}
//         keepAspectRatio={true}
//       />
//       <Handle
//         type="source"
//         position={Position.Top}
//         style={{
//           // top: "-1%",
//           // left: "0%",
//           backgroundColor: "darkgreen",
//         }}
//       />
//       <input
//         type="text"
//         value={label}
//         onChange={handleLabelChange}
//         style={{
//           border: "none",
//           height: "10%",
//           transform: "rotate(-45deg)",
//           outline: "none",
//           width: "90%",
//           background: "transparent",
//           textAlign: "center",
//         }}
//       />
// <Handle
//   type="target"
//   position={Position.Bottom}
//   style={{
//     // top: "-1%",
//     // left: "1%",
//     backgroundColor: "red",
//   }}
// />
//     </>
//   );
// };

// export default DiamondNode;

import React, { useState } from "react";
import { Position, NodeResizer, Handle } from "@xyflow/react";
import { CustomNodeProp } from "../../types/types";

const CustomRhombusNode = ({ id, data, selected }: CustomNodeProp) => {
  const [inputValue, setInputValue] = useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    data.onChange(id, e.target.value);
  };

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
      <input
        type="text"
        value={inputValue}
        onChange={handleLabelChange}
        style={{
          border: "none",
          backgroundColor: "transparent",
          textAlign: "center",
          outline: "none",
          width: "100%",
          transform: "rotate(-45deg)",
        }}
      />

      <NodeResizer
        minHeight={100}
        minWidth={100}
        isVisible={selected}
        keepAspectRatio={true}
      />

      <Handle
        type="source"
        position={Position.Top}
        style={{
          // top: "1%",
          left: "0%",
          backgroundColor: "green",
        }}
      />

      <Handle
        type="target"
        position={Position.Bottom}
        style={{
          // bottom: "1%",
          left: "100%",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default CustomRhombusNode;
