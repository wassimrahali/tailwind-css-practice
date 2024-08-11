import React, { useState } from 'react';
import logo from '../assets/images/undraw_undraw_undraw_undraw_flying_drone_u3r2_-3-_egfy_-1-_2xjb_-1-_2hl5.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled:', !isOpen); // Logs the new state of the menu
  };

  const handleLogin = () => {
    console.log('Login button clicked'); // Logs when the login button is clicked

    // Debugging: Check if the URL is correct
    const loginUrl = 'http://localhost:3000/login';
    console.log('Redirecting to:', loginUrl);

    // Redirect to the login route on the Express server
    window.location.href = loginUrl;
  };

  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" width="130px" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#social">Social</a>
          <button onClick={handleLogin} className="rounded-full py-2 px-5 bg-primary text-white hover:bg-slate-700">Login</button>
        </div>
      </div>
      <div className={`drop-shadow-lg space-y-4 font-bold items-center absolute flex flex-col bg-gray-50 py-8 left-8 right-6 top-16 md:hidden ${isOpen ? 'flex' : 'hidden'}`}>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#social">Social</a>
        <button onClick={handleLogin} className="rounded-full py-2 px-5 bg-primary text-white hover:bg-slate-700">Login</button>
      </div>
    </nav>
  );
}
