import { FinancialCard } from "@/components/FinancialCard";
import { QuickActions } from "@/components/QuickActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, TrendingDown, AlertCircle, Building2, Briefcase, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { toast } from "sonner";

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
  const handleAddNew = () => {
    toast.info("Add new item", {
      description: "This will open a form to add new entries",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your business portfolio across Ghana and UK
          </p>
        </div>
        <QuickActions 
          onAddNew={handleAddNew}
          onExport={() => {}}
          onFilter={() => {}}
          addLabel="Quick Add"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FinancialCard
          title="Total Revenue"
          value="£53,100"
          change="↑ 12.5% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <FinancialCard
          title="Total Expenses"
          value="£18,450"
          change="↑ 4.3% from last month"
          changeType="negative"
          icon={TrendingDown}
        />
        <FinancialCard
          title="Net Profit"
          value="£34,650"
          change="↑ 15.2% from last month"
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
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Revenue Trends
              <Badge variant="secondary" className="text-xs">Last 6 months</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRental" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(221 83% 53%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(221 83% 53%)" stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="colorConsultancy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142 71% 45%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(142 71% 45%)" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                <XAxis dataKey="month" className="text-xs" stroke="hsl(var(--muted-foreground))" />
                <YAxis className="text-xs" stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                  cursor={{ fill: 'hsl(var(--muted))', opacity: 0.1 }}
                />
                <Bar dataKey="rental" fill="url(#colorRental)" name="Rental" radius={[8, 8, 0, 0]} />
                <Bar dataKey="consultancy" fill="url(#colorConsultancy)" name="Consultancy" radius={[8, 8, 0, 0]} />
                <Bar dataKey="airbnb" fill="hsl(38 92% 50%)" name="Airbnb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Revenue by Source
              <Badge variant="secondary" className="text-xs">YTD 2025</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueBySource}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
                  innerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={3}
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
                    boxShadow: "var(--shadow-lg)",
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value) => <span className="text-xs">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-warning/10 rounded-lg">
                <AlertCircle className="h-5 w-5 text-warning" />
              </div>
              Key Alerts
            </div>
            <Badge variant="destructive" className="text-xs">{alerts.length} Active</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 hover:border-primary/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <Badge
                    variant={alert.type === "warning" ? "destructive" : "default"}
                    className="shrink-0"
                  >
                    {alert.type}
                  </Badge>
                  <span className="font-medium group-hover:text-primary transition-colors">{alert.title}</span>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{alert.date}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-lift overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              Properties Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 relative">
            <div className="flex justify-between items-center p-4 bg-gradient-primary rounded-xl text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
              <div>
                <p className="text-sm opacity-90 font-medium">Ghana Rental Properties</p>
                <p className="text-3xl font-bold mt-1">3 Active</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">£4,800</p>
                <p className="text-xs opacity-80">per month</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-accent rounded-xl text-accent-foreground shadow-lg hover:shadow-xl transition-shadow">
              <div>
                <p className="text-sm opacity-90 font-medium">UK Airbnb Projects</p>
                <p className="text-3xl font-bold mt-1">2 Pending</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">£0</p>
                <p className="text-xs opacity-80">per month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2">
              <div className="p-2 bg-success/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-success" />
              </div>
              Consultancy Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 relative">
            <div className="flex justify-between items-center p-4 border-2 border-success/20 rounded-xl hover:border-success/40 hover:bg-success/5 transition-all group">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Ghana</p>
                <p className="text-2xl font-bold mt-1 group-hover:text-success transition-colors">2 Active Clients</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-success">£2,100</p>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border-2 border-success/20 rounded-xl hover:border-success/40 hover:bg-success/5 transition-all group">
              <div>
                <p className="text-sm text-muted-foreground font-medium">UK</p>
                <p className="text-2xl font-bold mt-1 group-hover:text-success transition-colors">1 Active Client</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-success">£1,800</p>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
