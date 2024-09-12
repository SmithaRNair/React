// src/hooks/useContextMenu.js
import { useState } from 'react';

export const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState(null);

  const openContextMenu = (event, id) => {
    event.preventDefault();
    setContextMenu({ id, x: event.pageX, y: event.pageY });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  return { contextMenu, openContextMenu, closeContextMenu };
};
