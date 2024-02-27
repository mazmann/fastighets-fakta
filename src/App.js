import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewProperty from './components/NewProperty';
import DisplayProperties from './components/DisplayProperties';
import PropertyData from './components/PropertyData';
import Navigation from './components/Navigation';
import EditProperty from './components/EditProperty';
import PropertyOwner from './components/PropertyOwner';
import Home from './components/Home';
import DeleteProperty from './api/DeleteProperty';



function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<DisplayProperties />} />
        <Route path="/property/:propertyId" element={<PropertyData />} />
        <Route path="/edit/:propertyId" element={<EditProperty />} />
        <Route path="/register" element={<NewProperty />} />
        <Route path="/owner" element={<PropertyOwner />} />
      </Routes>
      </>
  );
}

export default App;
