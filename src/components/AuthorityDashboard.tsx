import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  AlertTriangle, 
  Users, 
  Activity,
  Shield,
  Phone,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Radio,
  Eye
} from "lucide-react";
import emergencyDashboard from "@/assets/emergency-dashboard.jpg";

const AuthorityDashboard = () => {
  const activeTourists = 1247;
  const activeAlerts = 3;
  const safeZones = 15;
  const emergencyUnits = 8;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Authority Command Center</h1>
            <p className="text-muted-foreground">Real-time tourist safety monitoring & incident response</p>
          </div>
          <div className="flex gap-3">
            <Badge variant="outline" className="px-4 py-2 text-lg border-success text-success">
              <Shield className="w-5 h-5 mr-2" />
              All Systems Active
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-accent/20 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Tourists</p>
                  <p className="text-3xl font-bold text-accent">{activeTourists.toLocaleString()}</p>
                </div>
                <Users className="w-12 h-12 text-accent/60" />
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-success">+12% from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Alerts</p>
                  <p className="text-3xl font-bold text-warning">{activeAlerts}</p>
                </div>
                <AlertTriangle className="w-12 h-12 text-warning/60" />
              </div>
              <div className="flex items-center mt-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground mr-1" />
                <span className="text-muted-foreground">Last updated 2 min ago</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Safe Zones</p>
                  <p className="text-3xl font-bold text-success">{safeZones}</p>
                </div>
                <MapPin className="w-12 h-12 text-success/60" />
              </div>
              <div className="flex items-center mt-2 text-sm">
                <CheckCircle className="w-4 h-4 text-success mr-1" />
                <span className="text-success">All operational</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Emergency Units</p>
                  <p className="text-3xl font-bold text-destructive">{emergencyUnits}</p>
                </div>
                <Radio className="w-12 h-12 text-destructive/60" />
              </div>
              <div className="flex items-center mt-2 text-sm">
                <Activity className="w-4 h-4 text-destructive mr-1" />
                <span className="text-destructive">3 units active</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Controls */}
        <Card className="border-destructive/20 shadow-emergency">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Emergency Response Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="emergency" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Dispatch Unit
              </Button>
              <Button variant="trust" size="lg">
                <Radio className="w-5 h-5 mr-2" />
                Broadcast Alert
              </Button>
              <Button variant="outline" size="lg" className="border-warning text-warning hover:bg-warning hover:text-white">
                <Eye className="w-5 h-5 mr-2" />
                Monitor Zone
              </Button>
              <Button variant="outline" size="lg">
                <Shield className="w-5 h-5 mr-2" />
                Generate E-FIR
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Live Map Interface */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Live Tourist Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={emergencyDashboard} 
                  alt="Emergency Response Dashboard Map"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 space-y-2">
                  <Badge className="bg-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    1,150 Safe
                  </Badge>
                  <Badge className="bg-warning ml-2">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    97 Caution
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur">
                    <Eye className="w-4 h-4 mr-1" />
                    Full Screen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Incidents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Active Incidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                  <div className="flex-1">
                    <p className="font-medium text-destructive">HIGH PRIORITY</p>
                    <p className="text-sm">Tourist missing - Rohtang Pass</p>
                    <p className="text-xs text-muted-foreground">TID-2025-001156 • 15 min ago</p>
                  </div>
                  <Button variant="emergency" size="sm">
                    Respond
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="flex-1">
                    <p className="font-medium text-warning">MEDIUM PRIORITY</p>
                    <p className="text-sm">Weather alert - Snowfall warning</p>
                    <p className="text-xs text-muted-foreground">Solang Valley • 1 hour ago</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-warning text-warning">
                    Monitor
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="flex-1">
                    <p className="font-medium text-accent">LOW PRIORITY</p>
                    <p className="text-sm">Traffic congestion - Mall Road</p>
                    <p className="text-xs text-muted-foreground">Manali Center • 2 hours ago</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Analytics & System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                AI Risk Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Weather Risk</span>
                  <Badge variant="outline" className="text-warning border-warning">Medium</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Terrain Risk</span>
                  <Badge variant="outline" className="text-success border-success">Low</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Crowd Density</span>
                  <Badge variant="outline" className="text-warning border-warning">High</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Crime Risk</span>
                  <Badge variant="outline" className="text-success border-success">Very Low</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Blockchain Network</span>
                  <Badge variant="outline" className="text-success border-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Detection</span>
                  <Badge variant="outline" className="text-success border-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">GPS Tracking</span>
                  <Badge variant="outline" className="text-success border-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Optimal
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Communication</span>
                  <Badge variant="outline" className="text-warning border-warning">
                    <XCircle className="w-4 h-4 mr-1" />
                    Degraded
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Response Time</span>
                    <span className="font-medium">2.3 min avg</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-[85%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Alert Accuracy</span>
                    <span className="font-medium">94.2%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-[94%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>System Uptime</span>
                    <span className="font-medium">99.8%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-[98%]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;