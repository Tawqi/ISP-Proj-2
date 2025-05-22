import { Link } from "react-router-dom"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer";

import pricingPlans from '../data/pricingPlans';



function Service_plan(){
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    return (
        <>
        <Nav />
        <h1 className="text-3xl font-bold mt-20">Pick the<span className="text-blue-600"> Perfect </span>
            Internet Plan</h1>
            <div className=" grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`card flex flex-col backdrop-blur-md ${
                plan.isHighlighted
                  ? "bg-gradient-to-r from-blue-600/30 to-black/20 border-blue-600"
                  : "bg-gradient-to-r from-gray-400/30 to-black/20"
              }`}
            >
              <div
                className={`p-5 flex flex-col gap-3 border rounded-t-xl ${
                  plan.isHighlighted ? "border-blue-600" : ""
                }`}
              >
                <h1 className="text-m">{plan.title}</h1>
                <h1
                  className={`text-5xl font-bold ${
                    plan.isHighlighted ? "text-blue-600" : ""
                  }`}
                >
                  {plan.speed}
                  <span className="text-2xl">Mbps</span>
                </h1>
                <p className="text-3xl font-semibold">Features</p>
                <ul className="flex flex-col gap-3 mt-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-1xl">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`p-5 border-x border-b rounded-b-xl flex flex-col gap-2 ${
                  plan.isHighlighted ? "border-blue-600" : ""
                }`}
              >
                <h1 className="text-3xl font-semibold">
                  {plan.price}Tk <span className="text-sm">Per month</span>
                </h1>
                <p className="text-sm">5% VAT included</p>
                <p className="mt-4">Installation charge Free</p>
                <Link
                  to="/contact"
                  state={{ selectedPlan: `${plan.title} - ${plan.speed}Mbps` }}
                >
                  <button className="hover:cursor-pointer text-white text-2xl bg-blue-600 p-2 w-full rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-blue-600">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-3xl shadow-lg hover:bg-blue-700 transition"
            aria-label="Scroll to top">
            ↑ Go Back to Top
          </button>
        </div>
            <Footer />
        </>
    )
}
export default Service_plan