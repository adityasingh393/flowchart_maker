export type CustomNode = {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  style?: React.CSSProperties;
  type?: string;
};

export type SetNodesFunction = (newNodes: CustomNode[] | ((prevNodes: CustomNode[]) => CustomNode[])) => void;
export type CustomDrawerProps = {
  onAddDefaultNode: () => void;
  onAddCircleNode: () => void;
  onAddDiamondNode: () => void;
  onAddCommentNode:()=>void;
  onEdgeTypeChange: (type: "default" | "straight" | "step" | "smoothstep") => void;
};
// user can resize the components but when resizing their shape should be entact 