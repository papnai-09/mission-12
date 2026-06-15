import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ShopHub
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-purple-600 transition duration-200 transform hover:scale-110"
            aria-label={`Shopping cart with ${totalItems} item${totalItems === 1 ? '' : 's'}`}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 6h12m-10 0a1 1 0 102 0m6 0a1 1 0 102 0"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shadow-lg">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden flex space-x-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-700 hover:text-purple-600 transition duration-200 font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
