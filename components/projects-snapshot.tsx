import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSnapshot() {
  // Mock data - would come from API in real implementation
  const projects = [
    {
      id: 1,
      title: "Smith v. Johnson Contract Dispute",
      type: "Case Analysis",
      icon: FileText,
      status: "In Progress",
      statusColor: "bg-blue-500",
      lastUpdated: "2 hours ago",
    },
    {
      id: 2,
      title: "Commercial Lease Agreement Draft",
      type: "Document",
      icon: FileText,
      status: "Review Needed",
      statusColor: "bg-amber-500",
      lastUpdated: "Yesterday",
    },
    {
      id: 3,
      title: "Employment Law Research",
      type: "Research",
      icon: Search,
      status: "Completed",
      statusColor: "bg-green-500",
      lastUpdated: "3 days ago",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Ongoing Projects</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-start gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div
                className={`rounded-full p-2 ${project.statusColor} bg-opacity-10 text-${project.statusColor.split("-")[1]}-700 dark:text-${project.statusColor.split("-")[1]}-400`}
              >
                <project.icon className="h-5 w-5" />
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{project.title}</p>
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "success"
                        : project.status === "Review Needed"
                          ? "warning"
                          : "default"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{project.type}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{project.lastUpdated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
