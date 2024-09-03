import { Node, Edge } from "@xyflow/react";

export type CustomNode = Node;
export type CustomEdge = Edge;

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  onAddNode: (node: CustomNode) => void;
  onSelectLines: () => void;
}
export interface CustomDrawerProps {
  onAddNode: () => void;
  onSelectLines: () => void;
}
export type SetNodesFunction = (newNodes: CustomNode[] | ((prevNodes: CustomNode[]) => CustomNode[])) => void;
