import React from 'react';
import { CustomDrawerProps } from '../types/types';
const Drawer: React.FC<CustomDrawerProps> = ({ onAddNode, onSelectLines }) => {
  return (
    <div className="drawer">
      <button onClick={onAddNode}>Add Node</button>
      <button onClick={onSelectLines}>Make an Edge</button>
    </div>
  );
};

export default Drawer;
