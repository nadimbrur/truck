import ud from "@/assets/brands/ud-logo.png";
import isuzu from "@/assets/brands/ud.png";
import hino from "@/assets/brands/ud.png";
import fuso from "@/assets/brands/ud.png";

const brands = [
    { name: "UD Trucks", logo: ud },
    { name: "Isuzu", logo: isuzu },
    { name: "Hino", logo: hino },
    { name: "Mitsubishi Fuso", logo: fuso },
];


const TruckBrands = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Trusted Japanese Truck Brands
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We supply reliable trucks from Japan’s leading manufacturers,
                    trusted worldwide for durability, efficiency, and performance.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-16 object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TruckBrands;