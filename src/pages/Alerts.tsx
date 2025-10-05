import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "UK Airbnb Setup Pending",
    description: "London apartment renovation needs to be scheduled before December",
    type: "warning",
    priority: "high",
    date: "2025-10-03",
    category: "Property",
  },
  {
    id: 2,
    title: "Ghana Property Maintenance Due",
    description: "Annual maintenance inspection required for Accra property",
    type: "info",
    priority: "medium",
    date: "2025-10-15",
    category: "Maintenance",
  },
  {
    id: 3,
    title: "Consultancy Invoice Outstanding",
    description: "TechCorp Ghana invoice #234 pending payment (£2,100)",
    type: "warning",
    priority: "high",
    date: "2025-09-28",
    category: "Finance",
  },
  {
    id: 4,
    title: "Lease Renewal Approaching",
    description: "Tema Residential Complex lease expires November 30th",
    type: "info",
    priority: "medium",
    date: "2025-11-30",
    category: "Property",
  },
  {
    id: 5,
    title: "Insurance Renewal Required",
    description: "Property insurance policy needs renewal by December 15th",
    type: "warning",
    priority: "high",
    date: "2025-12-15",
    category: "Insurance",
  },
  {
    id: 6,
    title: "Project Milestone Achieved",
    description: "UK Business Strategy project reached 80% completion",
    type: "success",
    priority: "low",
    date: "2025-10-01",
    category: "Project",
  },
  {
    id: 7,
    title: "Utility Bill Payment Due",
    description: "October utilities for Ghana properties due by 20th",
    type: "info",
    priority: "medium",
    date: "2025-10-20",
    category: "Finance",
  },
  {
    id: 8,
    title: "New Property Inquiry",
    description: "Potential tenant interested in Manchester studio unit",
    type: "info",
    priority: "low",
    date: "2025-10-04",
    category: "Property",
  },
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-warning" />;
    case "success":
      return <CheckCircle className="h-5 w-5 text-success" />;
    case "info":
      return <Clock className="h-5 w-5 text-primary" />;
    default:
      return <AlertCircle className="h-5 w-5 text-muted-foreground" />;
  }
};

const getPriorityVariant = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive";
    case "medium":
      return "default";
    case "low":
      return "secondary";
    default:
      return "secondary";
  }
};

export default function Alerts() {
  const highPriorityCount = alerts.filter((a) => a.priority === "high").length;
  const warningCount = alerts.filter((a) => a.type === "warning").length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alerts & Notifications</h1>
          <p className="text-muted-foreground">
            Stay on top of important business updates
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Alerts
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{alerts.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Active notifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              High Priority
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{highPriorityCount}</div>
            <p className="text-xs text-muted-foreground mt-1">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Warnings
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{warningCount}</div>
            <p className="text-xs text-muted-foreground mt-1">Need action soon</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className="transition-all hover:shadow-lg border-l-4"
            style={{
              borderLeftColor:
                alert.type === "warning"
                  ? "hsl(var(--warning))"
                  : alert.type === "success"
                  ? "hsl(var(--success))"
                  : "hsl(var(--primary))",
            }}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">{getAlertIcon(alert.type)}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{alert.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {alert.description}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Badge variant={getPriorityVariant(alert.priority)}>
                        {alert.priority}
                      </Badge>
                      <Badge variant="outline">{alert.category}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-muted-foreground">
                      Due: {alert.date}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
