import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, BookOpen, FileText, Search, ExternalLink } from "lucide-react"

export function KnowledgeBase() {
  // Mock data - would come from API in real implementation
  const resources = [
    {
      id: 1,
      title: "Contract Templates",
      description: "Standard templates for common legal documents",
      icon: FileText,
      link: "#",
    },
    {
      id: 2,
      title: "Legal Research Database",
      description: "Access to case law and legal precedents",
      icon: Search,
      link: "#",
    },
    {
      id: 3,
      title: "Procedure Guides",
      description: "Step-by-step guides for legal procedures",
      icon: BookOpen,
      link: "#",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          Knowledge Base
        </CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>Browse All</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-900/20">
                <resource.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{resource.title}</p>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
