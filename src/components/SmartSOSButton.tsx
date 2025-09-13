import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Phone, 
  Video, 
  MapPin, 
  Heart,
  Shield,
  Mic,
  Camera,
  Zap
} from "lucide-react";

const SmartSOSButton = () => {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [sosMode, setSOSMode] = useState<'normal' | 'silent' | 'medical'>('normal');
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsSOSActive(true);
      setCountdown(null);
    }
  }, [countdown]);

  const handleSOSPress = (mode: 'normal' | 'silent' | 'medical') => {
    setSOSMode(mode);
    if (mode === 'normal') {
      setCountdown(3); // 3 second countdown for normal mode
    } else {
      setIsSOSActive(true); // Immediate activation for silent/medical
    }
  };

  const cancelSOS = () => {
    setIsSOSActive(false);
    setCountdown(null);
  };

  if (isSOSActive) {
    return (
      <Card className="border-destructive shadow-emergency animate-pulse">
        <CardHeader className="pb-3">
          <CardTitle className="text-destructive flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 animate-bounce" />
            SOS ACTIVATED
            <Badge variant="destructive" className="ml-auto animate-pulse">
              EMERGENCY
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4 bg-destructive/10 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Emergency services notified</div>
            <div className="text-xs text-muted-foreground">
              Mode: {sosMode.toUpperCase()} | Response time: 3-5 minutes
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center p-2 bg-success/10 rounded border">
              <Video className="w-4 h-4 mx-auto text-success mb-1" />
              <div className="text-xs">Live Stream Active</div>
            </div>
            <div className="text-center p-2 bg-primary/10 rounded border">
              <MapPin className="w-4 h-4 mx-auto text-primary mb-1" />
              <div className="text-xs">Location Shared</div>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={cancelSOS}
          >
            Cancel Emergency
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (countdown) {
    return (
      <Card className="border-warning shadow-lg">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="text-6xl font-bold text-warning mb-2 animate-pulse">
            {countdown}
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            Emergency activation in...
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCountdown(null)}
          >
            Cancel
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-elegant transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-destructive" />
          Smart SOS System
          <Badge variant="outline" className="ml-auto">
            <Zap className="w-3 h-3 mr-1" />
            Always Ready
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          Choose emergency response mode based on your situation
        </div>

        {/* Primary SOS Button */}
        <Button 
          variant="emergency" 
          size="lg" 
          className="w-full h-16 text-lg relative overflow-hidden group"
          onClick={() => handleSOSPress('normal')}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-destructive to-red-600 group-hover:from-red-600 group-hover:to-destructive transition-all duration-300"></div>
          <div className="relative flex items-center justify-center gap-2">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            EMERGENCY SOS
            <div className="text-xs absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              3-sec countdown
            </div>
          </div>
        </Button>

        {/* Secondary SOS Options */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            size="lg" 
            className="h-12 border-warning text-warning hover:bg-warning hover:text-white"
            onClick={() => handleSOSPress('silent')}
          >
            <Mic className="w-4 h-4 mr-2" />
            Silent SOS
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-12 border-destructive text-destructive hover:bg-destructive hover:text-white"
            onClick={() => handleSOSPress('medical')}
          >
            <Heart className="w-4 h-4 mr-2" />
            Medical Emergency
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center p-2 bg-accent/10 rounded">
            <Phone className="w-4 h-4 mx-auto mb-1 text-accent" />
            <div>Auto Call</div>
          </div>
          <div className="text-center p-2 bg-primary/10 rounded">
            <Camera className="w-4 h-4 mx-auto mb-1 text-primary" />
            <div>Live Stream</div>
          </div>
          <div className="text-center p-2 bg-success/10 rounded">
            <MapPin className="w-4 h-4 mx-auto mb-1 text-success" />
            <div>GPS Track</div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center">
          Gesture activation: Shake device 3 times or voice command "Help me"
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartSOSButton;