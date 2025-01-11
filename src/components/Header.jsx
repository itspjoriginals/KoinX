import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">KoinX</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/get-started" className="hover:text-gray-400">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
