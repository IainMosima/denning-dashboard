import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, FileEdit, FilePlus, FileSearch, ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documents | Denning Platform",
  description: "Document management for legal professionals",
}

export default function DocumentsPage() {
  // Mock data - would come from API in real implementation
  const documentCategories = [
    {
      title: "Draft Documents",
      description: "Create new legal documents using AI templates",
      icon: FileEdit,
      link: "/documents/drafting",
      count: 0,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "My Documents",
      description: "Access your saved documents",
      icon: FileText,
      link: "#",
      count: 24,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    },
    {
      title: "Templates",
      description: "Browse document templates",
      icon: FilePlus,
      link: "#",
      count: 42,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "Document Search",
      description: "Search through all documents",
      icon: FileSearch,
      link: "#",
      count: 87,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/20",
    },
  ]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">Create, manage, and access your legal documents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {documentCategories.map((category) => (
          <Card key={category.title} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className={`rounded-full p-2 ${category.bgColor}`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                {category.count > 0 && (
                  <span className="text-sm font-medium text-muted-foreground">
                    {category.count} {category.count === 1 ? "item" : "items"}
                  </span>
                )}
              </div>
              <CardTitle className="mt-4">{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={category.link} passHref>
                <Button className="w-full gap-1">
                  <span>Access</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>Your recently accessed documents</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">No recent documents to display</p>
        </CardContent>
      </Card>
    </div>
  )
}
