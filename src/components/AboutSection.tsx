import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, Users } from "lucide-react";

const stats = [
  { icon: Truck, label: "Vehicles Delivered", value: "12,000+" },
  { icon: Users, label: "Customers Worldwide", value: "3,500+" },
  { icon: Shield, label: "Years in Business", value: "40+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          About APEX Motors
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          For over four decades, APEX Motors has been a trusted name in commercial vehicle manufacturing.
          From city transit buses to heavy-duty construction trucks, we engineer vehicles that keep industries moving forward.
          Our commitment to quality, innovation, and customer satisfaction sets us apart.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label} className="border-none bg-card shadow-sm">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <s.icon className="h-10 w-10 text-accent" />
                <p className="mt-4 font-heading text-3xl font-bold text-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
