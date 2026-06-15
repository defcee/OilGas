import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, MapPin, Droplets } from "lucide-react";

export default function WorkerDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }
    const userData = JSON.parse(user);
    if (userData.role !== "field_worker") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Field Operations</h1>
            <p className="text-muted-foreground">Submit and manage waste reports</p>
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
          <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>New Waste Report</CardTitle>
              <CardDescription>Submit a new waste report</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Create Report
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>My Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground mt-2">Total submitted</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Current Site</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground">Assigned Site</p>
              <p className="text-sm text-muted-foreground mt-2">View site details</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg mb-6">
          <CardHeader>
            <CardTitle>Waste Report Types</CardTitle>
            <CardDescription>Choose the type of waste to report</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <button className="p-4 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all">
                <Droplets className="w-6 h-6 text-primary mb-2" />
                <p className="font-semibold text-foreground">Drilling Mud</p>
                <p className="text-xs text-muted-foreground mt-1">Waste mud from drilling</p>
              </button>
              <button className="p-4 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all">
                <Droplets className="w-6 h-6 text-primary mb-2" />
                <p className="font-semibold text-foreground">Produced Water</p>
                <p className="text-xs text-muted-foreground mt-1">Water waste from production</p>
              </button>
              <button className="p-4 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all">
                <Droplets className="w-6 h-6 text-primary mb-2" />
                <p className="font-semibold text-foreground">Drill Cuttings</p>
                <p className="text-xs text-muted-foreground mt-1">Cuttings from drilling</p>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
              <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No reports submitted yet
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-muted-foreground mb-2">💡 Tip</p>
          <p className="text-foreground">
            Continue prompting to build out field worker features: waste report form, GPS capture, media uploads, and report history.
          </p>
        </div>
      </main>
    </div>
  );
}
