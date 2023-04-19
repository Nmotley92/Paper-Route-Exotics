import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center mx-auto">
        <ul className="flex space-x-4 mx-auto">
          <img
            src={`${process.env.PUBLIC_URL}/images/paperroute.png`}
            alt=""
            className="rounded-full"
            style={{ height: '100px', width: '100px' }}
          />
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dogs" className="text-white hover:text-gray-200">
              Our Dogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;


