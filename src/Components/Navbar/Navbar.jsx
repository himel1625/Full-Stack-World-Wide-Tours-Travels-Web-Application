import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClear } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 z-10 bg-blue-300 shadow-md'>
      <div className='container  flex  items-center h-20 justify-between'>
        {/* Logo */}
        <div className='text-2xl font-bold text-blue-900 mx-3 md:mx-10'>
          WORLD-WISE
        </div>

        {/* Menu Icon */}
        <div className='md:hidden mx-3'>
          {isMenuOpen ? (
            <GrClear
              size={24}
              className='cursor-pointer'
              onClick={toggleMenu}
              aria-label='Close Menu'
            />
          ) : (
            <GiHamburgerMenu
              size={24}
              className='cursor-pointer'
              onClick={toggleMenu}
              aria-label='Open Menu'
            />
          )}
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } absolute md:relative top-20 right-0 w-full md:w-auto md:flex md:justify-center md:items-center md:space-x-6 md:top-0 md:right-0 p-4 md:p-0 bg-blue-300 transition-transform duration-700 ease-in-out`}
        >
          <div className='md:flex md:gap-6'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block md:inline-block text-lg font-bold text-center ${
                  isActive ? 'text-blue-900' : 'text-blue-700'
                } hover:text-blue-900 py-2`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block md:inline-block text-lg font-bold text-center ${
                  isActive ? 'text-blue-900' : 'text-blue-700'
                } hover:text-blue-900 py-2`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block md:inline-block text-lg font-bold text-center ${
                  isActive ? 'text-blue-900' : 'text-blue-700'
                } hover:text-blue-900 py-2`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block md:inline-block text-lg font-bold text-center ${
                  isActive ? 'text-blue-900' : 'text-blue-700'
                } hover:text-blue-900 py-2`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `block md:inline-block text-lg font-bold text-center ${
                  isActive ? 'text-blue-900' : 'text-blue-700'
                } hover:text-blue-900 py-2`
              }
            >
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
