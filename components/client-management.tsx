import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Users, Plus, Building, User } from "lucide-react"

export function ClientManagement() {
  // Mock data - would come from API in real implementation
  const clients = [
    {
      id: 1,
      name: "ABC Corporation",
      type: "Corporate",
      icon: Building,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
      status: "Active",
      cases: 3,
    },
    {
      id: 2,
      name: "John Smith",
      type: "Individual",
      icon: User,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      status: "Active",
      cases: 1,
    },
    {
      id: 3,
      name: "XYZ Startups Inc.",
      type: "Corporate",
      icon: Building,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "XS",
      status: "Active",
      cases: 2,
    },
    {
      id: 4,
      name: "Maria Garcia",
      type: "Individual",
      icon: User,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MG",
      status: "Inactive",
      cases: 0,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          Clients
        </CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <span>View All</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                  <AvatarFallback>{client.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{client.name}</p>
                    <Badge variant={client.status === "Active" ? "success" : "default"}>{client.status}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <client.icon className="h-3.5 w-3.5 mr-1" />
                    <span>{client.type}</span>
                    {client.cases > 0 && (
                      <>
                        <span className="mx-1">•</span>
                        <span>
                          {client.cases} active {client.cases === 1 ? "case" : "cases"}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
