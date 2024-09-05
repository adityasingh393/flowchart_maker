import { useState } from "react";

const CommentNode = ({ id, data }: any) => {
  const [label, setLabel] = useState(data.label);
  const handleLabelChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLabel(e.target.value);
    data.onChange(id, e.target.value);
  };
  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: "5px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <textarea
        value={label}
        onChange={handleLabelChange}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          textAlign: "center",
          resize: "none",
          border: "none",
          outline: "none",

          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default CommentNode;
