import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Phone, 
  Heart,
  Navigation,
  Users,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";
import digitalIdImage from "@/assets/digital-id-card.jpg";

const TouristDashboard = () => {
  const safetyScore = 85;
  const currentLocation = "Manali, Himachal Pradesh";
  const nearbyAlerts = 2;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tourist Safety Dashboard</h1>
            <p className="text-muted-foreground">Real-time monitoring and safety assistance</p>
          </div>
          <Badge variant="outline" className="px-4 py-2 text-lg">
            <Shield className="w-5 h-5 mr-2" />
            Active Protection
          </Badge>
        </div>

        {/* Emergency Actions */}
        <Card className="border-destructive/20 shadow-emergency">
          <CardHeader className="pb-4">
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Emergency Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="emergency" size="lg" className="h-16">
                <Phone className="w-6 h-6 mr-2" />
                Panic Button
              </Button>
              <Button variant="trust" size="lg" className="h-16">
                <MapPin className="w-6 h-6 mr-2" />
                Share Location
              </Button>
              <Button variant="outline" size="lg" className="h-16 border-destructive text-destructive hover:bg-destructive hover:text-white">
                <Heart className="w-6 h-6 mr-2" />
                Medical Emergency
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Digital ID Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Digital Tourist ID
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={digitalIdImage} 
                  alt="Digital Tourist ID Card"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tourist ID:</span>
                  <span className="text-sm font-mono">TID-2025-001234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Valid Until:</span>
                  <span className="text-sm">Mar 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Blockchain Hash:</span>
                  <span className="text-sm font-mono">0x4a2f...8c9d</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Score & Status */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-accent" />
                Safety Status & Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Safety Score */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-success to-green-600 text-white text-3xl font-bold mb-4">
                  {safetyScore}
                </div>
                <h3 className="text-xl font-semibold text-success">Excellent Safety Score</h3>
                <p className="text-muted-foreground">Based on location, time, and behavior patterns</p>
              </div>

              {/* Current Status */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-success/10">
                  <MapPin className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="font-semibold text-success">Safe Zone</p>
                  <p className="text-sm text-muted-foreground">{currentLocation}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-warning/10">
                  <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
                  <p className="font-semibold text-warning">{nearbyAlerts} Alerts Nearby</p>
                  <p className="text-sm text-muted-foreground">Weather & Traffic</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Geo-fencing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium">Check-in: Hotel Manali Heights</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Entered Rohtang Pass Route</p>
                    <p className="text-sm text-muted-foreground">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Safety briefing completed</p>
                    <p className="text-sm text-muted-foreground">6 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Connected Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success text-white flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Family Group</p>
                      <p className="text-sm text-muted-foreground">3 members active</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-success border-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Local Guide: Raj Kumar</p>
                      <p className="text-sm text-muted-foreground">Certified guide</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-accent border-accent">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Emergency Services</p>
                      <p className="text-sm text-muted-foreground">24/7 available</p>
                    </div>
                  </div>
                  <Badge variant="outline">
                    <XCircle className="w-4 h-4 mr-1" />
                    Standby
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TouristDashboard;