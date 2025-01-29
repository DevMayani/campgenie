

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fao from './components/Fao/Fao';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from '../src/pages/Home'
import './App.css';


function App() {
  return (
    <Router>
    <Navbar /> {/* This will appear on all pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
