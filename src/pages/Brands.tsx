import { useEffect } from "react";

import udLogo from "@/assets/brands/ud-logo.png";
import isuzuLogo from "@/assets/brands/isuzu-logo.png";
import hinoLogo from "@/assets/brands/hino-logo.png";
import fusoLogo from "@/assets/brands/fuso-logo.png";

import udTruck from "@/assets/brands/ud-truck.png";
import isuzuTruck from "@/assets/brands/isuzu-truck.png";
import hinoTruck from "@/assets/brands/hino-truck.png";
import fusoTruck from "@/assets/brands/fuso-truck.png";

const BRAND = "#005ecc";

const brands = [
    {
        name: "UD Trucks",
        logo: udLogo,
        image: udTruck,
        desc: (
            <>
                UD Trucks specializes in heavy-duty commercial vehicles designed for long-haul logistics,
                construction, and industrial operations. Known for advanced diesel technology,
                durability, and fuel efficiency, UD trucks are widely used across global supply chains.

                <br /><br />

                <span className="font-semibold" style={{ color: BRAND }}>
                    We supply more than 5,000+ UD Trucks annually
                </span>{" "}
                to international markets, supporting large-scale logistics companies and
                infrastructure projects with reliable, high-performance vehicles.
            </>
        ),
    },
    {
        name: "Isuzu",
        logo: isuzuLogo,
        image: isuzuTruck,
        desc: (
            <>
                Isuzu is a global leader in diesel engine technology and light-to-medium duty trucks.
                These vehicles are highly efficient, reliable, and ideal for urban delivery,
                logistics, and commercial transportation.

                <br /><br />

                Isuzu trucks are trusted for their low maintenance cost, fuel efficiency,
                and long operational life, making them a preferred choice for businesses
                operating in city and regional logistics.
            </>
        ),
    },
    {
        name: "Hino",
        logo: hinoLogo,
        image: hinoTruck,
        desc: (
            <>
                Hino trucks are known for their strong performance in medium and heavy-duty transport.
                Built with durability and driver comfort in mind, they are widely used for freight,
                construction, and long-distance logistics operations.

                <br /><br />

                Their reliability and engineering excellence make Hino a trusted brand
                for businesses requiring consistent performance in demanding environments.
            </>
        ),
    },
    {
        name: "Mitsubishi Fuso",
        logo: fusoLogo,
        image: fusoTruck,
        desc: (
            <>
                Mitsubishi Fuso offers durable and fuel-efficient trucks used worldwide
                for delivery, construction, and heavy transport. Their vehicles are designed
                to perform efficiently in both urban and long-haul applications.

                <br /><br />

                Fuso trucks are recognized for innovation, safety, and cost-effectiveness,
                helping businesses maintain smooth and scalable logistics operations.
            </>
        ),
    },
];

const Brands = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="min-h-screen py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Trusted Japanese Truck Brands
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We provide high-quality Japanese trucks from globally recognized manufacturers,
                        supporting logistics, construction, and industrial operations across international markets.
                    </p>
                </div>

                {/* BRAND LIST */}
                <div className="space-y-20">

                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >

                            {/* IMAGE */}
                            <div className="w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CONTENT */}
                            <div>

                                {/* LOGO */}
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-12 mb-4 object-contain"
                                />

                                {/* NAME */}
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {brand.name}
                                </h2>

                                {/* DESCRIPTION */}
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {brand.desc}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

                {/* BUSINESS INFO */}
                <div className="mt-24 text-center max-w-3xl mx-auto">

                    <h2 className="text-2xl font-semibold text-gray-900">
                        Our Global Export Experience
                    </h2>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        We have been supplying Japanese trucks to customers worldwide,
                        supporting businesses from small enterprises to large logistics
                        and industrial operations. Our mission is to deliver reliable,
                        high-performance vehicles that meet the evolving demands of modern transportation.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        To date, we have successfully sold and exported over{" "}
                        <span style={{ color: BRAND }} className="font-semibold">
                            3,000+ trucks
                        </span>
                        , helping businesses build efficient, scalable, and cost-effective supply chains.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default Brands;