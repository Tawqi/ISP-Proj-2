function Footer() {
  return (
    <>
      <footer className="footer bg-blue-600 flex flex-col gap-5 p-7 mt-10 rounded-t-2xl text-white">
        {/* Top section: stacks vertically on small screens, horizontal on md+ */}
        <div className="flex flex-col lg:flex-row md:justify-between md:items-start gap-10 lg:gap-10 md:g">
          {/* Logo and title */}
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Omuk Tomuk</h1>
            <p className="font-thin">BY Omuk-Tomuk LTD.</p>
          </div>

          {/* Navigation links */}
          <div className=" gap-x-4 gap-y-5">
            <ul className="contents">
              <li className="text-xl underline"><a href="#">Home</a></li>
              <li className="text-xl underline"><a href="#">Internet Plans</a></li>
              <li className="text-xl underline"><a href="#">Contact Us</a></li>
              <li className="text-xl underline"><a href="#">Our Location</a></li>
              <li className="text-xl underline"><a href="#">About US</a></li>
            </ul>
          </div>

          {/* Social media */}
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

        {/* Bottom section: stack on small screens, horizontal on md+ */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-t border-white/30 pt-4 text-sm font-thin">
          <p>© 2025 Omuk-Tomuk. All rights reserved.</p>
          <p>Terms & Conditions &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Refund & Delivery Policy &nbsp;|&nbsp; Company Doc</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
