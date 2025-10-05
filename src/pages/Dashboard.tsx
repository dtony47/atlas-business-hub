import { FinancialCard } from "@/components/FinancialCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, TrendingDown, AlertCircle, Building2, Briefcase } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const revenueData = [
  { month: "Jan", rental: 4500, consultancy: 3200, airbnb: 0 },
  { month: "Feb", rental: 4500, consultancy: 4100, airbnb: 0 },
  { month: "Mar", rental: 4800, consultancy: 3800, airbnb: 0 },
  { month: "Apr", rental: 4500, consultancy: 5200, airbnb: 0 },
  { month: "May", rental: 4500, consultancy: 4500, airbnb: 0 },
  { month: "Jun", rental: 4800, consultancy: 3900, airbnb: 800 },
];

const revenueBySource = [
  { name: "Rental Properties (Ghana)", value: 27600, color: "hsl(221 83% 53%)" },
  { name: "Consultancy Services", value: 24700, color: "hsl(142 71% 45%)" },
  { name: "Airbnb (UK)", value: 800, color: "hsl(38 92% 50%)" },
];

const alerts = [
  { id: 1, title: "UK Airbnb Setup Pending", type: "warning", date: "2025-10-03" },
  { id: 2, title: "Ghana Property Maintenance Due", type: "info", date: "2025-10-15" },
  { id: 3, title: "Consultancy Invoice Outstanding", type: "warning", date: "2025-09-28" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your business portfolio across Ghana and UK
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FinancialCard
          title="Total Revenue"
          value="£53,100"
          change="+12.5% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <FinancialCard
          title="Total Expenses"
          value="£18,450"
          change="+4.3% from last month"
          changeType="negative"
          icon={TrendingDown}
        />
        <FinancialCard
          title="Net Profit"
          value="£34,650"
          change="+15.2% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
        <FinancialCard
          title="Active Projects"
          value="5"
          change="2 in Ghana, 3 in UK"
          changeType="neutral"
          icon={Briefcase}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="rental" fill="hsl(221 83% 53%)" name="Rental" />
                <Bar dataKey="consultancy" fill="hsl(142 71% 45%)" name="Consultancy" />
                <Bar dataKey="airbnb" fill="hsl(38 92% 50%)" name="Airbnb" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueBySource}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueBySource.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Key Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Badge
                    variant={alert.type === "warning" ? "destructive" : "default"}
                  >
                    {alert.type}
                  </Badge>
                  <span className="font-medium">{alert.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">{alert.date}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Properties Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gradient-primary rounded-lg text-primary-foreground">
              <div>
                <p className="text-sm opacity-90">Ghana Rental Properties</p>
                <p className="text-2xl font-bold">3 Active</p>
              </div>
              <p className="text-xl font-semibold">£4,800/mo</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-gradient-accent rounded-lg text-accent-foreground">
              <div>
                <p className="text-sm opacity-90">UK Airbnb Projects</p>
                <p className="text-2xl font-bold">2 Pending</p>
              </div>
              <p className="text-xl font-semibold">£0/mo</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Consultancy Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 border border-border rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Ghana</p>
                <p className="text-xl font-bold">2 Active Clients</p>
              </div>
              <p className="text-lg font-semibold text-success">£2,100/mo</p>
            </div>
            <div className="flex justify-between items-center p-3 border border-border rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">UK</p>
                <p className="text-xl font-bold">1 Active Client</p>
              </div>
              <p className="text-lg font-semibold text-success">£1,800/mo</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
