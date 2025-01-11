import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-2xl font-bold text-blue-600">
          <span>KoinX</span> 
        </div>


        <div className="flex space-x-8">
          <a href="#crypto-taxes" className="text-lg text-gray-700 hover:text-blue-600">
            Crypto Taxes
          </a>
          <a href="#free-tools" className="text-lg text-gray-700 hover:text-blue-600">
            Free Tools
          </a>
          <a href="#resource-center" className="text-lg text-gray-700 hover:text-blue-600">
            Resource Center
          </a>
        </div>

        {/* Get Started button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
