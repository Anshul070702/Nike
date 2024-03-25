// Nav.js
import { hamburger } from "../Assets/Icons";
import { headerLogo } from "../Assets/Images";
import DesktopMenu from "./Views/DesktopMenu";
import MobileMenu from "./Views/MobileMenu";
import Switcher from "./Switcher";
import { useState } from "react";
const Nav = () => {
  const [isToggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!isToggle);
  };

  return (
    <header className="py-4 px-6 md:px-0 absolute z-10 w-full bg-white dark:bg-slate-800">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="w-auto h-8 md:h-10"
          />
        </a>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Switcher />

          {/* Hamburger Icon */}
          <div className="ml-4 cursor-pointer" onClick={toggleMenu}>
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <DesktopMenu />

        {/* Sign in */}
        <div className=" hidden md:flex gap-4 text-lg leading-normal font-medium font-montserrat ">
          <Switcher /> {/* Include the Switcher component */}
        </div>

        {/* Hamburger Menu */}
        {isToggle && <MobileMenu />}
      </nav>
    </header>
  );
};

export default Nav;
