import Nav from "../Components/Nav";
import { useEffect, useState, useRef } from "react";

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
          <button className="px-6 py-3 rounded-4xl text-2xl bg-blue-600 font-bold pulse button">VIEW PLANS</button>
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
        <div className="sec2-2">
          
        </div>
      </div>
    </>
  );
}

export default Home;
