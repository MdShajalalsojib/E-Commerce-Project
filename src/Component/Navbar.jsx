import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
         <div className="bg-white py-3 shadow-2xl">
  <div className="max-w-6xl mx-auto flex justify-between items-center">

    {/* Logo Section */}
    <div className="flex gap-7 items-center">
      
      <Link to="/">
        <h1 className="font-bold text-3xl">
          <span className="text-red-500 font-serif">Z</span>aptro
        </h1>
      </Link>

      {/* Location Section */}
      <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
        <MapPin className="text-red-500" /> 
        <span className="font-semibold">
          {location ? location : "Add Address"}
        </span>

        <FaCaretDown />
      </div>

    </div>

  </div>
</div>
    );
};

export default Navbar;