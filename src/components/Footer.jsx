import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Crypto Tracker. All Rights Reserved.
        </p>
        <p className="text-sm">
          Powered by{" "}
          <a
            href="https://www.coingecko.com/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoinGecko API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
