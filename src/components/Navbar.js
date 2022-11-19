import React from "react";

const Navbar = () => {
  const login = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full bg-gray-800 h-14 px-8 font-bold flex items-center justify-between">
      <p className=" text-white ">Supplement list</p>
      <button
        onClick={login}
        className="px-4 py-1 mx-2 text-gray bg-white rounded-md hover:text-white hover:bg-gray-800 hover:cursor-pointer"
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
