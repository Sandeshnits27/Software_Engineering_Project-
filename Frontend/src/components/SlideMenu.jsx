import React from "react";

const SlideMenu = ({ setIsLoggedIn }) => {
  return (
    <div className="bg-gray-800 w-56 p-4 rounded-lg shadow-xl text-white space-y-3">
      <p className="font-semibold border-b border-gray-600 pb-1">Account</p>
      <button className="w-full text-left hover:text-blue-400">Account Details</button>
      <button className="w-full text-left hover:text-blue-400">Team Details</button>
      <button
        onClick={() => setIsLoggedIn(false)}
        className="w-full text-left text-red-400 hover:text-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default SlideMenu;
