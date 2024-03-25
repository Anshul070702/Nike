// MobileMenu.js
import { navLinks } from "../../constants";

const MobileMenu = () => {
  return (
    <ul className="md:hidden absolute top-14 right-0 w-40 flex flex-col items-center gap-4 bg-white p-4 rounded shadow z-10">
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="font-montserrat text-lg text-gray-600 hover:text-gray-800 transition duration-300"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
