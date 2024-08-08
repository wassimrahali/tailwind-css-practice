import React, { useState } from 'react';
import logo from '../assets/images/1_JEHLmWo6_SrpHPiP4AimIw.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <a href="#call" className="rounded-full py-2 px-5 bg-primary text-white hover:bg-slate-700">Call me</a>
        </div>
      </div>
      <div className={`drop-shadow-lg space-y-4 font-bold items-center absolute flex flex-col bg-gray-50 py-8 left-8 right-6 top-16 md:hidden ${isOpen ? 'flex' : 'hidden'}`}>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#social">Social</a>
        <a href="#call" className="rounded-full py-2 px-5 bg-primary text-white hover:bg-slate-700">Call me</a>
      </div>
    </nav>
  );
}
