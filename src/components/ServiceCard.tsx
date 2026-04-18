// import { Card, CardContent } from "@/components/ui/card";
// import type { Service } from "@/data/services";
// import { Link } from "react-router-dom";

// const BRAND = "#005ecc";

// const ServiceCard = ({ service }: { service: Service }) => {
//   return (
//     <Card className="group rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

//       {/* IMAGE */}
//       <div className="relative aspect-[4/3] overflow-hidden">
//         <img
//           src={service.image}
//           alt={service.subtitle}
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//       </div>

//       {/* CONTENT */}
//       <CardContent className="p-6">

//         <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
//           Service {service.title}
//         </p>

//         <h3 className="mt-2 text-xl font-semibold text-gray-900">
//           {service.subtitle}
//         </h3>

//         <p className="mt-3 text-sm leading-relaxed text-gray-600">
//           {service.description}
//         </p>

//         {/* CTA (NOW WILL SHOW) */}
//         <Link
//           to={service.link}
//           className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
//         >
//           Go to Business Information →
//         </Link>

//       </CardContent>
//     </Card>
//   );
// };

// export default ServiceCard;


import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/data/services";
import { Link } from "react-router-dom";

const BRAND = "#005ecc";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.subtitle}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <CardContent className="p-6 flex flex-col gap-3">

        {/* Small label */}
        <p
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: BRAND }}
        >
          Service {service.title}
        </p>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {service.subtitle}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {service.description}
        </p>

        {/* CTA */}
        <Link
          to={service.link || "/"}   // ✅ fallback to prevent crash
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
          style={{ color: BRAND }}
        >
          Learn More
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>

      </CardContent>
    </Card>
  );
};

export default ServiceCard;