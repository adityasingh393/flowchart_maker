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

export interface DrawerProps extends CustomDrawerProps {
  onCanvasSelect: (canvasId: string) => void;
}

export interface CustomNodeProp {
  id: string;
  data: {
    label: string;
  };
  selected?: boolean | undefined;
}

export interface CanvasListProps {
  onSelectCanvas: (canvasId: string) => void;
  currentNodes: CustomNode[];
  currentEdges: Edge[];
}

export interface CanvasData {
  name: string;
  canvasId: string;
  nodes: CustomNode[];
  edges: Edge[];
}
export type NodeEdgeOption = {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

export interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}
