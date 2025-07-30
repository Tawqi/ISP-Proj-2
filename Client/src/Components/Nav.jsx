import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install with: npm install lucide-react

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-full mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={"/"}>
          <button className="logo font-bold text-xl md:text-2xl lg:text-3xl text-white hover:cursor-pointer">
            Omuk <span className="text-blue-600">Tomuk</span>
          </button>
        </Link>

        <div className="menu-btn md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/*Desktop Menu*/}
        <ul className="hidden md:flex gap-4 justify-evenly text-white">
          <li>
            <Link to={"/"}>
              <button className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Home</button>
            </Link>
          </li>
          <li>
            <Link to={"/service_plan"}>
              <button className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Service Plans</button>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <button className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Contact</button>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <button className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">About</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black text-white px-4 pb-4 gap-3">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>
          <Link to="/service_plan" onClick={() => setMenuOpen(false)}>
            <li>Service Plans</li>
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <li>Contact</li>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li>About</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
