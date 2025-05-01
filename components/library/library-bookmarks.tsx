"use client"

import { useState } from "react"
import { Star, Clock, FileText, BookOpen, File } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface LibraryBookmarksProps {
  onResourceSelect: (resourceId: string) => void
}

// Mock data for bookmarked resources
const bookmarkedResources = [
  {
    id: "bk1",
    title: "Smith v. Johnson (2023)",
    type: "Case Law",
    date: "2023-09-15",
    category: "Intellectual Property",
  },
  {
    id: "bk2",
    title: "Contract Template: SaaS Agreement",
    type: "Template",
    date: "2023-08-22",
    category: "Contracts",
  },
  {
    id: "bk3",
    title: "Federal Rules of Civil Procedure",
    type: "Statute",
    date: "2023-07-30",
    category: "Federal",
  },
  {
    id: "bk4",
    title: "Legal Research Methodology",
    type: "Article",
    date: "2023-06-18",
    category: "Research",
  },
  {
    id: "bk5",
    title: "Corporate Litigation Guide",
    type: "Practice Guide",
    date: "2023-05-04",
    category: "Corporate",
  },
]

export default function LibraryBookmarks({ onResourceSelect }: LibraryBookmarksProps) {
  const [filter, setFilter] = useState<string | null>(null)

  const filteredResources = filter ? bookmarkedResources.filter((r) => r.type === filter) : bookmarkedResources

  const getIcon = (type: string) => {
    switch (type) {
      case "Case Law":
        return <BookOpen className="h-4 w-4" />
      case "Template":
        return <File className="h-4 w-4" />
      case "Statute":
        return <FileText className="h-4 w-4" />
      case "Article":
        return <FileText className="h-4 w-4" />
      case "Practice Guide":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={filter === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setFilter(null)}
        >
          All
        </Badge>
        <Badge
          variant={filter === "Case Law" ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setFilter("Case Law")}
        >
          Cases
        </Badge>
        <Badge
          variant={filter === "Template" ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setFilter("Template")}
        >
          Templates
        </Badge>
        <Badge
          variant={filter === "Statute" ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setFilter("Statute")}
        >
          Statutes
        </Badge>
        <Badge
          variant={filter === "Article" ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setFilter("Article")}
        >
          Articles
        </Badge>
      </div>

      <div className="space-y-2">
        {filteredResources.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4 text-center">No bookmarked resources found</p>
        ) : (
          filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="p-3 rounded-md border border-border bg-card hover:bg-accent cursor-pointer"
              onClick={() => onResourceSelect(resource.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary">{getIcon(resource.type)}</div>
                  <div>
                    <h4 className="font-medium text-sm">{resource.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {resource.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {new Date(resource.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
