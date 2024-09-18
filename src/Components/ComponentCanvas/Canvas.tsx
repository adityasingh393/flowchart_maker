import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  saveFlowToLocalForage,
  loadCanvasListFromLocalForage,
  removeCanvasFromLocalForage,
} from "../../utils/storage";
import { CanvasListProps } from "../../types";
import "./canvas.css";
import { MdDelete, IoMdAdd } from "../../utils/icons";
import { canvasText, saveCanvasText } from "../../utils/translation";
import InputField from "../CommonComponents/ComponentInput";

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
      setCanvasList(
        storedCanvases.map((canvas) => ({
          id: canvas.canvasId,
          name: canvas.name,
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
    setCurrentCanvasName(newCanvas.name);
    onSelectCanvas(newCanvasId);
    setNewCanvasName("");
  };

  const handleDeleteCanvas = async (canvasId: string) => {
    await removeCanvasFromLocalForage(canvasId);
    setCanvasList(canvasList.filter((canvas) => canvas.id !== canvasId));
    if (selectedCanvasId === canvasId) {
      setSelectedCanvasId(null);
      setCurrentCanvasName("None Selected");
    }
  };
  const handleSaveCanvas = () => {
    if (selectedCanvasId) {
      const canvasName =
        canvasList.find((canvas) => canvas.id === selectedCanvasId)?.name ||
        "Untitled Canvas";
      if (canvasName) {
        saveFlowToLocalForage(
          selectedCanvasId,
          canvasName,
          currentNodes,
          currentEdges
        );
      }
    }
  };

  useEffect(() => {
    const autosaveInterval = setInterval(() => {
      if (selectedCanvasId) {
        handleSaveCanvas();
      }
    }, 1000);
    return () => clearInterval(autosaveInterval);
  }, [selectedCanvasId, currentNodes, currentEdges, canvasList]);

  const handleSelectCanvas = (canvasId: string) => {
    const selectedCanvas = canvasList.find((canvas) => canvas.id === canvasId);
    if (selectedCanvas) {
      setCurrentCanvasName(selectedCanvas.name);
      setSelectedCanvasId(canvasId);
      onSelectCanvas(canvasId);
    }
  };

  return (
    <div className="canvas-container">
      <div className="add-container">
        <InputField
          placeholder="Enter canvas name"
          value={newCanvasName}
          onChange={(e) => setNewCanvasName(e.target.value)}
          style={{
            fontWeight:"lighter",
            fontSize:"100%",
            color:"black",
            border:"1px solid black"
          }}
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
                {canvas.name || "Untitled Canvas"}
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
        <p className="current-canvas">{canvasText}:</p>
        <p className="current-canvas-name">{currentCanvasName}</p>
      </div>
      <button className="btn" onClick={handleSaveCanvas}>
        {saveCanvasText}
      </button>
    </div>
  );
};

export default CanvasList;
