import React, { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { BiArrowFromLeft } from "react-icons/bi";
import lodash from "lodash";

const Login = ({ setLogin }) => {
  console.log("rendered in login")
  const [submit, setSubmit] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmit({
      ...submit,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(lodash.cloneDeep(submit));
    setLogin(false);
    setSubmit({});
  };

  useEffect(() => {
    console.log(submit);
  }, [submit]);

  return (
    <div className="w-full bg-gray-800 h-14 px-8 font-bold flex items-center justify-end">
      <input
        type="text"
        name="name"
        placeholder="name"
        className="px-1 py-1 mx-2 text-gray bg-white rounded-md"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        className="px-1 py-1 mx-2 text-gray bg-white rounded-md"
        onChange={handleChange}
      ></input>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 mx-2 text-gray bg-white rounded-md hover:text-white hover:bg-gray-800 hover:cursor-pointer"
      >
        <BiArrowFromLeft />
      </button>
      <button
        onClick={() => setLogin(false)}
        className="px-4 py-2 mx-2 text-gray bg-white rounded-md hover:text-white hover:bg-gray-800 hover:cursor-pointer"
      >
        <GiCancel />
      </button>
    </div>
  );
};

export default Login;
