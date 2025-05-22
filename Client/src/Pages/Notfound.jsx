import { Link } from "react-router-dom";

function Notfound() {

  return (
    <>
      <h1 className="bg-red-600 text-center mt-20 p-10 text-2xl font-bold">This page does not exist</h1>
      <Link to={"/"}>
          <div className="mt-20 flex items-center justify-center">
            <button className="text-white bg-blue-600 p-5 rounded-2xl flex hover:cursor-pointer border-transparent hover:text-blue-600 hover:bg-white transition-all duration-500">
              Head back to Home
            </button>
          </div>
        </Link>
    </>
  )
}

export default Notfound
