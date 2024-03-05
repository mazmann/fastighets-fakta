import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterProperty from './pages/RegisterProperty/RegisterProperty';
import DisplayProperties from './pages/DisplayAllProperties/DisplayProperties';
import PropertyTable from './pages/DisplayAllProperties/PropertyTable';
import PropertyData from './pages/ViewMorePropertyData/PropertyData';
import Navigation from './components/Navigation';
import EditProperty from './pages/UpdateProperty/EditProperty';
import PropertyOwner from './pages/PropertyOwners/PropertyOwner';
import Home from './pages/HomePage/Home';



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
        <Route path="/register" element={<RegisterProperty />} />
        <Route path="/owner" element={<PropertyOwner />} />
      </Routes>
      </>
  );
}

export default App;
