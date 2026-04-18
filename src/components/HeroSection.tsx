// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";

// import { Link } from "react-router-dom";


// import hero1 from "@/assets/brands/hino-1.png";
// import hero2 from "@/assets/brands/ud.png";
// import hero3 from "@/assets/brands/ud2.png";

// // const BRAND = "#ff6b00"; // Truck/industrial color (orange)
// const BRAND = "#005ecc";

// const images = [hero1, hero2, hero3];

// const HeroSection = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex min-h-[85vh] items-center overflow-hidden">

//       {/* Background Slides */}
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img}
//           alt="Truck background"
//           className={`absolute inset-0 h-full w-full object-cover scale-105 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
//             }`}
//         />
//       ))}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

//       {/* Content */}
//       <div className="container relative z-10 py-28">
//         <div className="max-w-2xl space-y-6">

//           <p className="text-sm tracking-widest uppercase text-white/70">
//             Trusted Japanese Truck Supplier
//           </p>

//           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
//             Behind Every Delivery, There’s a{" "}
//             <span style={{ color: BRAND }}>Truck</span>
//           </h1>

//           <p className="text-base md:text-lg text-white/80 leading-relaxed">
//             Reliable Japanese trucks engineered to power logistics,
//             transport goods, and keep businesses moving — from farms
//             and factories to cities and global markets.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 pt-4">

//             <Button
//               asChild
//               style={{ backgroundColor: BRAND }}
//               className="text-white hover:opacity-90 font-semibold px-8 py-6 text-base"
//             >
//               {/* <a href="/brands">Browse Trucks</a> */}
//               <Link to="/brands">Browse Trucks</Link>
//             </Button>

//             {/* <Button
//               asChild
//               className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
//             >
//               <a href="#contact">Contact Us</a>
//             </Button> */}

//             <Button
//               asChild
//               className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
//             >
//               <Link to="/contact">Contact Us</Link>
//             </Button>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import hero1 from "@/assets/brands/hino-1.png";
import hero2 from "@/assets/brands/ud.png";
import hero3 from "@/assets/brands/ud2.png";

const BRAND = "#005ecc";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Slides */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Truck"
          className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Overlay (better depth) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-2xl space-y-6">

          {/* Tagline */}
          <p className="text-xs md:text-sm uppercase tracking-widest text-white/70">
            Trusted Japanese Truck Supplier
          </p>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Powering Logistics with{" "}
            <span style={{ color: BRAND }}>Reliable Trucks</span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-lg text-white/80 leading-relaxed">
            High-quality Japanese trucks built for durability, efficiency,
            and performance — helping businesses move goods across cities,
            industries, and borders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            {/* Primary CTA */}
            <Button
              asChild
              style={{ backgroundColor: BRAND }}
              className="text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:scale-105 transition"
            >
              <Link to="/brands">Browse Trucks</Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              // variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base rounded-lg"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats / trust indicators */}
          <div className="flex gap-6 pt-6 text-white/80 text-sm md:text-base">
            <div>
              <p className="font-bold text-white">10+</p>
              <p>Years Experience</p>
            </div>
            <div>
              <p className="font-bold text-white">500+</p>
              <p>Vehicles Exported</p>
            </div>
            <div>
              <p className="font-bold text-white">Global</p>
              <p>Reach</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;