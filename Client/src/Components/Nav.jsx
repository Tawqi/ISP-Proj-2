import { Link } from "react-router-dom";

function Nav() {

    return (
      <>
      <div className="flex justify-between items-center py-2">
        <h1 className="logo font-bold text-2xl">Omuk-Tomuk</h1>
        <ul className="flex gap-4">
          <li className="p-2">Home</li>
          <li className="p-2">Service</li>
          <li className="p-2">Contact</li>
          <li className="p-2">About</li>
        </ul>
      </div>
      </>
    )
  }
  
  export default Nav