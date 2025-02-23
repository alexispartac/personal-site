import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import PageRoutes from './router'
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

function App() {

  return (
    <Router>
      <>
        <NavBar />
        <PageRoutes />
      </>
    </Router>
  )
}

export default App
