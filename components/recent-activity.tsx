import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, Upload, Clock, Edit, Download, Eye } from "lucide-react"

export function RecentActivity() {
  // Mock data - would come from API in real implementation
  const activities = [
    {
      id: 1,
      action: "Edited",
      icon: Edit,
      item: "Commercial Lease Agreement",
      time: "10 minutes ago",
      user: "You",
    },
    {
      id: 2,
      action: "Viewed",
      icon: Eye,
      item: "Smith v. Johnson Case Notes",
      time: "1 hour ago",
      user: "Sarah Johnson",
    },
    {
      id: 3,
      action: "Downloaded",
      icon: Download,
      item: "Corporate Merger Analysis",
      time: "2 hours ago",
      user: "Michael Chen",
    },
    {
      id: 4,
      action: "Uploaded",
      icon: Upload,
      item: "Client Meeting Notes",
      time: "Yesterday",
      user: "You",
    },
    {
      id: 5,
      action: "Researched",
      icon: Search,
      item: "Employment Law Precedents",
      time: "Yesterday",
      user: "Emily Rodriguez",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Recent Activity</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="rounded-full p-2 bg-muted">
                <activity.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">
                  <span className="text-muted-foreground">{activity.user}</span> {activity.action}{" "}
                  <span className="font-semibold">{activity.item}</span>
                </p>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
