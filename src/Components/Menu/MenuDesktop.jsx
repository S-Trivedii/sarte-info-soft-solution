/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MenuDesktop = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Blog", url: "/blog" },
    { id: 3, name: "Product", url: "/products" },
    { id: 4, name: "Contact-Us", url: "/contact-us" },
    { id: 5, name: "Knowledge", url: "/knowledge" },
    { id: 6, name: "SignUp", url: "/create-user" },
    { id: 7, name: "Login", url: "/login-user" },
  ];

  return (
    <div>
      <ul className="hidden md:flex items-center gap-3 font-semibold">
        {data.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:text-[#18dae4] px-2 py-1 rounded-md"
          >
            <NavLink
              to={item.url}
              className={({ isActive }) => (isActive ? "text-[#18dae4]" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDesktop;
