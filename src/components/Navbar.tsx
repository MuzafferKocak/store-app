import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[50px] text-white bg-green-600 px-5">
      <h3 className="font-bold italic">MeK Store</h3>
      <div>
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
