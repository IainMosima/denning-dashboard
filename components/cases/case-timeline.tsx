import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface CaseTimelineProps {
  caseId: number
}

export function CaseTimeline({ caseId }: CaseTimelineProps) {
  // Mock data - would come from API in real implementation
  const events = [
    {
      id: 1,
      date: "April 26, 2025",
      time: "10:30 AM",
      type: "Document Filed",
      description: "Response to Motion for Summary Judgment filed by Defendant",
      user: "Michael Chen",
    },
    {
      id: 2,
      date: "April 20, 2025",
      time: "2:15 PM",
      type: "Hearing",
      description: "Status conference held before Judge Kimani. Next hearing scheduled for May 10, 2025.",
      user: "Sarah Johnson",
    },
    {
      id: 3,
      date: "April 15, 2025",
      time: "9:00 AM",
      type: "Document Filed",
      description: "Motion for Summary Judgment filed by Plaintiff",
      user: "Sarah Johnson",
    },
    {
      id: 4,
      date: "March 30, 2025",
      time: "11:45 AM",
      type: "Client Meeting",
      description: "Meeting with client to discuss case strategy and upcoming motions",
      user: "Sarah Johnson",
    },
    {
      id: 5,
      date: "March 15, 2025",
      time: "3:30 PM",
      type: "Document Filed",
      description: "Answer to Complaint filed by Defendant",
      user: "Michael Chen",
    },
    {
      id: 6,
      date: "January 15, 2025",
      time: "9:30 AM",
      type: "Case Filed",
      description: "Initial complaint filed with the High Court of Kenya",
      user: "Sarah Johnson",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Case Timeline</CardTitle>
          <CardDescription>Chronological history of case events</CardDescription>
        </div>
        <Button size="sm" className="gap-1">
          <Plus className="h-4 w-4" />
          Add Event
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6 border-l border-muted">
          {events.map((event, index) => (
            <div key={event.id} className={`relative pb-8 ${index === events.length - 1 ? "" : ""}`}>
              <div className="absolute -left-[25px] mt-1.5 h-4 w-4 rounded-full border border-background bg-primary"></div>
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{event.type}</h4>
                  <Badge variant="outline">{event.date}</Badge>
                  <span className="text-sm text-muted-foreground">{event.time}</span>
                </div>
                <p className="text-sm mt-1">{event.description}</p>
                <p className="text-xs text-muted-foreground mt-1">Added by {event.user}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
