import React from "react";
import { AiOutlineLogin } from 'react-icons/ai';

const Navbar = ({setLogin}) => {

  return (
    <div className="w-full bg-gray-800 h-14 px-8 font-bold flex items-center justify-between">
      <p className=" text-white ">Supplement list</p>
      <button
        onClick={()=>setLogin(true)}
        className="px-4 py-2 mx-2 text-gray bg-white rounded-md hover:text-white hover:bg-gray-800 hover:cursor-pointer"
      >
        <AiOutlineLogin/>
      </button>
    </div>
  );
};

export default Navbar;
