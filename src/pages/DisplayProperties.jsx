import React, { useState } from 'react';
import './styles/DisplayProperties.css';
import PropertyTable from '../components/PropertyTable';


function DisplayProperties() {

  return (

    <div className='App'>
      <h4>Display Properties</h4>
      <PropertyTable />
    </div>

  );
}

export default DisplayProperties;
