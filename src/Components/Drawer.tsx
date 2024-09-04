import React from 'react';
import { CustomDrawerProps } from '../types/types';
import '../Styles/drawer.css'

const Drawer: React.FC<CustomDrawerProps> = ({ onAddDefaultNode, onAddCircleNode, onAddDiamondNode, onSelectLines }) => {
  return (
    <div className="drawer">
      <button onClick={onAddDefaultNode}>Add Default Node</button>
      <button onClick={onAddCircleNode}>Add Oval Node</button>
      <button onClick={onAddDiamondNode}>Add Diamond Node</button>
      <button onClick={onSelectLines}>Make an Edge</button>
    </div>
  );
};

export default Drawer;
