import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, DollarSign, Calendar } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Accra Residential Unit A",
    location: "Accra, Ghana",
    type: "Rental",
    status: "Active",
    monthlyRevenue: 1600,
    tenant: "John Mensah",
    leaseEnd: "2025-12-31",
  },
  {
    id: 2,
    name: "Kumasi Commercial Space",
    location: "Kumasi, Ghana",
    type: "Rental",
    status: "Active",
    monthlyRevenue: 1800,
    tenant: "Tech Solutions Ltd",
    leaseEnd: "2026-03-15",
  },
  {
    id: 3,
    name: "Tema Residential Complex",
    location: "Tema, Ghana",
    type: "Rental",
    status: "Active",
    monthlyRevenue: 1400,
    tenant: "Sarah Osei",
    leaseEnd: "2025-11-30",
  },
  {
    id: 4,
    name: "London Apartment 1",
    location: "London, UK",
    type: "Airbnb",
    status: "Pending Setup",
    monthlyRevenue: 0,
    tenant: "-",
    leaseEnd: "-",
  },
  {
    id: 5,
    name: "Manchester Studio",
    location: "Manchester, UK",
    type: "Airbnb",
    status: "Pending Setup",
    monthlyRevenue: 0,
    tenant: "-",
    leaseEnd: "-",
  },
];

export default function Properties() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-muted-foreground">
            Manage your rental properties and Airbnb listings
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Monthly Revenue</p>
          <p className="text-3xl font-bold text-success">£4,800</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{property.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      {property.location}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <Badge
                  variant={property.status === "Active" ? "default" : "secondary"}
                >
                  {property.status}
                </Badge>
                <Badge variant="outline">{property.type}</Badge>
              </div>

              <div className="pt-3 border-t border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    Monthly Revenue
                  </span>
                  <span className="font-semibold text-success">
                    £{property.monthlyRevenue.toLocaleString()}
                  </span>
                </div>

                {property.status === "Active" && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Tenant</span>
                      <span className="text-sm font-medium">{property.tenant}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Lease End
                      </span>
                      <span className="text-sm font-medium">{property.leaseEnd}</span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Property Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-gradient-primary rounded-lg text-primary-foreground">
              <p className="text-sm opacity-90">Ghana Properties</p>
              <p className="text-2xl font-bold">£4,800/mo</p>
              <p className="text-xs opacity-80 mt-1">3 Active Rentals</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">UK Properties</p>
              <p className="text-2xl font-bold">£0/mo</p>
              <p className="text-xs text-muted-foreground mt-1">2 Pending Setup</p>
            </div>
            <div className="p-4 bg-gradient-accent rounded-lg text-accent-foreground">
              <p className="text-sm opacity-90">Occupancy Rate</p>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs opacity-80 mt-1">All active units occupied</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
