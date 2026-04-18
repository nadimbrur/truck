import bus1 from "@/assets/bus-1.jpg";
import bus2 from "@/assets/bus-2.jpg";
import bus3 from "@/assets/bus-3.jpg";
import truck1 from "@/assets/truck-1.jpg";
import truck2 from "@/assets/truck-2.jpg";
import truck3 from "@/assets/truck-3.jpg";

export interface Vehicle {
  id: string;
  name: string;
  type: "bus" | "truck";
  price: number;
  description: string;
  image: string;
  images: string[];
  model: string;
  engine: string;
  features: string[];
  specifications: Record<string, string>;
}

export const vehicles: Vehicle[] = [
  {
    id: "city-liner-x200",
    name: "CityLiner X200",
    type: "bus",
    price: 185000,
    description: "A modern city transit bus designed for urban routes. Features low-floor entry, spacious interior, and fuel-efficient engine for daily commuter operations.",
    image: bus1,
    images: [bus1, bus2, bus3],
    model: "CityLiner X200 – 2025",
    engine: "6.7L Turbo Diesel, 280 HP, Euro VI compliant",
    features: ["Low-floor entry", "Air suspension", "LED destination display", "Wheelchair ramp", "CCTV system", "Automated stop announcements"],
    specifications: {
      "Seating Capacity": "45 + 20 standing",
      "Length": "12.0 m",
      "Width": "2.55 m",
      "Height": "3.2 m",
      "Fuel Tank": "300 L",
      "Transmission": "6-speed automatic",
      "Max Speed": "100 km/h",
      "GVW": "18,000 kg",
    },
  },
  {
    id: "grand-cruiser-lx",
    name: "Grand Cruiser LX",
    type: "bus",
    price: 320000,
    description: "A premium luxury touring coach for long-distance travel. Reclining seats, onboard entertainment, and a smooth ride for inter-city routes.",
    image: bus2,
    images: [bus2, bus1, bus3],
    model: "Grand Cruiser LX – 2025",
    engine: "12.8L Inline-6 Diesel, 460 HP",
    features: ["Reclining sleeper seats", "Onboard Wi-Fi", "Climate zones", "Luggage compartment", "USB charging ports", "Restroom"],
    specifications: {
      "Seating Capacity": "52",
      "Length": "13.5 m",
      "Width": "2.6 m",
      "Height": "3.8 m",
      "Fuel Tank": "500 L",
      "Transmission": "12-speed automated manual",
      "Max Speed": "120 km/h",
      "GVW": "24,000 kg",
    },
  },
  {
    id: "scholar-s100",
    name: "Scholar S100",
    type: "bus",
    price: 95000,
    description: "Reliable school bus built with student safety as the top priority. Meets all federal safety standards with reinforced body construction.",
    image: bus3,
    images: [bus3, bus1, bus2],
    model: "Scholar S100 – 2025",
    engine: "6.7L Cummins Diesel, 220 HP",
    features: ["Stop arm with lights", "GPS tracking", "Emergency exits", "Padded seats", "First aid kit", "Two-way radio"],
    specifications: {
      "Seating Capacity": "72 students",
      "Length": "10.7 m",
      "Width": "2.44 m",
      "Height": "3.05 m",
      "Fuel Tank": "190 L",
      "Transmission": "5-speed automatic",
      "Max Speed": "90 km/h",
      "GVW": "14,500 kg",
    },
  },
  {
    id: "titan-hd-900",
    name: "Titan HD 900",
    type: "truck",
    price: 145000,
    description: "Heavy-duty cargo truck built for long-haul freight operations. Robust chassis and powerful engine ensure reliable delivery across any terrain.",
    image: truck1,
    images: [truck1, truck2, truck3],
    model: "Titan HD 900 – 2025",
    engine: "12.9L Inline-6 Turbo Diesel, 500 HP",
    features: ["Sleeper cab", "Air brakes", "Cruise control", "Hill start assist", "Telematics system", "LED headlights"],
    specifications: {
      "Payload Capacity": "25,000 kg",
      "Length": "8.5 m (cab + chassis)",
      "Width": "2.5 m",
      "Height": "3.9 m",
      "Fuel Tank": "600 L",
      "Transmission": "12-speed AMT",
      "Max Speed": "110 km/h",
      "GVW": "40,000 kg",
    },
  },
  {
    id: "swift-box-400",
    name: "Swift Box 400",
    type: "truck",
    price: 68000,
    description: "Medium-duty box truck ideal for urban delivery and logistics. Compact turning radius makes it perfect for city distribution.",
    image: truck2,
    images: [truck2, truck1, truck3],
    model: "Swift Box 400 – 2025",
    engine: "5.1L Turbo Diesel, 190 HP",
    features: ["Roll-up rear door", "Load-securing rails", "Backup camera", "Power steering", "Air conditioning", "Bluetooth audio"],
    specifications: {
      "Payload Capacity": "5,500 kg",
      "Length": "7.2 m",
      "Width": "2.3 m",
      "Height": "3.4 m",
      "Fuel Tank": "150 L",
      "Transmission": "6-speed manual",
      "Max Speed": "105 km/h",
      "GVW": "10,000 kg",
    },
  },
  {
    id: "force-dump-700",
    name: "Force Dump 700",
    type: "truck",
    price: 210000,
    description: "Heavy-duty dump truck engineered for construction and mining operations. Hydraulic tipper body handles the toughest loads with ease.",
    image: truck3,
    images: [truck3, truck1, truck2],
    model: "Force Dump 700 – 2025",
    engine: "15.0L V8 Turbo Diesel, 600 HP",
    features: ["Hydraulic tipper", "Rock body", "Exhaust brake", "Differential lock", "Heavy-duty suspension", "ROPS cabin"],
    specifications: {
      "Payload Capacity": "35,000 kg",
      "Length": "9.0 m",
      "Width": "2.8 m",
      "Height": "3.6 m",
      "Fuel Tank": "400 L",
      "Transmission": "10-speed manual",
      "Max Speed": "80 km/h",
      "GVW": "56,000 kg",
    },
  },
];
