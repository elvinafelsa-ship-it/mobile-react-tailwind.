import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const menus = [
    { name: "Home", path: "/" },
    { name: "Produk", path: "/produk" },
    { name: "Profil", path: "/profil" },
    { name: "Upload", path: "/upload" }
  ];

  return (
    <nav className="bg-blue-600 text-white p-3 flex justify-around fixed bottom-0 w-full shadow-lg">
      {menus.map((menu) => (
        <Link
          key={menu.name}
          to={menu.path}
          className={`px-3 py-1 rounded transition ${
            pathname === menu.path ? "bg-blue-800" : "hover:bg-blue-500"
          }`}
        >
          {menu.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;