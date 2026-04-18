import { useParams, Link } from "react-router-dom";
import { vehicles } from "@/data/vehicles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find((v) => v.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!vehicle) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container flex flex-col items-center justify-center py-32">
          <h1 className="font-heading text-2xl font-bold">Vehicle not found</h1>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Vehicles</Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image gallery */}
          <div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={vehicle.images[selectedImage]}
                alt={vehicle.name}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-3 flex gap-3">
              {vehicle.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === i ? "border-accent" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${vehicle.name} view ${i + 1}`}
                    loading="lazy"
                    width={120}
                    height={90}
                    className="h-20 w-28 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <Badge className="bg-accent text-accent-foreground capitalize">{vehicle.type}</Badge>
            <h1 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {vehicle.name}
            </h1>
            <p className="mt-2 text-muted-foreground">{vehicle.description}</p>
            <p className="mt-4 font-heading text-3xl font-bold text-accent">
              ${vehicle.price.toLocaleString()}
            </p>

            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-heading">Model & Engine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model</span>
                  <span className="font-medium text-foreground">{vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Engine</span>
                  <span className="font-medium text-foreground text-right max-w-[60%]">{vehicle.engine}</span>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="features" className="mt-6">
              <TabsList className="w-full">
                <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                <TabsTrigger value="specs" className="flex-1">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-4">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specs" className="mt-4">
                <div className="space-y-2">
                  {Object.entries(vehicle.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b pb-2 text-sm last:border-0">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-medium text-foreground">{val}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
