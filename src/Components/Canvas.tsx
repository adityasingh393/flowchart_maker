import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { saveFlowToLocalForage } from "../utils/storage";
import { CanvasListProps} from "../types/types";
import localforage from "localforage";
// import "../Styles/canvas.css"

const CanvasList: React.FC<CanvasListProps> = ({ onSelectCanvas, currentNodes, currentEdges }) => {
  const [canvasList, setCanvasList] = useState<string[]>([]);
  const [selectedCanvasId, setSelectedCanvasId] = useState<string | null>(null);

  const handleAddCanvas = () => {
    const newCanvasId = uuidv4();
    setCanvasList([...canvasList, newCanvasId]);
    setSelectedCanvasId(newCanvasId);
    onSelectCanvas(newCanvasId);
  };
  const handleDeleteCanvas = (canvasId: string) => {
    setCanvasList(canvasList.filter((id) => id !== canvasId));
    setSelectedCanvasId(null);
    localforage.removeItem(`flowchart_${canvasId}`);
  };
  const handleSaveCanvas = () => {
    if (selectedCanvasId) {
      saveFlowToLocalForage(selectedCanvasId, currentNodes, currentEdges);
    }
  };

  return (
    <div className="canvas-container">
      <button onClick={handleAddCanvas}>Add Canvas</button>
      <ul className="list-items">
        {canvasList.map((canvasId) => (
          <li key={canvasId}>
            <button onClick={() => onSelectCanvas(canvasId)}>Select {canvasId}</button>
            <button onClick={() => handleDeleteCanvas(canvasId)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSaveCanvas}>Save Current Canvas</button>
    </div>
  );
};

export default CanvasList;
