import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import SupplementService from "../api/SupplementService";

const Navbar = ({ setLogin }) => {
  const exportCsv = () => {
    console.log("exporting file..");
    SupplementService.exportSupplement();
  };

  return (
    <div className="w-full bg-gray-800 h-14 px-8 font-bold flex items-center justify-between">
      <p className="right-0 text-white ">Supplement list</p>
      <div>
        <button
          onClick={exportCsv}
          className="px-2 py-1 my-1 mx-2 text-gray bg-white rounded-md hover:text-white hover:bg-gray-800 hover:cursor-pointer"
        >
          Export
        </button>
        <button
          onClick={() => setLogin(true)}
          className="px-4 py-2 my-1 mx-2 text-gray bg-white rounded-md hover:text-white hover:bg-gray-800 hover:cursor-pointer"
        >
          <AiOutlineLogin />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
