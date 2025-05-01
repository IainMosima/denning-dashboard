import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ChevronRight, Plus } from "lucide-react"

export function UpcomingEvents() {
  // Mock data - would come from API in real implementation
  const events = [
    {
      id: 1,
      title: "Smith v. Johnson Hearing",
      type: "Court Appearance",
      date: "Today",
      time: "2:30 PM",
      location: "District Court, Room 304",
      priority: "high",
    },
    {
      id: 2,
      title: "Client Meeting - ABC Corp",
      type: "Meeting",
      date: "Tomorrow",
      time: "10:00 AM",
      location: "Conference Room B",
      priority: "medium",
    },
    {
      id: 3,
      title: "Contract Review Deadline",
      type: "Deadline",
      date: "Apr 28, 2025",
      time: "5:00 PM",
      location: "Office",
      priority: "medium",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          Upcoming Events
        </CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <span>View Calendar</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col space-y-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{event.title}</h3>
                <Badge
                  variant={
                    event.priority === "high" ? "destructive" : event.priority === "medium" ? "warning" : "default"
                  }
                >
                  {event.type}
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{event.date}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{event.time}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
