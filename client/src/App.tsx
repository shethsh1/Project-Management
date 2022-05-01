import React from 'react';
import './App.css'
import { Routes, BrowserRouter } from "react-router-dom";
import { Route } from 'react-router'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        


      </Routes>

      

    </BrowserRouter>
  );
}

export default App;
