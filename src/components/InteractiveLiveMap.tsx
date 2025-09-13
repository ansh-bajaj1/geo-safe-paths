import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  AlertTriangle, 
  Shield, 
  Hospital, 
  Phone,
  Users,
  Zap,
  Activity
} from "lucide-react";

const InteractiveLiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const touristLocations = [
    { id: 1, name: "Manali", tourists: 234, risk: "low", x: 20, y: 30 },
    { id: 2, name: "Leh", tourists: 89, risk: "medium", x: 60, y: 20 },
    { id: 3, name: "Rishikesh", tourists: 156, risk: "low", x: 40, y: 50 },
    { id: 4, name: "Kasol", tourists: 67, risk: "high", x: 25, y: 35 },
  ];

  const emergencyServices = [
    { id: 1, type: "hospital", name: "District Hospital", x: 22, y: 32 },
    { id: 2, type: "police", name: "Police Station", x: 58, y: 22 },
    { id: 3, type: "rescue", name: "Rescue Team", x: 42, y: 52 },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-success border-success bg-success/10";
      case "medium": return "text-warning border-warning bg-warning/10";
      case "high": return "text-destructive border-destructive bg-destructive/10";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary animate-pulse" />
          Live Tourist Safety Map
          <Badge variant="outline" className="ml-auto">
            <Zap className="w-3 h-3 mr-1" />
            Real-time
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 h-96 overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 via-accent/20 to-success/30 rounded-lg"></div>
          </div>

          {/* Tourist Locations */}
          {touristLocations.map((location) => (
            <div
              key={location.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                selectedLocation === location.name ? "scale-125 z-20" : "z-10"
              }`}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onClick={() => setSelectedLocation(selectedLocation === location.name ? null : location.name)}
            >
              <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${getRiskColor(location.risk)}`}>
                <Users className="w-4 h-4" />
                <div className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {location.tourists}
                </div>
              </div>
              
              {/* Pulse Animation for High Risk */}
              {location.risk === "high" && (
                <div className="absolute inset-0 rounded-full border-2 border-destructive animate-ping"></div>
              )}

              {/* Location Details Popup */}
              {selectedLocation === location.name && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-elegant border min-w-48 z-30">
                  <div className="text-sm font-semibold">{location.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Users className="w-3 h-3" />
                    {location.tourists} tourists active
                  </div>
                  <div className={`text-xs mt-1 flex items-center gap-1 ${getRiskColor(location.risk)}`}>
                    <AlertTriangle className="w-3 h-3" />
                    {location.risk.toUpperCase()} risk zone
                  </div>
                  <Button size="sm" className="w-full mt-2 h-6 text-xs">
                    View Details
                  </Button>
                </div>
              )}
            </div>
          ))}

          {/* Emergency Services */}
          {emergencyServices.map((service) => (
            <div
              key={service.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-5"
              style={{ left: `${service.x}%`, top: `${service.y}%` }}
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-primary shadow-md">
                {service.type === "hospital" && <Hospital className="w-3 h-3 text-destructive" />}
                {service.type === "police" && <Shield className="w-3 h-3 text-primary" />}
                {service.type === "rescue" && <Phone className="w-3 h-3 text-warning" />}
              </div>
            </div>
          ))}

          {/* Risk Zones Overlay */}
          <div className="absolute top-4 right-4 space-y-2">
            <Badge className="bg-success/20 text-success border-success">
              <MapPin className="w-3 h-3 mr-1" />
              Safe Zones: 3
            </Badge>
            <Badge className="bg-warning/20 text-warning border-warning">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Watch Zones: 1
            </Badge>
            <Badge className="bg-destructive/20 text-destructive border-destructive">
              <AlertTriangle className="w-3 h-3 mr-1" />
              High Risk: 1
            </Badge>
          </div>

          {/* Live Stats */}
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur p-3 rounded-lg">
            <div className="text-xs text-muted-foreground">Active Tourists</div>
            <div className="text-2xl font-bold text-foreground">546</div>
            <div className="text-xs text-success flex items-center gap-1">
              <Activity className="w-3 h-3" />
              All systems operational
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveLiveMap;