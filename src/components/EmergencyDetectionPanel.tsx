import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Activity, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Shield,
  Heart,
  Phone,
  Eye,
  Zap
} from "lucide-react";

const EmergencyDetectionPanel = () => {
  const [aiStatus, setAiStatus] = useState('monitoring');
  const [detections, setDetections] = useState([
    {
      id: 1,
      type: 'movement',
      status: 'normal',
      message: 'Regular movement pattern detected',
      timestamp: '2 min ago',
      confidence: 95
    },
    {
      id: 2,
      type: 'location',
      status: 'warning',
      message: 'Approaching high-risk zone boundary',
      timestamp: '5 min ago',
      confidence: 87
    },
    {
      id: 3,
      type: 'communication',
      status: 'normal',
      message: 'Check-in with family completed',
      timestamp: '15 min ago',
      confidence: 98
    }
  ]);

  const [aiInsights, setAiInsights] = useState([
    'Weather conditions stable for next 4 hours',
    'Recommended route change due to landslide risk',
    'Nearby rescue team available within 10 minutes'
  ]);

  useEffect(() => {
    // Simulate real-time AI monitoring
    const interval = setInterval(() => {
      setDetections(prev => prev.map(detection => ({
        ...detection,
        timestamp: `${Math.floor(Math.random() * 30)} min ago`
      })));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-success border-success bg-success/10';
      case 'warning': return 'text-warning border-warning bg-warning/10';
      case 'critical': return 'text-destructive border-destructive bg-destructive/10';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'movement': return <Activity className="w-4 h-4" />;
      case 'location': return <MapPin className="w-4 h-4" />;
      case 'communication': return <Phone className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <Card className="hover:shadow-elegant transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-accent animate-pulse" />
          AI Safety Intelligence
          <Badge variant="outline" className={`ml-auto ${
            aiStatus === 'monitoring' ? 'text-success border-success' : 'text-warning border-warning'
          }`}>
            <Activity className="w-3 h-3 mr-1" />
            {aiStatus === 'monitoring' ? 'Active Monitoring' : 'Alert Mode'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* AI Status Overview */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-success/10 rounded-lg border border-success/20">
            <Shield className="w-6 h-6 mx-auto text-success mb-1" />
            <div className="text-sm font-semibold">Pattern Analysis</div>
            <div className="text-xs text-muted-foreground">Normal</div>
          </div>
          <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
            <Eye className="w-6 h-6 mx-auto text-primary mb-1" />
            <div className="text-sm font-semibold">Risk Assessment</div>
            <div className="text-xs text-muted-foreground">Low (15%)</div>
          </div>
          <div className="text-center p-3 bg-accent/10 rounded-lg border border-accent/20">
            <Zap className="w-6 h-6 mx-auto text-accent mb-1" />
            <div className="text-sm font-semibold">Response Ready</div>
            <div className="text-xs text-muted-foreground">2.3s</div>
          </div>
        </div>

        {/* Recent Detections */}
        <div>
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Recent AI Detections
          </h4>
          <div className="space-y-2">
            {detections.map((detection) => (
              <div key={detection.id} className={`p-3 rounded-lg border ${getStatusColor(detection.status)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(detection.type)}
                    <div>
                      <div className="text-sm font-medium">{detection.message}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {detection.timestamp}
                        <span>•</span>
                        Confidence: {detection.confidence}%
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">
                    {detection.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights & Recommendations */}
        <div>
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Smart Recommendations
          </h4>
          <div className="space-y-2">
            {aiInsights.map((insight, index) => (
              <div key={index} className="p-2 bg-accent/5 rounded border-l-2 border-accent text-sm">
                {insight}
              </div>
            ))}
          </div>
        </div>

        {/* Predictive Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <MapPin className="w-4 h-4 mr-2" />
            Update Route
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Heart className="w-4 h-4 mr-2" />
            Health Check
          </Button>
        </div>

        <div className="text-xs text-muted-foreground text-center bg-muted/20 p-2 rounded">
          AI continuously analyzes movement patterns, environmental data, and communication signals to predict and prevent incidents
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyDetectionPanel;