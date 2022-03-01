import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/homepage';
import { Dashboard } from './pages/dashboard'; 
import './App.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>  
        </Routes>
    </Router>
  );
};

export default App;
