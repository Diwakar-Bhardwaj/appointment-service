import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import UploadImageModal from './UploadImageModal';
import ProfileImageUploader from './ProfileImageUploader';
 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
const [showUploadModal, setShowUploadModal] = useState(false);


  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    ...(isLoggedIn ? [] : [{ name: 'Sign Up', path: '/pages' }]),
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-600">MediCare</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-emerald-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 items-center text-lg font-medium" onClick={() => scrollTo(0, 0)}>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/appointments">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Appointment
            </button>
          </NavLink>

          {isLoggedIn && (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Profile
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                    onClick={() => setShowDropdown(false)}
                  >
                    View Profile
                  </NavLink>

                    <button
                    onClick={() => {
                      setShowDropdown(false);
                      setShowUploadModal(true); // Open the modal
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                     type="button" 
                  >
                    Upload Image
                  </button>


                  <NavLink
                    to="/pages/update"
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                    onClick={() => setShowDropdown(false)}
                  >
                    Update Password
                  </NavLink>
                  <NavLink to="/appointments/my" onClick={() => setIsOpen(false)} className="block text-black">
                Your Appointment
              </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
                      <UploadImageModal
              isOpen={showUploadModal}
              onClose={() => setShowUploadModal(false)}
            />
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-lg">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/appointments">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Appointment
            </button>
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/profile" onClick={() => setIsOpen(false)} className="block text-black">
                Profile
              </NavLink>
              <NavLink to="/pages/update" onClick={() => setIsOpen(false)} className="block text-black">
                Update Password
              </NavLink>
              <NavLink to="/pages/appointments" onClick={() => setIsOpen(false)} className="block text-black">
                Your Appointment
              </NavLink>
              <p
                onClick={handleLogout}
                className="block px-4 py-2 text-red-600 cursor-pointer hover:bg-red-100"
              >
                Logout
              </p>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
