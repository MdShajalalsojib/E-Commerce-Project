import React from "react";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const location = false;
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/*logo section*/}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h2 className="font-bold text-3xl text-black">
              <span className="text-red-500 font-serif text-4xl">S</span>hajalal
            </h2>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            {<FaCaretDown />}
          </div>
        </div>
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold text-black">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-600 text-gray-600  text-shadow-blue-400 " : " text-shadow-black"} cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-600 text-gray-600  text-shadow-blue-400 " : " text-shadow-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-600 text-gray-600  text-shadow-blue-400 " : " text-shadow-black"} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-600 text-gray-600  text-shadow-blue-400 " : " text-shadow-black"} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7 text-blue-500" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
