// src/components/ContextMenu.js
import React from 'react';

const ContextMenu = ({ contextMenu, onReset, onDelete }) => {
  if (!contextMenu) return null;

  return (
    <div className="context-menu" style={{ top: contextMenu.y, left: contextMenu.x }}>
      <button onClick={() => onReset(contextMenu.id)}>Reset Counter</button>
      <button onClick={() => onDelete(contextMenu.id)}>Delete Counter</button>
    </div>
  );
};

export default ContextMenu;
