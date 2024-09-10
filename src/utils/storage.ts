import localforage from "localforage";
import { CanvasData, CustomNode } from "../types/types";
import { Edge } from "@xyflow/react";
export const saveFlowToLocalForage = async (
  canvasId: string,
  name: string, 
  nodes: CustomNode[],
  edges: Edge[]
): Promise<void> => {
  try {
    const newCanvasData = { canvasId, name, nodes, edges }; 
    const storedCanvases =
      (await localforage.getItem<CanvasData[]>("canvases")) || [];

    let canvasExists = false;
    for (let i = 0; i < storedCanvases.length; i++) {
      if (storedCanvases[i].canvasId === canvasId) {
        storedCanvases[i] = newCanvasData;
        canvasExists = true;
        break;
      }
    }
    if (!canvasExists) {
      storedCanvases.push(newCanvasData);
    }

    await localforage.setItem("canvases", storedCanvases);

    console.log(`Flow for canvas ${canvasId} (${name}) saved successfully.`);
  } catch (error) {
    console.error(`Error saving flow for canvas ${canvasId}:`, error);
  }
};
export const loadFlowFromLocalForage = async (
  canvasId: string
): Promise<{ name: string; nodes: CustomNode[]; edges: Edge[] }> => { 
  try {
    const storedCanvases =
      (await localforage.getItem<CanvasData[]>("canvases")) || [];
    const canvas = storedCanvases.find((c) => c.canvasId === canvasId);

    return canvas
      ? { name: canvas.name, nodes: canvas.nodes, edges: canvas.edges } 
      : { name: "", nodes: [], edges: [] };
  } catch (error) {
    console.error(`Error loading flow for canvas ${canvasId}:`, error);
    return { name: "", nodes: [], edges: [] };
  }
};
export const loadCanvasListFromLocalForage = async (): Promise<CanvasData[]> => {
  try {
    const storedCanvases =
      (await localforage.getItem<CanvasData[]>("canvases")) || [];
    return storedCanvases; 
  } catch (error) {
    console.error("Error loading canvas list from localforage:", error);
    return [];
  }
};
export const removeCanvasFromLocalForage = async (
  canvasId: string
): Promise<void> => {
  try {
    const storedCanvases =
      (await localforage.getItem<CanvasData[]>("canvases")) || [];
    const updatedCanvases = storedCanvases.filter(
      (canvas) => canvas.canvasId !== canvasId
    );

    await localforage.setItem("canvases", updatedCanvases);
    console.log(`Canvas ${canvasId} removed successfully.`);
  } catch (error) {
    console.error(`Error removing canvas ${canvasId}:`, error);
  }
};
