import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewProperty from './components/NewProperty';
import DisplayProperties from './components/DisplayProperties';
import Navigation from './components/Navigation';


function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<NewProperty />} />
        <Route path="/display" element={<DisplayProperties />} />
        <Route path="/register" element={<NewProperty />} />
      </Routes>
      </>
  );
}

export default App;
