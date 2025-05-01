import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Search, Upload, Folder, BookOpen } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      name: "Start Legal Research",
      icon: Search,
      description: "Search case law, statutes, and legal documents",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Draft Document",
      icon: FileText,
      description: "Create new legal documents and contracts",
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      name: "Upload Case Files",
      icon: Upload,
      description: "Upload and organize your case files",
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      name: "Access Projects",
      icon: Folder,
      description: "View and manage your ongoing projects",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      name: "Law Library",
      icon: BookOpen,
      description: "Access legal resources and precedents",
      color: "text-red-600 dark:text-red-400",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {actions.map((action) => (
            <Button
              key={action.name}
              variant="outline"
              className="h-auto flex flex-col items-center justify-center gap-2 p-3 md:p-4 text-center hover:bg-muted/50"
            >
              <action.icon className={`h-6 w-6 md:h-8 md:w-8 ${action.color}`} />
              <div>
                <div className="font-medium text-sm md:text-base">{action.name}</div>
                <div className="text-xs text-muted-foreground mt-1 hidden sm:block">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
