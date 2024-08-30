/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuMobile = ({ setMobileMenu }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Blog", url: "/blog" },
    { id: 3, name: "Product", url: "/products" },
    { id: 4, name: "Contact-Us", url: "/contact-us" },
    { id: 5, name: "Knowledge", url: "/knowledge" },
    { id: 6, name: "SignUp", url: "/create-user" },
  ];

  return (
    <div>
      <ul className="flex flex-col md:hidden font-bold absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#141314] border-t-[1px]">
        {data.map((item) => (
          <NavLink
            key={item.id}
            to={item.url}
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              `hover:bg-white/[0.09] rounded-md cursor-pointer py-4 px-5 ${
                isActive ? "text-[#0aa5cc]" : ""
              }`
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
