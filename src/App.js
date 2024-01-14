import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewProperty from './components/NewProperty';
import DisplayProperties from './components/DisplayProperties';
import PropertyData from './components/PropertyData';
import Navigation from './components/Navigation';
import EditProperty from './components/EditProperty';



function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<NewProperty />} />
        <Route path="/display" element={<DisplayProperties />} />
        <Route path="/property/:propertyId" element={<PropertyData />} />
        <Route path="/edit/:propertyId" element={<EditProperty />} />
        <Route path="/register" element={<NewProperty />} />
      </Routes>
      </>
  );
}

export default App;
