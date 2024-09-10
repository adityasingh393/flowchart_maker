import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  saveFlowToLocalForage,
  loadCanvasListFromLocalForage,
  removeCanvasFromLocalForage,
} from "../utils/storage";
import { CanvasListProps } from "../types/types";
import "../Styles/canvas.css";
import { TiDeleteOutline } from "react-icons/ti";

const CanvasList: React.FC<CanvasListProps> = ({
  onSelectCanvas,
  currentNodes,
  currentEdges,
}) => {
  const [canvasList, setCanvasList] = useState<{ id: string; name: string }[]>(
    []
  );
  const [selectedCanvasId, setSelectedCanvasId] = useState<string | null>(null);
  const [newCanvasName, setNewCanvasName] = useState<string>("");

  useEffect(() => {
    const loadCanvases = async () => {
      const storedCanvases = await loadCanvasListFromLocalForage();
      setCanvasList(
        storedCanvases.map((canvas) => ({
          id: canvas.canvasId,
          name: canvas.name || canvas.canvasId,
        }))
      );
    };
    loadCanvases();
  }, []);

  const handleAddCanvas = () => {
    if (!newCanvasName.trim()) return;
    const newCanvasId = uuidv4();
    const newCanvas = { id: newCanvasId, name: newCanvasName };
    setCanvasList([...canvasList, newCanvas]);
    setSelectedCanvasId(newCanvasId);
    onSelectCanvas(newCanvasId);
    setNewCanvasName("");
  };

  const handleDeleteCanvas = async (canvasId: string) => {
    await removeCanvasFromLocalForage(canvasId);
    setCanvasList(canvasList.filter((canvas) => canvas.id !== canvasId));
    if (selectedCanvasId === canvasId) {
      setSelectedCanvasId(null);
    }
  };

  const handleSaveCanvas = () => {
    if (selectedCanvasId) {
      const canvasName =
        canvasList.find((canvas) => canvas.id === selectedCanvasId)?.name ||
        "Untitled Canvas";
      saveFlowToLocalForage(
        selectedCanvasId,
        canvasName,
        currentNodes,
        currentEdges
      );
    }
  };

  return (
    <div className="canvas-container">
      <input
        type="text"
        placeholder="Enter canvas name"
        value={newCanvasName}
        onChange={(e) => setNewCanvasName(e.target.value)}
      />
      <button onClick={handleAddCanvas}>Add Canvas</button>
      <ul className="list-items">
        {canvasList.map((canvas) => (
          <li key={canvas.id}>
            <button onClick={() => onSelectCanvas(canvas.id)}>
              {" "}
              {canvas.name}
            </button>
            <button onClick={() => handleDeleteCanvas(canvas.id)}>
              <TiDeleteOutline />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleSaveCanvas}>Save Current Canvas</button>
    </div>
  );
};

export default CanvasList;
