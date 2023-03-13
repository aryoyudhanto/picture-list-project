import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-500">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Users App</Link>
      </div>
      <div className="flex flex-1 justify-end">
        <div className="flex-none">
          <ul className="menu menu-horizontal p-1">
            <li>
              <Link to="/" className="text-white text-sm md:text-base ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/favorite" className="text-white text-sm md:text-base">
                Favorite
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar text-white">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-blue-500 rounded-box w-52"
          >
            <li className="text-white hover:bg-white hover:text-black">
              <p>Settings</p>{" "}
            </li>
            <li className="text-white hover:bg-white hover:text-black">
              <p>Logout</p>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
