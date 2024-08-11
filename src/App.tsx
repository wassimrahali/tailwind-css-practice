import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Author from './Componnets/Author';
import Footer from './Componnets/Footer';
import Hero from './Componnets/Hero';
import LoginButton from './Componnets/LoginButton';
import Navbar from './Componnets/Navbar';
import Profile from './Componnets/Profile';


function App() {
  return (
    <Router>
      <Navbar /> {/* Assuming Navbar is part of the layout for all routes */}
      <Routes>
        <Route path="/" element={<>
          <LoginButton />
          <Hero />
          <Author />
          <Footer />
        </>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
