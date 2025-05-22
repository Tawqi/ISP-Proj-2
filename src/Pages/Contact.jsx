import { Link } from "react-router-dom"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { useLocation } from "react-router-dom";


function Contact(){
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan || "";

    return (
        <>
        <Nav />
<h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mx-5 sm:mx-10 lg:mx-20 my-10 mt-24">
  Service Connection Order Form
</h1>

<div className="sec flex flex-col xl:flex-row gap-10 justify-between">
  {/* FORM SECTION */}
  <form className="text-black bg-white rounded-2xl p-5 sm:p-10 mx-5 sm:mx-10 xl:w-[45%] flex flex-col gap-5">
    <div>
      <h1 className="text-xl sm:text-2xl font-bold">Get Your Internet Today</h1>
      <p className="text-sm sm:text-base">Fill up the form to order a connection</p>
    </div>

    <div className="name flex flex-col sm:flex-row gap-5">
      <input type="text" placeholder="First name" className="p-3 w-full border border-gray-400 rounded-xl" />
      <input type="text" placeholder="Last name" className="p-3 w-full border border-gray-400 rounded-xl" />
    </div>

    <input type="text" placeholder="Phone number" className="p-3 w-full border border-gray-400 rounded-xl" />
    <input type="text" placeholder="Email address" className="p-3 w-full border border-gray-400 rounded-xl" />

    <select
      id="city"
      name="city"
      className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Choose a city</option>
      {/* city options */}
    </select>

    <select
      id="plan"
      name="plan"
      className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Select a plan</option>
      {/* plan options */}
    </select>

    <textarea rows="5" placeholder="Address in detail" className="p-3 border border-gray-400 rounded-xl"></textarea>

    <button className="bg-blue-600 text-white font-semibold p-3 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border border-blue-600">
      Submit
    </button>
  </form>

  {/* CONTACT SECTION */}
  <div className="sec3-2 flex flex-col justify-between pb-5 gap-10 px-5 sm:px-10 xl:w-[45%]">
    <div className="contact-details flex flex-col gap-3">
      <h1 className="text-xl sm:text-2xl font-bold">Contact Us</h1>
      <p className="font-light text-sm sm:text-base max-w-md">
        Email, call, complete the form or contact us on Facebook, Instagram or WhatsApp to get your Internet Connection.
      </p>
      <p className="underline font-light text-sm sm:text-base">Omuk-Tomuk@omuk.com</p>
      <p className="underline font-light text-sm sm:text-base">234-544-345</p>
    </div>

    <div className="flex flex-col gap-5">
      <a href="#" className="flex gap-3 items-center text-base sm:text-lg">
        <i className="fab fa-facebook text-xl sm:text-2xl"></i><span className="underline">Facebook</span>
      </a>
      <a href="#" className="flex gap-3 items-center text-base sm:text-lg">
        <i className="fab fa-instagram text-xl sm:text-2xl"></i><span className="underline">Instagram</span>
      </a>
      <a href="#" className="flex gap-3 items-center text-base sm:text-lg">
        <i className="fab fa-whatsapp text-xl sm:text-2xl"></i><span className="underline">WhatsApp</span>
      </a>
    </div>
  </div>
</div>

        <Footer />
        </>
    )
}
export default Contact