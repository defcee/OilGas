import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Droplets,
  AlertTriangle,
  TrendingUp,
  MapPin,
  CheckCircle,
  Users,
  Shield,
  BarChart3,
  Zap,
  Eye,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
              OG
            </div>
            <span className="font-bold text-xl text-primary">OilGuard</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-primary hover:bg-primary/5">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Enterprise Waste Management for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Oil & Gas Operations
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Real-time compliance tracking, waste reporting, and environmental oversight
                  built for large-scale oil and gas companies. Ensure HSE compliance across all
                  working sites.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary/20">
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t">
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Active Sites</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">Reports/Month</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative h-96 hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full p-8">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50 flex flex-col items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-primary mb-2" />
                    <span className="text-sm font-semibold text-primary">Analytics</span>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200/50 flex flex-col items-center justify-center">
                    <AlertTriangle className="w-12 h-12 text-accent mb-2" />
                    <span className="text-sm font-semibold text-accent">Alerts</span>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50 flex flex-col items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mb-2" />
                    <span className="text-sm font-semibold text-green-700">Compliance</span>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50 flex flex-col items-center justify-center">
                    <MapPin className="w-12 h-12 text-purple-600 mb-2" />
                    <span className="text-sm font-semibold text-purple-700">Multi-Site</span>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 border-y">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Waste Management Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for oil and gas operators with enterprise-grade security and
              compliance features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Waste Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track drilling mud, produced water, and drill cuttings across all sites with
                  real-time volume monitoring and disposal status.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Role-Based Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Separate dashboards for Admins, HSE Officers, and Field Workers with
                  site-specific access control.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>HSE Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated compliance monitoring, approval workflows, and audit trails for
                  regulatory requirements.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>GPS & Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatic GPS capture for waste reports and interactive site mapping with
                  geo-distributed operations overview.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Chain of Custody</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete lifecycle tracking from waste generation through disposal with
                  transporter assignments and verification.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  JWT authentication, encrypted data transmission, role-based permissions, and
                  comprehensive audit logging.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Role-Based Dashboards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Purpose-Built Dashboards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each role has a specialized interface tailored to their responsibilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Field Worker Dashboard */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-50"></div>
              <CardHeader className="relative -mt-16 pt-8">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border-4 border-primary/20 mb-4 shadow-md">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Field Worker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Submit waste reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Upload media & GPS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">View report status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Site activity history</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* HSE Officer Dashboard */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-50"></div>
              <CardHeader className="relative -mt-16 pt-8">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border-4 border-accent/20 mb-4 shadow-md">
                  <AlertTriangle className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-2xl">HSE Officer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Review all reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Approve/flag reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Monitor compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Generate reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Admin Dashboard */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-50"></div>
              <CardHeader className="relative -mt-16 pt-8">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border-4 border-purple-600/20 mb-4 shadow-md">
                  <Lock className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Administrator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Manage sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Assign users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">View all reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Audit logs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join leading oil and gas operators using OilGuard for enterprise-grade compliance
            and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Started Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary/20">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  OG
                </div>
                <span className="font-bold">OilGuard</span>
              </div>
              <p className="text-sm opacity-70">
                Enterprise waste management for oil and gas operations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Features</li>
                <li>Security</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Compliance</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
            <p>&copy; 2024 OilGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
