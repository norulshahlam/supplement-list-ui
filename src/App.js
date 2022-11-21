import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TailwindSupplementList from "./components/TailwindSupplementList";
import { useState } from "react";
function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? <Login setLogin={setLogin} /> : <Navbar setLogin={setLogin} />}
      <TailwindSupplementList />
    </>
  );
}

export default App;
