

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fao from './components/Fao/Fao';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from '../src/pages/Home'
import About from '../src/pages/about'
import Contact from '../src/pages/contact'
import NotFound from "../src/pages/notFound";
import Blog from '../src/pages/blog';
import TermsOfService from '../src/pages/termofservice'
import Privacypolicy from '../src/pages/privacypolicy'
import './App.css';



function App() {
  return (
    <Router>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/termofservice" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<Privacypolicy/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
