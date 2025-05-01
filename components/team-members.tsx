import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users } from "lucide-react"

export function TeamMembers() {
  // Mock data - would come from API in real implementation
  const team = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Partner",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
      status: "Available",
      statusColor: "success",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Associate",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
      status: "In Court",
      statusColor: "warning",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Paralegal",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
      status: "Available",
      statusColor: "success",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Associate",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
      status: "Meeting",
      statusColor: "warning",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          Team Members
        </CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {team.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Badge
                variant={
                  member.statusColor === "success"
                    ? "success"
                    : member.statusColor === "warning"
                      ? "warning"
                      : "default"
                }
              >
                {member.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
