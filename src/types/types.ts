import { Edge } from "@xyflow/react";

export type CustomNode = {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  style?: React.CSSProperties;
  type?: string;
};

export type SetNodesFunction = (
  newNodes: CustomNode[] | ((prevNodes: CustomNode[]) => CustomNode[])
) => void;
export type CustomDrawerProps = {
  onAddDefaultNode: () => void;
  onAddCircleNode: () => void;
  onAddDiamondNode: () => void;
  onAddCommentNode: () => void;
  nodes: CustomNode[];
  edges: Edge[];
  onEdgeTypeChange: (
    type: "default" | "straight" | "step" | "smoothstep"
  ) => void;
};

export interface CustomNodeProp {
  id: string;
  data: {
    label: string;
  };
  selected?: boolean | undefined;
}