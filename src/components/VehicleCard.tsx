import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Vehicle } from "@/data/vehicles";

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Link to={`/vehicle/${vehicle.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground capitalize">
            {vehicle.type}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-heading text-lg font-semibold text-foreground">{vehicle.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{vehicle.description}</p>
          <p className="mt-3 font-heading text-xl font-bold text-accent">
            ${vehicle.price.toLocaleString()}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VehicleCard;
