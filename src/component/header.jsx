function Header() {
  return (
    <div>
      <div className=" border-b-2   px-[111px] py-[18px] flex justify-between items-center p-4 bg-white text-black">
        <div className="flex gap-[32px] items-center">
            <h1 className="font-bold text-[30px]">LocalLink</h1>
            <ul className="flex gap-[32px]">
              <li className=" hover:text-blue-500 transition duration-300"><a href="#home">Home</a></li>
              <li className=" hover:text-blue-500 transition duration-300"><a href="#about">Service</a></li>
              <li className=" hover:text-blue-500 transition duration-300"><a href="#contact">Provider</a></li>
              <li className=" hover:text-blue-500 transition duration-300"><a href="#settings">About Us</a></li>
            </ul>
        </div>

        <div className="flex gap-[16px] items-center">
            <input className=" rounded bg-gray-200 p-4 h-[40px] w-[232px] outline-none" type="text" placeholder="Search..." />
            <button className=" font-bold rounded bg-gray-200 h-[40px] px-[20px]">Login</button>
            <button className=" font-bold text-white rounded bg-blue-600 h-[40px] px-[20px]">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;