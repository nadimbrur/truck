// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "../image/logo.png";

// const BRAND = "#005ecc";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const closeMenu = () => setOpen(false);

//   // ✅ Scroll to services safely from ANY page
//   const handleServicesClick = () => {
//     closeMenu();

//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById("services")?.scrollIntoView({
//           behavior: "smooth",
//         });
//       }, 150);
//     } else {
//       document.getElementById("services")?.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   // ✅ Home always top
//   const handleHomeClick = () => {
//     closeMenu();
//     navigate("/");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
//       <div className="container flex h-16 items-center justify-between">

//         {/* LOGO */}
//         <div
//           onClick={handleHomeClick}
//           className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight cursor-pointer"
//         >
//           <img src={logo} alt="Logo" className="h-14 w-auto" />

//           <span>
//             Nakajima Automobile{" "}
//             <span style={{ color: BRAND }}>Co., Ltd.</span>
//           </span>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden gap-8 md:flex">

//           <button
//             onClick={handleHomeClick}
//             className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
//           >
//             Home
//           </button>

//           <button
//             onClick={handleServicesClick}
//             className="text-sm font-medium text-gray-600 hover:text-[#005ecc] transition-colors"
//           >
//             Services
//           </button>

//           <Link
//             to="/contact"
//             onClick={closeMenu}
//             className="text-sm font-medium text-gray-600 hover:text-[#005ecc] transition-colors"
//           >
//             Contact
//           </Link>

//         </div>

//         {/* MOBILE BUTTON */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </Button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="border-t bg-white px-4 pb-4 pt-2 md:hidden">

//           <button
//             onClick={handleHomeClick}
//             className="block py-2 text-sm font-medium"
//           >
//             Home
//           </button>

//           <button
//             onClick={handleServicesClick}
//             className="block py-2 text-sm font-medium hover:text-[#005ecc]"
//           >
//             Services
//           </button>

//           <Link
//             to="/contact"
//             onClick={closeMenu}
//             className="block py-2 text-sm font-medium hover:text-[#005ecc]"
//           >
//             Contact
//           </Link>

//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../image/logo.png";

const BRAND = "#005ecc";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  // Active link checker
  const isActive = (path: string) => location.pathname === path;

  // Scroll to services
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

  // Home click
  const handleHomeClick = () => {
    closeMenu();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">

        {/* LOGO */}
        <div
          onClick={handleHomeClick}
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />

          <div className="leading-tight">
            <p className="text-sm md:text-base font-semibold">
              Nakajima Automobile
            </p>
            <p
              className="text-xs md:text-sm font-medium"
              style={{ color: BRAND }}
            >
              Co., Ltd.
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <button
            onClick={handleHomeClick}
            className={`transition ${isActive("/")
              ? "text-black font-semibold"
              : "text-gray-600 hover:text-black"
              }`}
          >
            Home
          </button>

          <button
            onClick={handleServicesClick}
            className="text-gray-600 hover:text-[#005ecc] transition"
          >
            Services
          </button>

          <Link
            to="/brands"
            className={`transition ${isActive("/brands")
              ? "text-[#005ecc] font-semibold"
              : "text-gray-600 hover:text-[#005ecc]"
              }`}
          >
            Trucks
          </Link>

          <Link
            to="/contact"
            className={`transition ${isActive("/contact")
              ? "text-[#005ecc] font-semibold"
              : "text-gray-600 hover:text-[#005ecc]"
              }`}
          >
            Contact
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-sm">

          <button
            onClick={handleHomeClick}
            className={`block w-full text-left text-sm ${isActive("/") ? "font-semibold" : ""
              }`}
          >
            Home
          </button>

          <button
            onClick={handleServicesClick}
            className="block w-full text-left text-sm"
          >
            Services
          </button>

          <Link
            to="/brands"
            onClick={closeMenu}
            className={`block text-sm ${isActive("/brands") ? "font-semibold text-[#005ecc]" : ""
              }`}
          >
            Trucks
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block text-sm ${isActive("/contact") ? "font-semibold text-[#005ecc]" : ""
              }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;