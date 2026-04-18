import { vehicles } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";

const ProductList = () => {
  return (
    <section id="vehicles" className="py-20">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {/* Our Fleet */}
          OUR BENEFIT
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Explore our range of commercial buses and trucks built for performance, safety, and reliability.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
