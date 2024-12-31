import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="h-16 flex items-center justify-between px-4 bg-gray-800 text-white border-b-2 border-gray-700">
      {/* Navigation links */}
      <div>
        <span className="text-2xl font-semibold">LOGO</span>
      </div>
      <div className="flex space-x-4">
        {navItems.map((nav, i) => (
          <NavLink
            key={i}
            to={nav.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-600"
              }`
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </div>

      {/* Login/Logout buttons */}

      <div className="flex gap-2">
        <Link
          to="/signup"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
        >
          Signup
        </Link>
        {!token ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
