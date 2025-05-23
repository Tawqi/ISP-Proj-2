import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import pricingPlans from "../data/pricingPlans";

const comments = [
  {
    name: "Mr. Kashem Uddin",
    text: "I’ve tried multiple providers, but Omuk-Tomuk is by far the fastest and most reliable. No buffering during movies or lag in online games. Highly recommend!",
  },
  {
    name: "Ms. Rina Akter",
    text: "Omuk-Tomuk’s support team is always available and super helpful. I’m really impressed with their consistency and service.",
  },
  {
    name: "Mr. Habib Rahman",
    text: "Switched from another ISP and never looked back. The speed and stability are exactly what I needed for my home office.",
  },
];

function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const targetRef = useRef(null);

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mainWifi = useRef(null);

  useEffect(() => {
    const update = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <>
      <Nav />
      <div className="sec1 lg:flex justify-between my-8 mt-20 hidden ">
        <div className="sec1-1 flex flex-col justify-between items-start ">
          <h1 className="font-bold xl:text-5xl lg:text-3xl md:text-3xl">
            Fast, Reliable <span className="text-blue-600">Wifi</span> <br />
            for Every Need
          </h1>
          <button
            onClick={scrollToSection}
            className="xl:px-6 xl:py-3 lg:px-4 lg:py-2 md:px-2 md:py-1 md:text-lg rounded-4xl xl:text-2xl bg-blue-600 font-bold text-white border-2 border-transparent transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-blue-600"
          >
            VIEW PLANS
          </button>
        </div>
        <div
          className="sec1-2 big-logo p-15 rounded-full "
          ref={mainWifi}
          style={{
            boxShadow: `${(mousePos.x - window.innerWidth / 2) / 20}px ${(mousePos.y - window.innerHeight / 2) / 20}px 46px rgba(37, 99, 235, 0.8)`,
          }}
        >
          <svg
            viewBox="0 0 640 512"
            className="xl:w-70 xl:h-70 lg:w-50 lg:h-50 md:w-50 md:h-50 text-blue-600"
            fill="currentColor"
          >
            <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
          </svg>
        </div>
        <div className="sec1-3 flex flex-right flex-col text-right justify-between">
          <h2 className="xl:text-2xl">Superfast Speeds</h2>
          <p className="max-w-xs xl:text-xl font-extralight">
            Stay connected without interruptions! Onuk{" "}
            <span className="text-blue-600">Tomuk</span> delivers high-speed
            internet for streaming, gaming, and work.
          </p>
        </div>
      </div>
      <div className="sec1-small lg:hidden mt-20 flex flex-col items-center justify-center gap-10">
        <h1 className="font-bold text-2xl text-center md:text-3xl ">
          Fast, Reliable <span className="text-blue-600">Wifi</span> <br />
          for Every Need
        </h1>
        <div className="flex justify-center">
          <div className="p-6 rounded-full w-[55vw] h-[55vw] border border-blue-600 flex items-center justify-center">
            <svg
              className="text-blue-600"
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
            </svg>
          </div>
        </div>
        <p className="text-lg text-center font-extralight md:text-xl md:px-20">
          Stay connected without interruptions! Onuk{" "}
          <span className="text-blue-600">Tomuk</span> delivers high-speed
          internet for streaming, gaming, and work.
        </p>
        <button
          onClick={scrollToSection}
          className="w-50 px-4 py-2 bg-blue-600 font-bold text-white border-2 border-transparent rounded-2xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-blue-600"
        >
          VIEW PLANS
        </button>
      </div>
      <div ref={targetRef} className="sec2 mt-30 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          Simple and Transparent Pricing for Everyone
        </h1>
        {/* Mobile Carousel */}
        <div className="block sm:hidden mt-10">
          <Swiper spaceBetween={20} slidesPerView={1}>
            {pricingPlans.slice(0, 3).map((plan, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`card w-[85vw] mx-auto flex flex-col backdrop-blur-md ${
                    plan.isHighlighted
                      ? "bg-gradient-to-r from-blue-600/30 to-black/20 border-blue-600"
                      : "bg-gradient-to-r from-gray-400/30 to-black/20"
                  }`}
                >
                  <div
                    className={`p-5 flex flex-col gap-3 border rounded-t-xl ${plan.isHighlighted ? "border-blue-600" : ""}`}
                  >
                    <h1 className="text-lg">{plan.title}</h1>
                    <h1
                      className={`text-3xl font-bold ${plan.isHighlighted ? "text-blue-600" : ""}`}
                    >
                      {plan.speed}
                      <span className="text-lg">Mbps</span>
                    </h1>
                    <p className="text-xl font-semibold">Features</p>
                    <ul className="flex flex-col gap-3 mt-2 text-base">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`p-5 border-x border-b rounded-b-xl flex flex-col gap-2 ${plan.isHighlighted ? "border-blue-600" : ""}`}
                  >
                    <h1 className="text-2xl font-semibold">
                      {plan.price}Tk <span className="text-sm">Per month</span>
                    </h1>
                    <p className="text-sm">5% VAT included</p>
                    <p className="mt-4 text-sm">Installation charge Free</p>
                    <button className="text-white text-lg bg-blue-600 p-2 w-full rounded-xl hover:bg-white hover:text-blue-600 hover:border-blue-600 transition">
                      Contact Us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grid for Tablet and Larger */}
        <div className="hidden sm:grid gap-12 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.slice(0, 3).map((plan, index) => (
            <div
              key={index}
              className={`card flex flex-col backdrop-blur-md w-full ${
                plan.isHighlighted
                  ? "bg-gradient-to-r from-blue-600/30 to-black/20 border-blue-600"
                  : "bg-gradient-to-r from-gray-400/30 to-black/20"
              }`}
            >
              {/* Same card content again */}
              <div
                className={`p-5 flex flex-col gap-3 border rounded-t-xl ${plan.isHighlighted ? "border-blue-600" : ""}`}
              >
                <h1 className="text-lg">{plan.title}</h1>
                <h1
                  className={`text-3xl font-bold ${plan.isHighlighted ? "text-blue-600" : ""}`}
                >
                  {plan.speed}
                  <span className="text-lg">Mbps</span>
                </h1>
                <p className="text-xl font-semibold">Features</p>
                <ul className="flex flex-col gap-3 mt-2 text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div
                className={`p-5 border-x border-b rounded-b-xl flex flex-col gap-2 ${plan.isHighlighted ? "border-blue-600" : ""}`}
              >
                <h1 className="text-2xl font-semibold">
                  {plan.price}Tk <span className="text-sm">Per month</span>
                </h1>
                <p className="text-sm">5% VAT included</p>
                <p className="mt-4 text-sm">Installation charge Free</p>
                <button className="text-white text-lg bg-blue-600 p-2 w-full rounded-xl hover:bg-white hover:text-blue-600 hover:border-blue-600 transition">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-center items-center mt-10">
          <Link to={"/service_plan"}>
            <button className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 bg-white p-3 rounded-2xl w-64 sm:w-72 md:w-80 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:border-blue-600">
              View More
              <i className="fas fa-right-long"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="sec3 my-20 px-5">
        <div className="flex flex-col gap-10 xl:flex-row rounded-2xl justify-between border p-5 sm:p-10 backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20">
          {/* Form Section */}
          <div className="sec3-1 text-black bg-white px-5 sm:px-7 py-5 flex flex-col gap-4 rounded-2xl xl:w-[48%]">
            <h1 className="font-bold text-2xl sm:text-3xl">Get in Touch</h1>
            <p className="text-sm sm:text-base">You can reach us anytime</p>

            <div className="flex flex-col sm:flex-row gap-3">
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
              className="p-3 border border-gray-400 rounded-xl"
            />
            <input
              type="text"
              placeholder="Email address"
              className="p-3 border border-gray-400 rounded-xl"
            />
            <input
              type="text"
              placeholder="Address"
              className="p-3 border border-gray-400 rounded-xl"
            />
            <textarea
              rows="5"
              placeholder="How can we help?"
              className="p-3 border border-gray-400 rounded-xl"
            ></textarea>
            <button className="bg-blue-600 text-white font-semibold p-3 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border border-blue-600">
              Submit
            </button>
          </div>
          {/* Contact Info Section */}
          <div className="sec3-2 flex flex-col gap-10 justify-between pb-5 xl:w-[48%]">
            <div className="contact-details flex flex-col gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold">Contact Us</h1>
              <p className="font-light text-sm sm:text-base">
                Email, call or complete the form to let us know how we can solve
                your problem.
              </p>
              <p className="underline font-light text-sm sm:text-base">
                Omuk-Tomuk@omuk.com
              </p>
              <p className="underline font-light text-sm sm:text-base">
                234-544-345
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="customer-s flex flex-col gap-3">
                <h1 className="font-bold text-xl sm:text-2xl">
                  Customer Support
                </h1>
                <p className="text-sm sm:text-base font-light max-w-sm">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
              <div className="f-s flex flex-col gap-3">
                <h1 className="font-bold text-xl sm:text-2xl">
                  Feedback and Suggestions
                </h1>
                <p className="text-sm sm:text-base font-light max-w-sm">
                  We value your feedback and are continuously working to improve
                  Snappy. Your input is crucial in shaping its future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-map border rounded-2xl px-10 py-8 flex flex-col lg:flex-row gap-20 backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20">
        <div className="w-full aspect-[1/1] sm:aspect-[4/3] lg:w-[550px] lg:h-[550px]">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15049.146055375091!2d90.49020151546053!3d23.63365779449645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1747561330008!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div>
            <h5 className="text-blue-600">Our Location</h5>
            <h1 className="text-xl lg:text-2xl font-bold">
              Connecting Near and Far
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <h3 className="font-bold">Office</h3>
            <p>
              Omuk inc.<br></br>
              Dhaka, Bnagladesh.<br></br>
              Aosdh, Bdsudo 321<br></br>
              asdasdf.<br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="sec4 my-20 ">
        <h1 className="text-3xl text-center">
          See What our <span className="font-bold">Customers</span> Says
        </h1>
        <div className="Reviews mt-8 ">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".nextButton",
              prevEl: ".prevButton",
            }}
            slidesPerView={1}
            loop={true}
            className="relative"
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-between max-w-5xl mx-auto px-4">
                  {/* Prev Button */}
                  <i className="prevButton fas fa-left-long bg-blue-600 rounded-full p-3 m-3 cursor-pointer text-white"></i>
                  {/* Comment Block */}
                  <div className="comments flex flex-col gap-6 items-center text-center max-w-3xl mx-auto">
                    <div className="person flex items-center justify-center gap-3">
                      <i className="fas fa-user p-3 bg-gray-400 rounded-full text-white"></i>
                      <h1 className="underline text-lg font-semibold">
                        {comment.name}
                      </h1>
                    </div>
                    <div className="ptxt">
                      <p className="text-2xl backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20 p-5 rounded-2xl">{`"${comment.text}"`}</p>
                    </div>
                  </div>
                  {/* Next Button */}
                  <i className="nextButton fas fa-right-long bg-blue-600 rounded-full p-3 m-3  cursor-pointer text-white"></i>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="scroll_totop flex items-center justify-center mt-10">
        <button
          onClick={scrollToTop}
          className="bg-white text-blue-600 p-3 rounded-3xl shadow-lg hover:bg-blue-700 transition"
          aria-label="Scroll to top"
        >
          ↑ Go Back to Top
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
