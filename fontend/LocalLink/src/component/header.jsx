import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-yellow-400" : "hover:text-gray-300";

  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-bold">LocalLink</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <NavLink to="/" className={linkClass}>Home</NavLink>
            </li>

            <li>
              <NavLink to="/user/service" className={linkClass}>Service</NavLink>
            </li>

            <li>
              <NavLink to="/provider/dashboard" className={linkClass}>Provider</NavLink>
            </li>

            <li>
              <NavLink to="/about" className={linkClass}>About Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded text-black"
          />
          <button className="bg-blue-500 px-3 py-1 rounded">Login</button>
          <button className="bg-green-500 px-3 py-1 rounded">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/user/service" className={linkClass} onClick={() => setMenuOpen(false)}>
                Service
              </NavLink>
            </li>

            <li>
              <NavLink to="/provider/dashboard" className={linkClass} onClick={() => setMenuOpen(false)}>
                Provider
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
                About Us
              </NavLink>
            </li>
          </ul>

          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 rounded text-black"
          />

          <div className="flex space-x-2">
            <button className="bg-blue-500 px-3 py-1 rounded w-full">Login</button>
            <button className="bg-green-500 px-3 py-1 rounded w-full">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;