import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || "";

  return (
    <>
      <Nav />
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mx-5 md:mx-15 my-10 mt-24">
        Service Connection Order Form
      </h1>

      <div className="sec flex flex-col lg:flex-row gap-10 justify-between mx-5">
        {/* FORM SECTION */}
        <form className="text-black bg-white rounded-2xl p-5 sm:p-10 sm:mx-10 xl:w-[45%] flex flex-col gap-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Get Your Internet Today
            </h1>
            <p className="text-sm sm:text-base">
              Fill up the form to order a connection
            </p>
          </div>

          <div className="name flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              placeholder="First name"
              className="p-3 w-full border border-gray-400 rounded-xl"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-3 w-full border border-gray-400 rounded-xl"
            />
          </div>

          <input
            type="text"
            placeholder="Phone number"
            className="p-3 w-full border border-gray-400 rounded-xl"
          />
          <input
            type="text"
            placeholder="Email address"
            className="p-3 w-full border border-gray-400 rounded-xl"
          />

          <select
            id="city"
            name="city"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose a city</option>
            <option value="Bagerhat">Bagerhat</option>
            <option value="Bandarban">Bandarban</option>
            <option value="Barisal">Barisal</option>
            <option value="Brahmanbaria">Brahmanbaria</option>
            <option value="Chandpur">Chandpur</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Comilla">Comilla</option>
            <option value="Cox's Bazar">Cox's Bazar</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Faridpur">Faridpur</option>
            <option value="Feni">Feni</option>
            <option value="Gazipur">Gazipur</option>
            <option value="Gopalganj">Gopalganj</option>
            <option value="Jamalpur">Jamalpur</option>
            <option value="Jashore">Jashore</option>
            <option value="Khagrachhari">Khagrachhari</option>
            <option value="Khulna">Khulna</option>
            <option value="Kishoreganj">Kishoreganj</option>
            <option value="Kurigram">Kurigram</option>
            <option value="Kushtia">Kushtia</option>
            <option value="Manikganj">Manikganj</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Narayanganj">Narayanganj</option>
            <option value="Narsingdi">Narsingdi</option>
            <option value="Natore">Natore</option>
            <option value="Noakhali">Noakhali</option>
            <option value="Pabna">Pabna</option>
            <option value="Patuakhali">Patuakhali</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Sylhet">Sylhet</option>
          </select>

          <select
            id="plan"
            name="plan"
            defaultValue={selectedPlan}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a plan</option>
            <option value="Basic plan - 30Mbps">Basic plan - 30Mbps</option>
            <option value="Basic plan - 45Mbps">Basic plan - 45Mbps</option>
            <option value="Basic plan - 70Mbps">Basic plan - 70Mbps</option>
            <option value="Advanced plan - 100Mbps">
              Advanced plan - 100Mbps
            </option>
            <option value="Advanced plan - 150Mbps">
              Advanced plan - 150Mbps
            </option>
            <option value="Pro plan - 200Mbps">Pro plan - 200Mbps</option>
            <option value="Pro plan - 250Mbps">Pro plan - 250Mbps</option>
            <option value="Elite plan - 300Mbps">Elite plan - 300Mbps</option>
            <option value="Elite plan - 350Mbps">Elite plan - 350Mbps</option>
          </select>

          <textarea
            rows="5"
            placeholder="Address in detail"
            className="p-3 border border-gray-400 rounded-xl"
          ></textarea>

          <button className="bg-blue-600 text-white font-semibold p-3 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border border-blue-600">
            Submit
          </button>
        </form>

        {/* CONTACT SECTION */}
        <div className="sec3-2 flex flex-col justify-between pb-5 gap-10 px-5 sm:px-10 xl:w-[45%]">
          <div className="contact-details flex flex-col gap-3">
            <h1 className="text-xl sm:text-2xl font-bold">Contact Us</h1>
            <p className="font-light text-sm sm:text-base max-w-md">
              Email, call, complete the form or contact us on Facebook,
              Instagram or WhatsApp to get your Internet Connection.
            </p>
            <p className="underline font-light text-sm sm:text-base">
              Omuk-Tomuk@omuk.com
            </p>
            <p className="underline font-light text-sm sm:text-base">
              234-544-345
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <a
              href="#"
              className="flex gap-3 items-center text-base sm:text-lg"
            >
              <i className="fab fa-facebook text-xl sm:text-2xl"></i>
              <span className="underline">Facebook</span>
            </a>
            <a
              href="#"
              className="flex gap-3 items-center text-base sm:text-lg"
            >
              <i className="fab fa-instagram text-xl sm:text-2xl"></i>
              <span className="underline">Instagram</span>
            </a>
            <a
              href="#"
              className="flex gap-3 items-center text-base sm:text-lg"
            >
              <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
              <span className="underline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Contact;
