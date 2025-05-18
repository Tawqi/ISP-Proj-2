import Nav from "../Components/Nav";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const comments = [
  {
    name: 'Mr. Kashem Uddin',
    text: 'I’ve tried multiple providers, but Omuk-Tomuk is by far the fastest and most reliable. No buffering during movies or lag in online games. Highly recommend!',
  },
  {
    name: 'Ms. Rina Akter',
    text: 'Omuk-Tomuk’s support team is always available and super helpful. I’m really impressed with their consistency and service.',
  },
  {
    name: 'Mr. Habib Rahman',
    text: 'Switched from another ISP and never looked back. The speed and stability are exactly what I needed for my home office.',
  },
];

function Home() {

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
      <div className="sec1 flex justify-between my-8 ">
        <div className="sec1-1 flex flex-col justify-between items-start">
          <h1 className="text-5xl font-bold">
            Fast, Reliable <span className="text-blue-600">Wifi</span> <br />for Every Need
          </h1>
          <button className="px-6 py-3 rounded-4xl text-2xl bg-blue-600 font-bold text-white border-2 border-transparent transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-blue-600">
              VIEW PLANS
            </button>
        </div>
        <div
          ref={mainWifi}
          className="sec1-2 p-15 rounded-full "
          style={{
            boxShadow: `${(mousePos.x - window.innerWidth / 2) / 20}px ${(mousePos.y - window.innerHeight / 2) / 20}px 46px rgba(37, 99, 235, 0.8)`
          }}
        >
          <svg
            viewBox="0 0 640 512"
            className="w-70 h-70 text-blue-600"
            fill="currentColor"
          >
            <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
          </svg>
        </div>

        <div className="sec1-3 flex flex-right flex-col text-right justify-between">
          <h2 className="text-2xl">Superfast Speeds</h2>
          <p className="max-w-xs text-xl font-extralight">
            Stay connected without interruptions! 
            Onuk-Tomuk delivers high-speed internet for streaming, 
            gaming, and work.
          </p>
        </div>
      </div>
      <div className="sec2 mt-25">
        <h1 className="text-4xl font-semibold text-center">Simple and Transparent Pricing for Everyone</h1>
        <div className="sec2-1 flex justify-between items-center mt-10">

          <div className="card flex flex-col backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20">
            <div className="p-5 flex flex-col gap-3 border rounded-t-xl">
              <h1 className="text-m">Basic plan</h1>
              <h1 className="text-5xl font-bold">30<span className="text-2xl">Mbps</span></h1>
              <p className="text-3xl font-semibold">Features</p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="text-1xl">Unlimited Traffic</li>
                <li className="text-1xl">100Mbps Youtube</li>
                <li className="text-1xl">100Mbps Facebook</li>
                <li className="text-1xl">100Mbps BDIX</li>
              </ul>
            </div>
            <div className="p-5 border-l border-r border-b rounded-b-xl flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">1000Tk <span className="text-sm">Per month</span></h1>
              <p className="text-sm">5% VAT included</p>
              <p className="mt-4">Installation charge Free</p>
              <button className="text-white text-2xl bg-blue-600 p-2 w-80 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-blue-600">Contact Us</button>
            </div>
          </div>
          <div className="card flex flex-col backdrop-blur-md bg-gradient-to-r from-blue-600/30 to-black/20">
            <div className="p-5 flex flex-col gap-3 border border-blue-600 rounded-t-xl">
              <h1 className="text-m">Basic plan</h1>
              <h1 className="text-5xl font-bold text-blue-600">45<span className="text-2xl">Mbps</span></h1>
              <p className="text-3xl font-semibold">Features</p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="text-1xl">Unlimited Traffic</li>
                <li className="text-1xl">100Mbps Youtube</li>
                <li className="text-1xl">100Mbps Facebook</li>
                <li className="text-1xl">100Mbps BDIX</li>
              </ul>
            </div>
            <div className="p-5 border-blue-600 border-x border-b rounded-b-xl flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">1500Tk <span className="text-sm">Per month</span></h1>
              <p className="text-sm">5% VAT included</p>
              <p className="mt-4">Installation charge Free</p>
              <button className="text-white text-2xl bg-blue-600 p-2 w-80 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-blue-600">Contact Us</button>
            </div>
          </div>
          <div className="card flex flex-col backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20">
            <div className="p-5 flex flex-col gap-3 border rounded-t-xl">
              <h1 className="text-m">Basic plan</h1>
              <h1 className="text-5xl font-bold">70<span className="text-2xl">Mbps</span></h1>
              <p className="text-3xl font-semibold">Features</p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="text-1xl">Unlimited Traffic</li>
                <li className="text-1xl">100Mbps Youtube</li>
                <li className="text-1xl">100Mbps Facebook</li>
                <li className="text-1xl">100Mbps BDIX</li>
              </ul>
            </div>
            <div className="p-5 border-l border-r border-b rounded-b-xl flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">2000Tk <span className="text-sm">Per month</span></h1>
              <p className="text-sm">5% VAT included</p>
              <p className="mt-4">Installation charge Free</p>
              <button className="text-white text-2xl bg-blue-600 p-2 w-80 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border-blue-600">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="flex items-center justify-center gap-2 text-2xl font-semibold text-blue-600 bg-white p-3 rounded-2xl w-80 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:border-blue-600">
            View More
            <i className="fas fa-right-long"></i>
          </button>
        </div>
      </div>
      <div className="sec3 my-20 ">
        <div className="flex rounded-2xl justify-between border p-10 backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20">
          <div className="sec3-1 text-black bg-white px-7 py-5 flex flex-col gap-4 w-120 rounded-2xl">
            <h1 className="font-bold text-3xl">Get in Touch</h1>
            <p>You can reach us anytime</p>
            <div className="flex gap-3">
              <input type="text" placeholder="First name" className="p-3 w-full border border-gray-400 rounded-xl"></input>
              <input type="text" placeholder="Last name"  className="p-3 w-full border border-gray-400 rounded-xl"></input>
            </div>
              <input type="text" placeholder="Phone number" className="p-3 border border-gray-400 rounded-xl"></input>
              <input type="text" placeholder="Email address" className="p-3 border border-gray-400 rounded-xl"></input>
              <input type="text" placeholder="Address" className="p-3 border border-gray-400 rounded-xl"></input>
              <textarea rows="5" placeholder="How can we help?" className="p-3 border border-gray-400 rounded-xl"></textarea>
              <button className="bg-blue-600 text-white font-semibold p-3 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover: border border-blue-600">Submit</button>
          </div>
          <div className="sec3-2 flex flex-col justify-between pb-5">
            <div className="contact-details flex flex-col gap-5">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="font-thin">Email, call or complete the form to let us know how we can solve your problem.</p>
              <p className="underline font-thin">Omuk-Tomuk@omuk.com</p>
              <p className="underline font-thin">234-544-345</p>
            </div>
            <div className="flex justify-between gap-5">
              <div className="customer-s flex flex-col gap-5">
                <h1 className="font-bold text-2xl">Customer Support</h1>
                <p className="w-70 text-sm font-light">Our support team is available around the clock to address any concerns or queries you may have.</p>
              </div>
              <div className="f-s flex flex-col gap-5">
                <h1 className="font-bold text-2xl">Feedback and Suggestions</h1>
                <p className="w-70 text-sm font-light">We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-map border rounded-2xl px-10 py-8 flex gap-20 backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20">
        <div className="">
          <iframe className="rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15049.146055375091!2d90.49020151546053!3d23.63365779449645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1747561330008!5m2!1sen!2sbd"
            width="550"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center gap-20">
        <div>
          <h5 className="text-blue-600">Our Location</h5>
          <h1 className="text-3xl font-bold">Connecting Near and Far</h1>
        </div>
        <div className="flex flex-col gap-10">
          <h3 className="font-bold">Office</h3>
          <p>Omuk  inc.<br></br>
             Dhaka, Bnagladesh.<br></br>
             Aosdh, Bdsudo 321<br></br>
             asdasdf.<br></br>
          </p>
        </div>
        </div>

      </div>
      <div className="sec4 my-20 ">
        <h1 className="text-3xl text-center">See What our <span className="font-bold">Customers</span> Says</h1>

 <div className="mt-8 ">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.nextButton',
          prevEl: '.prevButton',
        }}
        slidesPerView={1}
        loop={true}
        className="relative"
      >
        {comments.map((comment, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-between max-w-5xl mx-auto px-4">
              {/* Prev Button */}
              <i className="prevButton fas fa-left-long bg-gray-500 rounded-full p-3 cursor-pointer text-white"></i>
              {/* Comment Block */}
              <div className="comments flex flex-col gap-6 items-center text-center max-w-3xl mx-auto">
                <div className="person flex items-center justify-center gap-3">
                  <i className="fas fa-user p-3 bg-gray-400 rounded-full text-white"></i>
                  <h1 className="underline text-lg font-semibold">{comment.name}</h1>
                </div>
                <div className="ptxt">
                  <p className="text-2xl backdrop-blur-md bg-gradient-to-r from-gray-400/30 to-black/20 p-5 rounded-2xl">{`"${comment.text}"`}</p>
                </div>
              </div>
              {/* Next Button */}
              <i className="nextButton fas fa-right-long bg-gray-500 rounded-full p-3 cursor-pointer text-white"></i>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
      <div className="sec5 bg-blue-600 flex flex-col gap-5 p-7 m-10 rounded-2xl">
        <div className="flex gap-40">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Omuk Tomuk</h1>
          <p className="font-thin">BY Omuk-Tomuk LTD.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-5 ">
          <ul className="contents">
            <li className="text-xl underline"><a href="#">Home</a></li>
            <li className="text-xl underline"><a href="#">Internet Plans</a></li>
            <li className="text-xl underline"><a href="#">Contact Us</a></li>
            <li className="text-xl underline"><a href="#">Our Location</a></li>
            <li className="text-xl underline"><a href="#">About US</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Connect with us</h1>
            <ul className="flex gap-5">
              <li><a href="#"><i className="fab fa-youtube text-3xl border rounded-full p-3"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook text-3xl border rounded-full p-3"></i></a></li>
              <li><a href="#"><i className="fab fa-whatsapp text-3xl border rounded-full p-3"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram text-3xl border rounded-full p-3"></i></a></li>
            </ul>
          </div>
          </div>
          <div className="footer flex justify-between border-b-1">
            <p className="font-thin">© 2025 Omuk-Tomuk. All rights reserved.</p>
            <p className="font-thin">Terms & Conditions Privacy Policy Refund & Delivery Policy Company Doc </p>
          </div>
      </div>

    </>
  );
}

export default Home;
