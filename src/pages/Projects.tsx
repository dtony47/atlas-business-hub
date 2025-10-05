import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Briefcase, MapPin, DollarSign, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Ghana Tech Consulting",
    client: "TechCorp Ghana",
    location: "Ghana",
    type: "Consultancy",
    status: "Active",
    progress: 65,
    revenue: 2100,
    startDate: "2024-08-01",
    endDate: "2025-12-31",
    description: "Digital transformation consulting for enterprise client",
  },
  {
    id: 2,
    name: "Ghana Finance Advisory",
    client: "Finance Group Ltd",
    location: "Ghana",
    type: "Consultancy",
    status: "Active",
    progress: 40,
    revenue: 1500,
    startDate: "2024-09-15",
    endDate: "2025-09-15",
    description: "Financial planning and advisory services",
  },
  {
    id: 3,
    name: "UK Business Strategy",
    client: "Innovate UK Ltd",
    location: "UK",
    type: "Consultancy",
    status: "Active",
    progress: 80,
    revenue: 1800,
    startDate: "2024-07-01",
    endDate: "2025-06-30",
    description: "Strategic business planning and market analysis",
  },
  {
    id: 4,
    name: "London Airbnb Setup",
    client: "Self",
    location: "UK",
    type: "Property Development",
    status: "Planning",
    progress: 25,
    revenue: 0,
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    description: "Property renovation and Airbnb setup in London",
  },
  {
    id: 5,
    name: "Manchester Airbnb Setup",
    client: "Self",
    location: "UK",
    type: "Property Development",
    status: "Planning",
    progress: 15,
    revenue: 0,
    startDate: "2025-11-01",
    endDate: "2026-01-31",
    description: "Studio apartment setup for short-term rental",
  },
];

export default function Projects() {
  const totalActiveRevenue = projects
    .filter((p) => p.status === "Active")
    .reduce((sum, p) => sum + p.revenue, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Track your consultancy and property development projects
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Active Project Revenue</p>
          <p className="text-3xl font-bold text-success">
            £{totalActiveRevenue.toLocaleString()}/mo
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge
                          variant={
                            project.status === "Active" ? "default" : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                        <Badge variant="outline">{project.type}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Client</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Location
                    </span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      Monthly Revenue
                    </span>
                    <span className="font-semibold text-success">
                      £{project.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Start Date
                    </span>
                    <span className="font-medium">{project.startDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      End Date
                    </span>
                    <span className="font-medium">{project.endDate}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Projects by Location</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gradient-primary rounded-lg text-primary-foreground">
              <div>
                <p className="text-sm opacity-90">Ghana</p>
                <p className="text-xl font-bold">2 Active Projects</p>
              </div>
              <p className="text-lg font-semibold">£3,600/mo</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-gradient-accent rounded-lg text-accent-foreground">
              <div>
                <p className="text-sm opacity-90">UK</p>
                <p className="text-xl font-bold">3 Projects</p>
              </div>
              <p className="text-lg font-semibold">£1,800/mo</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects by Type</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 border border-border rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Consultancy</p>
                <p className="text-xl font-bold">3 Active</p>
              </div>
              <p className="text-lg font-semibold text-success">£5,400/mo</p>
            </div>
            <div className="flex justify-between items-center p-3 border border-border rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Property Development</p>
                <p className="text-xl font-bold">2 Planning</p>
              </div>
              <p className="text-lg font-semibold text-muted-foreground">£0/mo</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
