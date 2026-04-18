import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

const ServiceList = () => {
  return (
    // <section className="py-20 bg-white">
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We provide trusted solutions for vehicle trading, used cars, and
            commercial truck sales to keep businesses and logistics moving.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceList;