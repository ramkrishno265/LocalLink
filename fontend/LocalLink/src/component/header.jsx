import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white">
      <div className=" sm:justify-start sm:space-y-4 md:items-center lg:items-center md:justify-between max-w-7xl  flex items-center justify-between p-4">
        
        <div className="flex items-center space-x-6 gap-32" >

       
        <h1 className="text-xl font-bold">LocalLink</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Service</a></li>
          <li><a href="#contact">Provider</a></li>
          <li><a href="#settings">About Us</a></li>
        </ul>
        </div>

        {/* Right Side */}
        <div className="hidden md:hidden lg:flex  md:flex items-center space-x-3">
          <input
            type="text"
                   
            placeholder="Search..."
            className="sm:max-w-[330px] px-2 py-1 rounded text-black"
          />
          <button className="bg-blue-500 px-3 py-1 rounded">Login</button>
          <button className="bg-green-500 px-3 py-1 rounded">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden items-center px-auto text-2xl mt-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="  lg:hidden px-4 pb-4 space-y-3">
          <ul className="md:hidden space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Service</a></li>
            <li><a href="#contact">Provider</a></li>
            <li><a href="#settings">About Us</a></li>
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