import localforage from "localforage";
import { CanvasData, CustomNode } from "../types";
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

    const existingCanvas = storedCanvases.find(
      (canvas) => canvas.canvasId === canvasId
    );
    if (existingCanvas) {
      existingCanvas.name = name;
      existingCanvas.nodes = nodes;
      existingCanvas.edges = edges;
    } else {
      storedCanvases.push(newCanvasData);
    }

    await localforage.setItem("canvases", storedCanvases);
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
export const loadCanvasListFromLocalForage = async (): Promise<
  CanvasData[]
> => {
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
  } catch (error) {
    console.error(`Error removing canvas ${canvasId}:`, error);
  }
};
