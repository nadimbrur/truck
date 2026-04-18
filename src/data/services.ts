import service1 from "@/assets/buying_car.jpg"
import service2 from "@/assets/used_car.jpg";
import service3 from "@/assets/UD_truck_sell.png"


export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export const services: Service[] = [
  {
    id: "truck-sales",
    title: "01",
    subtitle: "Truck Sales",
    description:
      "We provide high-quality Japanese trucks for logistics, construction, and industrial use, including light, medium, and heavy-duty models from trusted brands like UD Trucks, Isuzu, Hino, and Mitsubishi Fuso.Every vehicle is carefully inspected to ensure reliability, durability, and performance.Whether you are expanding your fleet or starting a new business, we help you choose the right truck for your operational needs-from city delivery to long - haul transport-keeping your supply chain efficient and cost - effective.",
    image: service3,
    link: "/brands",
  },
  {
    id: "used-car-sales",
    title: "02",
    subtitle: "Used Car Sales",
    description:
      "We provide high-quality, reliable used cars tailored to your needs. Our team carefully listens to your purpose and preferences to recommend the perfect vehicle with confidence and peace of mind.",
    image: service2,
    link: "/used-cars",
  },
  {
    id: "vehicle-purchase",
    title: "03",
    subtitle: "Vehicle Purchase",
    description:
      "Our vehicle buying service accepts vehicles in any condition, from initial consultation to final arrangements. We strive to offer the highest possible price. Feel free to contact us with requests such as getting a better price than other companies or finding a specific vehicle.",
    image: service1,
    link: "/purchase",
  },

];