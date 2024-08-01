import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FirstNavbar from "./templates/FirstNavbar/FirstNavbar";
import SecondNavbar from "./templates/SecondNavbar/SecondNavbar";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";

import "./App.css";

function App() {
  return (
    <>
      <FirstNavbar />
      <SecondNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
