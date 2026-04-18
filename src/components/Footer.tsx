const BRAND = "#005ecc";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container px-4 py-12 grid gap-10 md:grid-cols-3">

        {/* COMPANY INFO */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Nakajima Automobile
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Trusted Japanese truck supplier delivering reliable vehicles
            for logistics, construction, and transportation industries worldwide.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-black">Home</a>
            </li>
            <li>
              <a href="/#/brands" className="hover:text-black">Trucks</a>
            </li>
            <li>
              <a href="/#/contact" className="hover:text-black">Contact</a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Contact
          </h3>
          <p className="text-sm text-gray-600">
            Email: nakajima4141@gmail.com
          </p>
          <p className="text-sm text-gray-600">
            Phone: +81-270-32-5810
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Japan
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t">
        <div className="container px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Nakajima Automobile Co., Ltd.
          </p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms</span>
          </div>

        </div>

        {/* Accent line */}
        <div
          className="h-[3px] w-full"
          style={{ backgroundColor: BRAND }}
        />
      </div>
    </footer>
  );
};

export default Footer;