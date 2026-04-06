import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./Peages/Home";
import About from "./Peages/About";
import Products from "./Peages/Products";
import Cart from "./Peages/Cart";
import Contact from "./Peages/Contact";
import Navbar from "./Component/Navbar";
import { useEffect, useState } from "react";
import axios from 'axios'

const App = () => {
   
  const [location, setLocation] = useState()

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude, longitude} = pos.coords
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url) 
        const exactLocation = location.data.address

        setLocation(exactLocation)
        console.log(exactLocation);
         
      }catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(()=>{
    getLocation()
  },[])

  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Navbar location={location} />
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
