import { Link } from "react-router-dom";

function Nav() {

    return (
      <>
      <nav className="fixed top-0 w-full z-50 bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
          <Link to={"/"}>
          <button className="logo font-bold text-xl md:text-2xl lg:text-3xl hover:cursor-pointer">
            Omuk <span className="text-blue-600">Tomuk</span>
          </button>
          </Link>
          <ul className="flex gap-4">
            <li className="p-2">
              <Link to={"/"}>
                <button className="hover:cursor-pointer border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Home</button>
              </Link>
            </li>
            <li className="p-2">
              <Link to={"/service_plan"}>
                <button className="hover:cursor-pointer border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Service Plans</button>
              </Link>
            </li>
            <li className="p-2">
              <Link to={"/contact"}>
                <button className="hover:cursor-pointer border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Contact</button>
              </Link>
            </li>
            <li className="p-2">
              <Link to={"/about"}>
                <button className="hover:cursor-pointer border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">About</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      </>
    )
  }
  
  export default Nav