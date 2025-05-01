"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Grid, List, BookOpen, FileText, Scale, BookmarkPlus, ExternalLink, Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface LibraryResourceListProps {
  searchQuery: string
  category: string | null
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  onResourceSelect: (resourceId: string) => void
}

export default function LibraryResourceList({
  searchQuery,
  category,
  viewMode,
  onViewModeChange,
  onResourceSelect,
}: LibraryResourceListProps) {
  const [resources, setResources] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [localSearch, setLocalSearch] = useState(searchQuery || "")

  // Mock data - would come from API in real implementation
  const mockResources = [
    {
      id: 1,
      title: "Contract Act of Kenya",
      type: "Statute",
      icon: BookOpen,
      description:
        "The primary legislation governing contract law in Kenya, including formation, performance, and remedies for breach.",
      year: "2012",
      lastUpdated: "2023-05-15",
      category: "Contract Law",
      tags: ["legislation", "contracts", "commercial law"],
    },
    {
      id: 2,
      title: "Smith v. Johnson & Co.",
      type: "Case Law",
      icon: Scale,
      description: "Landmark case establishing principles for damages in contract breach cases in Kenya.",
      year: "2022",
      lastUpdated: "2022-11-10",
      category: "Contract Law",
      tags: ["precedent", "damages", "breach of contract"],
    },
    {
      id: 3,
      title: "Kenyan Employment Law Handbook",
      type: "Reference",
      icon: FileText,
      description:
        "Comprehensive guide to employment law in Kenya, covering hiring, termination, and workplace regulations.",
      year: "2021",
      lastUpdated: "2023-02-28",
      category: "Employment Law",
      tags: ["employment", "labor law", "workplace"],
    },
    {
      id: 4,
      title: "Land Registration Act",
      type: "Statute",
      icon: BookOpen,
      description: "Legislation governing the registration of land and property rights in Kenya.",
      year: "2012",
      lastUpdated: "2022-07-20",
      category: "Property Law",
      tags: ["land", "property", "registration"],
    },
    {
      id: 5,
      title: "ABC Corp v. XYZ Ltd",
      type: "Case Law",
      icon: Scale,
      description: "Important case on corporate governance and director responsibilities in Kenyan companies.",
      year: "2020",
      lastUpdated: "2020-09-15",
      category: "Corporate Law",
      tags: ["corporate governance", "directors", "fiduciary duty"],
    },
    {
      id: 6,
      title: "Intellectual Property Rights in Kenya",
      type: "Reference",
      icon: FileText,
      description: "Guide to intellectual property protection, including patents, trademarks, and copyright in Kenya.",
      year: "2023",
      lastUpdated: "2023-06-10",
      category: "Intellectual Property",
      tags: ["IP", "copyright", "patents", "trademarks"],
    },
  ]

  useEffect(() => {
    // Simulate API call with loading state
    setLoading(true)

    // Set search from props if provided
    if (searchQuery) {
      setLocalSearch(searchQuery)
    }

    // Simulate network delay
    const timer = setTimeout(() => {
      let filteredResources = [...mockResources]

      // Filter by category if provided
      if (category && category !== "All") {
        filteredResources = filteredResources.filter((r) => r.category === category)
      }

      // Filter by search query if provided
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        filteredResources = filteredResources.filter(
          (r) =>
            r.title.toLowerCase().includes(query) ||
            r.description.toLowerCase().includes(query) ||
            r.tags.some((tag: string) => tag.toLowerCase().includes(query)),
        )
      }

      setResources(filteredResources)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [category, searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a new search
    setLoading(true)

    // Simulate search delay
    setTimeout(() => {
      const query = localSearch.toLowerCase()
      const filteredResources = mockResources.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.tags.some((tag: string) => tag.toLowerCase().includes(query)),
      )
      setResources(filteredResources)
      setLoading(false)
    }, 600)
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case "Statute":
        return BookOpen
      case "Case Law":
        return Scale
      default:
        return FileText
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                Law Library Resources
                <span className="inline-flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin ml-2" />
                </span>
              </CardTitle>
              <CardDescription>{category ? `Resources in ${category}` : "Browse all legal resources"}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
          <form className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Skeleton className="h-10 w-full" />
            </div>
          </form>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-6 rounded-full" />
                  </div>
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Law Library Resources</CardTitle>
            <CardDescription>
              {category && category !== "All" ? `Resources in ${category}` : "Browse all legal resources"}
              {searchQuery ? ` matching "${searchQuery}"` : ""}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => onViewModeChange("grid")}
              className="hidden sm:flex"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => onViewModeChange("list")}
              className="hidden sm:flex"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <form onSubmit={handleSearch} className="mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="pl-10 pr-10"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <Button type="submit" size="sm" className="absolute right-1 top-1">
              Search
            </Button>
          </div>
        </form>
      </CardHeader>
      <CardContent>
        {resources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No resources found matching your criteria.</p>
            <Button variant="outline" className="mt-4" onClick={() => setLocalSearch("")}>
              Clear Search
            </Button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => onResourceSelect(resource.id.toString())}
              >
                <div className="flex justify-between">
                  <Badge variant="outline">{resource.type}</Badge>
                  <div className="rounded-full p-1 bg-blue-100 dark:bg-blue-900/20">
                    {React.createElement(getIconForType(resource.type), {
                      className: "h-4 w-4 text-blue-600 dark:text-blue-400",
                    })}
                  </div>
                </div>
                <h3 className="font-medium mt-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{resource.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <Badge variant="secondary">{resource.year}</Badge>
                  <Button variant="ghost" size="icon">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in duration-300">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => onResourceSelect(resource.id.toString())}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-900/20 mt-1">
                    {React.createElement(getIconForType(resource.type), {
                      className: "h-4 w-4 text-blue-600 dark:text-blue-400",
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.category} • Last updated: {new Date(resource.lastUpdated).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                    <p className="mt-2 text-sm">{resource.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <span>View Details</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
