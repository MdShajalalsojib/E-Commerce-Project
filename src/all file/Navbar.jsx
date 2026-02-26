import React from 'react';

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100/80 backdrop-blur-md shadow-lg sticky top-0 z-50 px-6">

  {/* Mobile Menu */}
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        ☰
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Shop</a></li>
        <li><a>Categories</a></li>
        <li><a>Deals</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>

    {/* Logo */}
    <a className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      SojibMart
    </a>
  </div>

  {/* Desktop Menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium text-base">
      <li><a className="hover:text-primary hover:backdrop-blur-2xl">Home</a></li>
      <li><a className="hover:text-primary">Shop</a></li>
      <li><a className="hover:text-primary">Categories</a></li>
      <li><a className="hover:text-primary">Offers</a></li>
    </ul>
  </div>

  {/* Right Section */}
  <div className="navbar-end gap-4">

    {/* Search */}
    <div className="hidden md:flex">
      <input
        type="text"
        placeholder="Search products..."
        className="input input-bordered rounded-full w-64"
      />
    </div>

    {/* Cart */}
    <div className="indicator">
      <span className="indicator-item badge badge-primary badge-sm">0</span>
      <button className="btn btn-ghost btn-circle text-lg">
        🛒
      </button>
    </div>

    {/* Profile Dropdown */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full">
          <img src="https://i.pravatar.cc/100" alt="profile" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a>Profile</a></li>
        <li><a>Orders</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

  </div>
</div>
        </div>
    );
};

export default Navbar;