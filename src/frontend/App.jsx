import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import PageRoutes from './router'
import './App.css'

function App() {

  return (
    <Router>
      <NavBar />
      <PageRoutes />
    </Router>
  )
}

export default App
