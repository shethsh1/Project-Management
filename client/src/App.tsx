import React from 'react';
import './App.css'
import { Routes, BrowserRouter } from "react-router-dom";
import { Route } from 'react-router'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />}></Route>
        


      </Routes>

      

    </BrowserRouter>
  );
}

export default App;
