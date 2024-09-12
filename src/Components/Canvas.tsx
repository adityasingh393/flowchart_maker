import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  saveFlowToLocalForage,
  loadCanvasListFromLocalForage,
  removeCanvasFromLocalForage,
} from "../utils/storage";
import { CanvasListProps } from "../types/types";
import "../Styles/canvas.css";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

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
  const [currentCanvasName, setCurrentCanvasName] =
    useState<string>("None Selected");

  useEffect(() => {
    const loadCanvases = async () => {
      const storedCanvases = await loadCanvasListFromLocalForage();
      console.log(storedCanvases);
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

  const handleSelectCanvas = (canvasId: string) => {
    setSelectedCanvasId(canvasId);
    canvasList.map((canvas) => {
      if (canvas.id === canvasId) {
        setCurrentCanvasName(canvas.name);
        return;
      }
    });

    onSelectCanvas(canvasId);
  };

  return (
    <div className="canvas-container">
      <div className="add-container">
        <input
          type="text"
          placeholder="Enter canvas name"
          value={newCanvasName}
          onChange={(e) => setNewCanvasName(e.target.value)}
        />
        <button className="add-button" onClick={handleAddCanvas}>
          <IoMdAdd />
        </button>
      </div>
      <ul className="list-items">
        <div className="canvas-container-name-delete">
          {canvasList.map((canvas) => (
            <li key={canvas.id}>
              <button
                className="name-button"
                onClick={() => handleSelectCanvas(canvas.id)}
              >
                {canvas.name}
              </button>

              <button
                className="delete-button"
                onClick={() => handleDeleteCanvas(canvas.id)}
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </div>
      </ul>
      <div className="current-canvas-container">
        <p className="current-canvas">Canvas:</p>
        <p className="current-canvas-name">{currentCanvasName}</p>
      </div>
      <button className="btn" onClick={handleSaveCanvas}>Save Canvas</button>
    </div>
  );
};

export default CanvasList;
