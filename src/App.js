import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewProperty from './pages/NewProperty';
import DisplayProperties from './pages/DisplayProperties';
import PropertyTable from './components/PropertyTable';
import PropertyData from './pages/PropertyData';
import Navigation from './components/Navigation';
import EditProperty from './pages/EditProperty';
import PropertyOwner from './pages/PropertyOwner';
import Home from './pages/Home';



function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<DisplayProperties />} />
        <Route path="/property/:propertyId" element={<PropertyData />} />
        <Route path="/property/:propertyId" element={<PropertyTable />} />
        <Route path="/edit/:propertyId" element={<EditProperty />} />
        <Route path="/register" element={<NewProperty />} />
        <Route path="/owner" element={<PropertyOwner />} />
      </Routes>
      </>
  );
}

export default App;
