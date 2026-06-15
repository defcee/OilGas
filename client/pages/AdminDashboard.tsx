import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, MapPin, FileText, BarChart3 } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }
    const userData = JSON.parse(user);
    if (userData.role !== "admin") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage sites, users, and system oversight</p>
          </div>
          <Button variant="outline" onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
          }}>
            Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Quick Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Create Site</CardTitle>
              <CardDescription>Add new working site</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                New Site
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Manage Users</CardTitle>
              <CardDescription>Assign roles and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                View Users
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>View Reports</CardTitle>
              <CardDescription>All site reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Open Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
            <CardDescription>Core platform features coming soon</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Sites</p>
                <p className="text-2xl font-bold text-primary mt-1">0</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold text-accent mt-1">0</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Reports (This Month)</p>
                <p className="text-2xl font-bold text-green-600 mt-1">0</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Pending Approvals</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-muted-foreground mb-2">💡 Tip</p>
          <p className="text-foreground">
            Continue prompting to build out full admin functionality: site management, user assignment, analytics, and reporting features.
          </p>
        </div>
      </main>
    </div>
  );
}
