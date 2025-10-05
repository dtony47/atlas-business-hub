import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Calendar, MapPin } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const expenses = [
  {
    id: 1,
    category: "Property Maintenance",
    description: "Ghana rental property repairs",
    amount: 850,
    date: "2025-09-28",
    location: "Ghana",
    status: "Paid",
  },
  {
    id: 2,
    category: "Marketing",
    description: "Consultancy service advertising",
    amount: 420,
    date: "2025-10-01",
    location: "UK",
    status: "Paid",
  },
  {
    id: 3,
    category: "Legal & Professional",
    description: "Business registration fees",
    amount: 650,
    date: "2025-09-15",
    location: "Ghana",
    status: "Paid",
  },
  {
    id: 4,
    category: "Utilities",
    description: "Property utilities - September",
    amount: 380,
    date: "2025-09-30",
    location: "Ghana",
    status: "Paid",
  },
  {
    id: 5,
    category: "Property Development",
    description: "UK Airbnb setup deposit",
    amount: 3500,
    date: "2025-10-05",
    location: "UK",
    status: "Pending",
  },
  {
    id: 6,
    category: "Insurance",
    description: "Property insurance - Q4",
    amount: 1200,
    date: "2025-10-01",
    location: "Ghana",
    status: "Paid",
  },
];

const monthlyExpenses = [
  { month: "Jan", amount: 3200 },
  { month: "Feb", amount: 2800 },
  { month: "Mar", amount: 3500 },
  { month: "Apr", amount: 2900 },
  { month: "May", amount: 3100 },
  { month: "Jun", amount: 4200 },
];

const expensesByCategory = [
  { category: "Property Maintenance", amount: 2500 },
  { category: "Property Development", amount: 3500 },
  { category: "Insurance", amount: 1200 },
  { category: "Legal & Professional", amount: 650 },
  { category: "Marketing", amount: 420 },
  { category: "Utilities", amount: 1180 },
];

export default function Expenses() {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const pendingExpenses = expenses
    .filter((e) => e.status === "Pending")
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
          <p className="text-muted-foreground">
            Track and manage your business expenses
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Expenses (Oct)</p>
          <p className="text-3xl font-bold text-destructive">
            £{totalExpenses.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Expenses
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£{totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Payments
            </CardTitle>
            <Calendar className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              £{pendingExpenses.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {expenses.filter((e) => e.status === "Pending").length} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Monthly
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£3,283</div>
            <p className="text-xs text-muted-foreground mt-1">Last 6 months</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Expense Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyExpenses}>
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
              <Bar dataKey="amount" fill="hsl(0 72% 51%)" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Expenses by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expensesByCategory.map((item) => (
                <div
                  key={item.category}
                  className="flex justify-between items-center p-3 border border-border rounded-lg"
                >
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm font-bold">£{item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expenses.slice(0, 6).map((expense) => (
                <div
                  key={expense.id}
                  className="flex justify-between items-start p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant={expense.status === "Paid" ? "default" : "destructive"}
                      >
                        {expense.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{expense.category}</span>
                    </div>
                    <p className="text-sm font-medium">{expense.description}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {expense.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {expense.location}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-destructive">
                    £{expense.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
