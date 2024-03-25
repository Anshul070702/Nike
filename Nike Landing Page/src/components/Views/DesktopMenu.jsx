// DesktopMenu.js

import { navLinks } from "../../constants";
const DesktopMenu = () => {
  return (
    <div className="hidden md:flex  space-x-8">
      {navLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="font-montserrat text-lg text-gray-600 hover:text-gray-800 transition duration-300"
        >
          {item.label}
        </a>
      ))}

    </div>
  );
};

export default DesktopMenu;
