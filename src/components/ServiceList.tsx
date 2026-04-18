import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

const ServiceList = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            What We Offer
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Reliable Vehicle Solutions for Your Business
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            From high-quality Japanese truck exports to used vehicle trading,
            we provide dependable solutions that support logistics, mobility,
            and business growth worldwide.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceList;