// ToggleActiveButton.js
import React from 'react';

const ToggleActiveButton = ({ propertyId, activeProperty, toggleActive }) => {
  const handleClick = () => {
    toggleActive(propertyId);
  };

  return (
    <button className='toggle-active-button' onClick={handleClick}>
      {activeProperty === propertyId ? 'Deactivate' : 'Activate'}
    </button>
  );
};

export default ToggleActiveButton;
