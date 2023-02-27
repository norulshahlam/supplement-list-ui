import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TableHeader from "./components/table/TableHeader";
import { useState } from "react";

function App() {

  const [login, setLogin] = useState(false);
  return (

    <>
      {login ? <Login setLogin={setLogin} /> : <Navbar setLogin={setLogin} />}
      <TableHeader />
    </>
  );
}

export default App;
