import localforage from "localforage";
import { CustomNode } from "../types/types";
import { Edge } from "@xyflow/react";

export const saveFlowToLocalForage = async (
  nodes: CustomNode[],
  edges: Edge[]
): Promise<void> => {
  try {
    await localforage.setItem("flowchartNodes", nodes);
    await localforage.setItem("flowchartEdges", edges);
    console.log("Flow saved successfully to localforage.");
  } catch (error) {
    console.error("Error saving flow to localforage:", error);
  }
};
export const loadFlowFromLocalForage = async (): Promise<{
  nodes: CustomNode[];
  edges: Edge[];
}> => {
  try {
    const nodes = (await localforage.getItem("flowchartNodes")) as CustomNode[] || [];
    const edges = (await localforage.getItem("flowchartEdges")) as Edge[] || [];
    return { nodes, edges };
  } catch (error) {
    console.error("Error loading flow from localforage:", error);
    return { nodes: [], edges: [] };
  }
};