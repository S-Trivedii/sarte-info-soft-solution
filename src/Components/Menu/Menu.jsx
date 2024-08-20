/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";
import Wrapper from "../Wrapper";
import sarteLogo from "../../assets/sarte.png";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controllerBar = () => {
    if (window.scrollY > 300) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[90px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controllerBar);
    return () => window.removeEventListener("scroll", controllerBar);
  }, [lastScrollY]);

  return (
    <nav
      className={`menu w-full h-[60px] md:h-[80px] bg-[#141314] flex items-center justify-between z-[999] sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <Link to="/">
          <img
            className="w-[60px] md:w-[100px]"
            src={sarteLogo}
            alt="Sarte Logo"
          />
        </Link>

        <MenuDesktop
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
        />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2">
          <Link to="#">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/[0.05] relative">
              <GoPerson className="text-[15px] md:text-[20px]" />
            </div>
          </Link>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center cursor-pointer hover:bg-black/[0.05] relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[22px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Menu;
