import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  TrendingUp, 
  Users,
  ThumbsUp,
  ThumbsDown,
  Filter,
  RefreshCw,
  Eye
} from "lucide-react";

const IncidentAwarenessWidget = () => {
  const [filter, setFilter] = useState('all');
  const [incidents] = useState([
    {
      id: 1,
      type: 'weather',
      title: 'Heavy rainfall warning',
      location: 'Rohtang Pass',
      time: '2 hours ago',
      severity: 'high',
      verified: true,
      upvotes: 23,
      downvotes: 2,
      status: 'active'
    },
    {
      id: 2,
      type: 'traffic',
      title: 'Road blockage due to landslide',
      location: 'Manali-Leh Highway',
      time: '4 hours ago',
      severity: 'medium',
      verified: true,
      upvotes: 45,
      downvotes: 1,
      status: 'resolving'
    },
    {
      id: 3,
      type: 'safety',
      title: 'Tourist reported missing',
      location: 'Kasol Valley',
      time: '6 hours ago',
      severity: 'critical',
      verified: false,
      upvotes: 12,
      downvotes: 0,
      status: 'investigating'
    },
    {
      id: 4,
      type: 'wildlife',
      title: 'Bear sighting reported',
      location: 'Great Himalayan National Park',
      time: '1 day ago',
      severity: 'medium',
      verified: true,
      upvotes: 67,
      downvotes: 8,
      status: 'resolved'
    }
  ]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-destructive border-destructive bg-destructive/10';
      case 'high': return 'text-warning border-warning bg-warning/10';
      case 'medium': return 'text-accent border-accent bg-accent/10';
      case 'low': return 'text-success border-success bg-success/10';
      default: return 'text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'weather': return '🌦️';
      case 'traffic': return '🚧';
      case 'safety': return '🚨';
      case 'wildlife': return '🐻';
      default: return '⚠️';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-destructive';
      case 'resolving': return 'bg-warning';
      case 'investigating': return 'bg-accent';
      case 'resolved': return 'bg-success';
      default: return 'bg-muted';
    }
  };

  const filteredIncidents = filter === 'all' 
    ? incidents 
    : incidents.filter(incident => incident.type === filter);

  return (
    <Card className="hover:shadow-elegant transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-warning" />
          Live Incident Feed
          <Badge variant="outline" className="ml-auto">
            <Eye className="w-3 h-3 mr-1" />
            Community Verified
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter Controls */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'weather' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('weather')}
            >
              🌦️ Weather
            </Button>
            <Button 
              variant={filter === 'safety' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('safety')}
            >
              🚨 Safety
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>

        {/* Incidents List */}
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {filteredIncidents.map((incident) => (
            <div key={incident.id} className={`p-3 rounded-lg border ${getSeverityColor(incident.severity)}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{getTypeIcon(incident.type)}</span>
                  <div>
                    <div className="font-medium text-sm">{incident.title}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {incident.location}
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      {incident.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(incident.status)}`}></div>
                  <Badge variant="outline">
                    {incident.severity}
                  </Badge>
                </div>
              </div>

              {/* Status and Verification */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs">
                    <ThumbsUp className="w-3 h-3 text-success" />
                    {incident.upvotes}
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <ThumbsDown className="w-3 h-3 text-muted-foreground" />
                    {incident.downvotes}
                  </div>
                  {incident.verified && (
                    <Badge variant="outline" className="text-success border-success">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-muted-foreground capitalize">
                  {incident.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Actions */}
        <div className="border-t pt-3">
          <Button variant="outline" size="sm" className="w-full">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Report New Incident
          </Button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-2 bg-muted/20 rounded">
            <div className="text-lg font-bold">127</div>
            <div className="text-xs text-muted-foreground">Total Reports</div>
          </div>
          <div className="p-2 bg-success/10 rounded">
            <div className="text-lg font-bold text-success">89%</div>
            <div className="text-xs text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="p-2 bg-primary/10 rounded">
            <div className="text-lg font-bold text-primary">4.2</div>
            <div className="text-xs text-muted-foreground">Avg Response</div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center bg-accent/5 p-2 rounded">
          Reports are verified by AI analysis and community voting for accuracy
        </div>
      </CardContent>
    </Card>
  );
};

export default IncidentAwarenessWidget;