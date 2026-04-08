import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive ? "text-yellow-400" : "hover:text-gray-300";

  const handleSelect = (type) => {
    setOpenSignup(false);
    if (type === "provider") {
      navigate("/user/signup");
    } else {
      navigate("/provider/signup");
    }
  };

  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Left */}
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-bold">LocalLink</h1>

          <ul className="hidden md:flex space-x-6">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/user/service" className={linkClass}>Service</NavLink></li>
            <li><NavLink to="/provider/dashboard" className={linkClass}>Provider</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About Us</NavLink></li>
          </ul>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center space-x-3 relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded text-black"
          />

          <button className="bg-blue-500 px-3 py-1 rounded">
            Login
          </button>

          {/* Sign Up */}
          <div className="relative">
            <button
              onClick={() => setOpenSignup(!openSignup)}
              className="bg-green-500 px-3 py-1 rounded"
            >
              Sign Up
            </button>

            {openSignup && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                <button
                  onClick={() => handleSelect("provider")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Service Provider
                </button>

                <button
                  onClick={() => handleSelect("user")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  User
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-800">
          <ul className="space-y-2">
            <li><NavLink to="/" className={linkClass} onClick={()=>setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/user/service" className={linkClass} onClick={()=>setMenuOpen(false)}>Service</NavLink></li>
            <li><NavLink to="/provider/dashboard" className={linkClass} onClick={()=>setMenuOpen(false)}>Provider</NavLink></li>
            <li><NavLink to="/about" className={linkClass} onClick={()=>setMenuOpen(false)}>About Us</NavLink></li>
          </ul>

          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 rounded text-black"
          />

          <div className="flex space-x-2">
            <button className="bg-blue-500 px-3 py-1 rounded w-full">Login</button>

            <button
              onClick={() => setOpenSignup(!openSignup)}
              className="bg-green-500 px-3 py-1 rounded w-full"
            >
              Sign Up
            </button>
          </div>

          {openSignup && (
            <div className="bg-white text-black rounded shadow mt-2">
              <button
                onClick={() => handleSelect("provider")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Service Provider
              </button>

              <button
                onClick={() => handleSelect("user")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                User
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;