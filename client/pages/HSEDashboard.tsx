import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, TrendingUp, Eye } from "lucide-react";

export default function HSEDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }
    const userData = JSON.parse(user);
    if (userData.role !== "hse_officer") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">HSE Dashboard</h1>
            <p className="text-muted-foreground">Monitor compliance and approve waste reports</p>
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
          {/* Key Metrics */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle>Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">0</p>
              <p className="text-sm text-muted-foreground mt-2">Reports awaiting approval</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Approved This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">0</p>
              <p className="text-sm text-muted-foreground mt-2">Compliant reports</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Site Compliance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0%</p>
              <p className="text-sm text-muted-foreground mt-2">HSE metrics</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg mb-6">
          <CardHeader>
            <CardTitle>Review Queue</CardTitle>
            <CardDescription>Waste reports pending approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
              <Eye className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No pending reports to review
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" variant="default">
              View All Reports
            </Button>
            <Button className="w-full" variant="outline">
              Generate Compliance Report
            </Button>
            <Button className="w-full" variant="outline">
              Site Trends
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-sm text-muted-foreground mb-2">💡 Tip</p>
          <p className="text-foreground">
            Continue prompting to build out HSE features: report approval interface, compliance analytics, and audit trails.
          </p>
        </div>
      </main>
    </div>
  );
}
