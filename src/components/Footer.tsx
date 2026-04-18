const BRAND = "#005ecc";

const Footer = () => (
  <footer className="border-t bg-white py-10">
    <div className="container text-center">

      <p className="text-sm text-gray-500">
        Trusted Japanese Truck Supplier
      </p>

      <div
        className="mx-auto mt-4 h-[2px] w-20 rounded-full"
        style={{ backgroundColor: BRAND }}
      />

      <p className="mt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Nakajima Automobile Co., Ltd. <br />
        All rights reserved.
      </p>

    </div>
  </footer>
);

export default Footer;