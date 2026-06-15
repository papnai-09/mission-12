import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.length;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ShopHub
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-purple-600 transition duration-200 transform hover:scale-110"
          >
            <div className="text-2xl">🛒</div>
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shadow-lg">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex space-x-4 pb-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium text-sm"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium text-sm"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
