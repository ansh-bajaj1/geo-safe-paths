import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MapPin, 
  Brain, 
  Users, 
  Smartphone,
  Radio,
  Eye,
  Lock,
  Zap,
  Globe,
  CheckCircle,
  AlertTriangle,
  Heart,
  Navigation
} from "lucide-react";
import heroImage from "@/assets/hero-safety-system.jpg";
import InteractiveLiveMap from "./InteractiveLiveMap";
import SmartSOSButton from "./SmartSOSButton";
import EmergencyDetectionPanel from "./EmergencyDetectionPanel";
import IncidentAwarenessWidget from "./IncidentAwarenessWidget";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage = ({ onNavigate }: LandingPageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Smart Tourist Safety System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-background/90" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Badge className="mb-6 px-6 py-2 text-lg bg-white/20 backdrop-blur text-white border-white/30">
            <Shield className="w-5 h-5 mr-2" />
            Smart India Hackathon 2025
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Tourist Safety
            <span className="block bg-gradient-to-r from-warning to-success bg-clip-text text-transparent">
              Monitoring System
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered, blockchain-secured safety monitoring with real-time incident response 
            for tourists in high-risk and remote areas across India
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => onNavigate('tourist')}
            >
              <Smartphone className="w-6 h-6 mr-2" />
              Tourist Dashboard
            </Button>
            <Button 
              variant="trust" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => onNavigate('authority')}
            >
              <Shield className="w-6 h-6 mr-2" />
              Authority Center
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Interactive Features */}
      <section className="py-20 bg-gradient-to-br from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Interactive Safety Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience cutting-edge AI-powered safety tools with real-time monitoring, 
              predictive intelligence, and community-verified incident awareness
            </p>
          </div>

          {/* Interactive Widgets Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <InteractiveLiveMap />
            <div className="space-y-6">
              <SmartSOSButton />
              <div className="grid grid-cols-1 gap-6">
                <EmergencyDetectionPanel />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <IncidentAwarenessWidget />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Safety Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrating cutting-edge technologies for proactive tourist safety, 
              emergency response, and real-time monitoring across India's diverse landscapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Identity */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-warning flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-primary">Blockchain Digital ID</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tamper-proof digital identity with KYC integration, travel itinerary, 
                  medical info, and time-bound validity for secure authentication.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Aadhaar/Passport Integration
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Medical & Insurance Data
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Auto-deactivation Post-visit
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Detection */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-accent/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-accent">AI Anomaly Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced AI algorithms detect unusual patterns, route deviations, 
                  silent phones, and predict safety risks based on multiple data points.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Behavioral Pattern Analysis
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Predictive Risk Assessment
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Real-time Threat Detection
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geo-fencing */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-success/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success to-green-600 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-success">Smart Geo-fencing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dynamic safety zones with real-time alerts for high-risk areas, 
                  automated route recommendations, and location-based safety scoring.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Dynamic Risk Zone Updates
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Safe Route Recommendations
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Proximity-based Alerts
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Response */}
            <Card className="group hover:shadow-emergency transition-all duration-300 border-destructive/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-destructive to-red-600 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-destructive">Panic Response System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  One-touch emergency activation with live location sharing, 
                  audio/video streaming, and automatic dispatch to nearest rescue teams.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Instant Emergency Alerts
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Live Audio/Video Stream
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Auto E-FIR Generation
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IoT Integration */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-warning/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-warning to-orange-600 flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-warning">IoT & Wearables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Smart bands for health monitoring, Bluetooth beacons at tourist sites, 
                  and IoT sensors for environmental hazard detection.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Health Monitoring Bands
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Environmental Sensors
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Proximity Safety Updates
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Features */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-purple-500/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-600">Community Participation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Crowd-sourced incident reporting, community verification of risk zones, 
                  and reward systems for timely emergency reporting.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Incident Reporting Portal
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Community Verification
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Reward System
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Technical Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technologies aligned with Digital India and Make in India initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-warning flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-time Processing</h3>
              <p className="text-muted-foreground text-sm">
                Sub-second response times with edge computing and distributed processing
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Scalable Cloud</h3>
              <p className="text-muted-foreground text-sm">
                Auto-scaling infrastructure supporting millions of concurrent users
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success to-green-600 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Privacy-First</h3>
              <p className="text-muted-foreground text-sm">
                End-to-end encryption with GDPR compliance and user consent mechanisms
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-destructive to-red-600 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
              <p className="text-muted-foreground text-sm">
                Multilingual support with offline-first design and voice commands
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-success">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Tourist Safety?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the future of intelligent safety monitoring and emergency response
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto"
              onClick={() => onNavigate('tourist')}
            >
              <Navigation className="w-6 h-6 mr-2" />
              Explore Tourist Features
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto"
              onClick={() => onNavigate('authority')}
            >
              <Eye className="w-6 h-6 mr-2" />
              View Authority Dashboard
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;