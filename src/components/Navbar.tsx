// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "../image/logo.png";

// const BRAND = "#005ecc";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => setOpen(false);

//   return (
//     <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
//       <div className="container flex h-16 items-center justify-between">

//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight"
//         >
//           <img src={logo} alt="Logo" className="h-14 w-auto" />

//           <span>
//             Nakajima Automobile{" "}
//             <span style={{ color: BRAND }}>
//               Co., Ltd.
//             </span>
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden gap-8 md:flex">

//           <Link
//             to="/"
//             onClick={() => window.scrollTo(0, 0)}
//             className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
//           >
//             Home
//           </Link>

//           <a
//             href="#services"
//             className="text-sm font-medium text-gray-600 hover:text-[#005ecc] transition-colors"
//           >
//             Services
//           </a>
//           <a
//             href="/contact"
//             className="text-sm font-medium text-gray-600 hover:text-[#005ecc] transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile Button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </Button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="border-t bg-white px-4 pb-4 pt-2 md:hidden">

//           <Link
//             to="/"
//             onClick={closeMenu}
//             className="block py-2 text-sm font-medium"
//           >
//             Home
//           </Link>

//           <a href="#services" onClick={closeMenu}
//             className="block py-2 text-sm font-medium hover:text-[#005ecc]"
//           >
//             Services
//           </a>

//           <a
//             href="#footer"
//             onClick={closeMenu}
//             className="block py-2 text-sm font-medium hover:text-[#005ecc]"
//           >
//             Contact
//           </a>

//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../image/logo.png";

const BRAND = "#005ecc";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  // ✅ Scroll to services safely from ANY page
  const handleServicesClick = () => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    } else {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // ✅ Home always top
  const handleHomeClick = () => {
    closeMenu();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">

        {/* LOGO */}
        <div
          onClick={handleHomeClick}
          className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight cursor-pointer"
        >
          <img src={logo} alt="Logo" className="h-14 w-auto" />

          <span>
            Nakajima Automobile{" "}
            <span style={{ color: BRAND }}>Co., Ltd.</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden gap-8 md:flex">

          <button
            onClick={handleHomeClick}
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Home
          </button>

          <button
            onClick={handleServicesClick}
            className="text-sm font-medium text-gray-600 hover:text-[#005ecc] transition-colors"
          >
            Services
          </button>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-sm font-medium text-gray-600 hover:text-[#005ecc] transition-colors"
          >
            Contact
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t bg-white px-4 pb-4 pt-2 md:hidden">

          <button
            onClick={handleHomeClick}
            className="block py-2 text-sm font-medium"
          >
            Home
          </button>

          <button
            onClick={handleServicesClick}
            className="block py-2 text-sm font-medium hover:text-[#005ecc]"
          >
            Services
          </button>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block py-2 text-sm font-medium hover:text-[#005ecc]"
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;