import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './images/startup/img5.jpg';

export default function NewHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-white font-bold text-lg flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="navbar-start mr-4 flex items-center">
          <img src={img1} alt="Your Logo" className="rounded-full object-contain" style={{ height: '50px' }} />
          <Link to="/" className="btn btn-ghost text-4xl" onClick={toggleMenu}>AnantVedha</Link>
        </div>
      </div>
      <div className="navbar-end flex items-center">
        <div className="dropdown ml-4 relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className={`menu menu-md dropdown-content absolute top-full right-0 z-[20] m-2 p-2 shadow bg-white rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}>
            <li><Link to="/" className='text-xl' onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="text-xl"  onClick={toggleMenu}>About us</Link></li>
            <li><Link to="/contact" className="text-xl"  onClick={toggleMenu}>Connect us</Link></li>
            <li><Link to="/team" className="text-xl"onClick={toggleMenu}>Our Teams</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <li><Link to="/"  className="text-xl" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className="text-xl"  onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/contact" className="text-xl" onClick={toggleMenu}>Contact Us</Link></li>
          <li><Link to="/team" className="text-xl" onClick={toggleMenu}>Our Teams</Link></li>
        </ul>
      </div>
    </div>
  );
}
