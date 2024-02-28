// ToggleActiveButton.js
import React from 'react';

const ToggleActiveButton = ({ propertyId, activeProperty, toggleActive }) => {
  const handleClick = () => {
    toggleActive(propertyId);
  };

  return (
    <button onClick={handleClick}>
      {activeProperty === propertyId ? 'Deactivate' : 'Activate'}
    </button>
  );
};

export default ToggleActiveButton;
