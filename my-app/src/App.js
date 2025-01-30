

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
import BlogPost from '../src/pages/blogpost';
import TermsOfService from '../src/pages/termofservice'
import Privacypolicy from '../src/pages/privacypolicy'
import './App.css';


const blogs = [
  {
    id: 1,
    pic: '/assets/osustech.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 2,
    pic: '/assets/futa.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 3,
    pic: '/assets/lasu.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 4,
    pic: '/assets/lasu.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 5,
    pic: '/assets/lasu.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 6,
    pic: '/assets/lasu.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 7,
    pic: '/assets/lasu.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 8,
    pic: '/assets/lasu.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },
  {
    id: 9,
    pic: '/assets/lasu.svg',
    date: 'March 15, 2024',
    duration: '5 min read',
    views: '1.234 views',
    title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
    desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
  },

];

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
        <Route path="/blog/:id" element={<BlogPost blogs={blogs} />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
