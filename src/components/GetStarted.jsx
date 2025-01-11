import React from "react";
import signupImage from "../assets/signup-image.jpg"; 

const GetStarted = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h3>
      <p className="text-lg text-gray-600 mb-4">
        With our range of features that you can equip for free, KoinX allows you to be more educated and
        aware of your tax reports.
      </p>
      <img src={signupImage} alt="Sign Up" className="w-full mb-4" />
      <button className="flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-lg mt-auto">
        Get Started for FREE
        <span className="ml-2">➡</span>
      </button>
    </div>
  );
};

export default GetStarted;
