import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black">
          <img
            src={`${process.env.PUBLIC_URL}/images/paperroute.png`}
            alt=""
            className="rounded-full"
            style={{ height: '100px', width: '100px' }}
          />
        </Link>
        <div className="absolute top-0 right-0 mr-8 lg:hidden" style={{top: '45px'}}>
          <FaBars
            className="text-white cursor-pointer"
            onClick={toggleMenu}
            style={{ height: '30px', width: '30px' }}
          />
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4 mx-auto lg:items-center`}
        >
          <li>
            <Link
              to="/"
              className="text-white hover:text-black lg:text-white lg:hover:text-black"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dogs"
              className="text-white hover:text-black lg:text-white lg:hover:text-black"
              onClick={toggleMenu}
            >
              Our Dogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-black lg:text-white lg:hover:text-black"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

