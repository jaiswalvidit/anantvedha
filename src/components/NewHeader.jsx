import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './images/startup/img5.jpg';
import { AccountContext } from './context/AccountProvider';
import Rotate from './Rotate';

export default function NewHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useContext(AccountContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define colors based on the mode
  const backgroundColor = mode ? 'bg-black' : 'bg-white';
  const textColor = mode ? 'text-white' : 'text-black';

  return (
    <div className={`navbar ${backgroundColor} font-bold text-lg flex items-center justify-between px-4`}>
      <div className="flex items-center">
        <div className="navbar-start mr-4 flex items-center">
          <img src={img1} alt="Your Logo" className="rounded-full object-contain" style={{ height: '50px' }} />
          <Link to="/" className={`btn btn-ghost text-4xl ${textColor}`} onClick={toggleMenu}>AnantVedha</Link>
        </div>
      </div>
      <div className="navbar-end flex items-center">
        <div className="dropdown ml-4 relative">
          <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${textColor}`} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className={`menu menu-md dropdown-content absolute top-full right-0 z-[20] m-2 p-2 shadow ${backgroundColor} rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}>
            <li><Link to="/" className={`text-xl ${textColor}`} onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className={`text-xl ${textColor}`} onClick={toggleMenu}>About us</Link></li>
            <li><Link to="/contact" className={`text-xl ${textColor}`} onClick={toggleMenu}>Connect us</Link></li>
            <li><Link to="/team" className={`text-xl ${textColor}`} onClick={toggleMenu}>Our Teams</Link></li>
          </ul>
        </div>
      </div>
      {/* <Rotate/> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <li><Link to="/" className={`text-xl ${textColor}`} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className={`text-xl ${textColor}`} onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/contact" className={`text-xl ${textColor}`} onClick={toggleMenu}>Contact Us</Link></li>
          <li><Link to="/team" className={`text-xl ${textColor}`} onClick={toggleMenu}>Our Teams</Link></li>
        </ul>
      </div>
    </div>
  );
}
