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
        <h1 className="font-bold text-3xl mx-20 my-10 mt-20">Service Connection Order from</h1>
        <div className="sec flex justify-between">
            <form className="text-black bg-white rounded-2xl p-10 mx-20 w-120 flex flex-col gap-5">
            <div>
                <h1 className="text-3xl font-bold">Get Your Internet Today</h1>
            <p>Fill up the form to order a connection</p>
            </div>
            <div className="name flex gap-5 ">
                <input type="text" placeholder="First name" className="p-3 w-full border border-gray-400 rounded-xl"></input>
            <input type="text" placeholder="Last name" className="p-3 w-full border border-gray-400 rounded-xl"></input>
            </div>
            <input type="text" placeholder="Phone number" className="p-3 w-full border border-gray-400 rounded-xl"></input>
            <input type="text" placeholder="Phone number" className="p-3 w-full border border-gray-400 rounded-xl"></input>
            <select
              id="plan"
              name="plan"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Choose a city</option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="khulna">Khulna</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="sylhet">Sylhet</option>
                <option value="barishal">Barishal</option>
                <option value="rangpur">Rangpur</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="narayanganj">Narayanganj</option>
                <option value="gazipur">Gazipur</option>
                <option value="comilla">Comilla</option>
                <option value="coxsbazar">Cox's Bazar</option>
                <option value="bogura">Bogura</option>
                <option value="tangail">Tangail</option>
                <option value="jashore">Jashore</option>
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
              <option value="Advanced plan - 100Mbps">Advanced plan - 100Mbps</option>
              <option value="Advanced plan - 150Mbps">Advanced plan - 150Mbps</option>
              <option value="Pro plan - 200Mbps">Pro plan - 200Mbps</option>
              <option value="Pro plan - 250Mbps">Pro plan - 250Mbps</option>
              <option value="Elite plan - 300Mbps">Elite plan - 300Mbps</option>
              <option value="Elite plan - 350Mbps">Elite plan - 350Mbps</option>
            </select>
            <textarea rows="5" placeholder="Address in detail" className="p-3 border border-gray-400 rounded-xl"></textarea>
            <button className="bg-blue-600 text-white font-semibold p-3 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover: border border-blue-600">Submit</button>
        </form>
        
          <div className="sec3-2 flex flex-col justify-between pb-5">
            <div className="contact-details flex flex-col gap-5">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="font-thin w-150">
                Email, call, complete the form or contact us on Facebook, Intagram or 
                Whats App to get your Internet Connection. </p>
              <p className="underline font-thin">Omuk-Tomuk@omuk.com</p>
              <p className="underline font-thin">234-544-345</p>
            </div>
            <div className="flex flex-col justify-between gap-15">
            <a href="" className="flex gap-5"><i className="fab fa-facebook text-2xl"></i><span className="underline text-2xl">Facebook</span></a>
            <a href="" className="flex gap-5"><i className="fab fa-instagram text-2xl"></i><span className="underline text-2xl">Instagram</span></a>
            <a href="" className="flex gap-5"><i className="fab fa-whatsapp text-2xl"></i><span className="underline text-2xl">Whats App</span></a>
            </div>
          </div>
        
        </div>
        <Footer />
        </>
    )
}
export default Contact