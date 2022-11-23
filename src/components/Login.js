import React, { useRef, useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { BiArrowFromLeft } from "react-icons/bi";

const Login = ({ setLogin }) => {
  const username = useRef("");
  const password = useRef("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") username.current = value;
    if (name === "password") password.current = value;
    if (e.key === "Enter") {
      handleSubmit();
      setLogin(false);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting credentials: ", username.current, password.current);
  };

  useEffect(() => {
  }, []);

  return (
    <div className="w-full bg-gray-800 h-14 px-8 font-bold flex items-center justify-end">
      <input
        type="text"
        name="username"
        placeholder="name"
        className="px-1 py-1 mx-2 text-gray bg-white rounded-md"
        onChange={handleChange}
        onKeyPress={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        onClick={handleChange}
        placeholder="password"
        className="px-1 py-1 mx-2 text-gray bg-white rounded-md"
        onKeyPress={handleChange}
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
