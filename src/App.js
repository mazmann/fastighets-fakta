import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewProperty from './components/NewProperty';
import './App.css';

function App() {
  return (

      <Routes>
        <Route path="/" element={<NewProperty />} />
      </Routes>

  );
}

export default App;
