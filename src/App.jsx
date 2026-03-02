import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./Peages/Home";
import About from "./Peages/About";
import Products from "./Peages/Products";
import Cart from "./Peages/Cart";
import Contact from "./Peages/Contact";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
