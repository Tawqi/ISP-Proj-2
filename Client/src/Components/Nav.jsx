import { Link } from "react-router-dom";

function Nav() {

    return (
      <>
      <div className="flex justify-between items-center py-2">
        <h1 className="logo font-bold text-2xl">Omuk-Tomuk</h1>
        <ul className="flex gap-4">
          <li className="p-2"><a href="#" className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Home</a></li>
          <li className="p-2"><a href="#" className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Service</a></li>
          <li className="p-2"><a href="#" className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">Contact</a></li>
          <li className="p-2"><a href="#" className="border-b-2 border-transparent hover:border-blue-600 transition-all duration-500">About</a></li>
        </ul>
      </div>
      </>
    )
  }
  
  export default Nav