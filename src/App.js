import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Subscribe from "./Pages/Subscribe";
import Packages from "./Pages/Packages";
import Coaching from "./Pages/Coaching";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/AuthPage/Login";
import Logout from "./Pages/AuthPage/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/Ceo-Coaching" element={<Coaching />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/Subscribe" element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
