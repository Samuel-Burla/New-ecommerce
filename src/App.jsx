import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FirstNavbar from "./templates/FirstNavbar/FirstNavbar";
import SecondNavbar from "./templates/SecondNavbar/SecondNavbar";
import Categories from "./pages/categories/Categories";

import "./App.css";

function App() {
  return (
    <>
    <FirstNavbar/>
    <SecondNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
