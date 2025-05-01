"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LibrarySearch from "./library-search"
import LibraryCategories from "./library-categories"
import LibraryBookmarks from "./library-bookmarks"
import LibraryResourceList from "./library-resource-list"
import LibraryResourceDetail from "./library-resource-detail"

export default function LawLibraryWorkspace() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const handleResourceSelect = (resourceId: string) => {
    setSelectedResource(resourceId)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSelectedResource(null)
  }

  const handleCategorySelect = (category: string | null) => {
    setActiveCategory(category)
    setSelectedResource(null)
  }

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="border-b border-border">
        <div className="container py-4 px-4 md:px-6">
          <h1 className="text-xl md:text-3xl font-bold text-primary">Law Library</h1>
          <p className="text-muted-foreground mt-1">
            Access comprehensive legal resources, precedents, and research materials
          </p>
        </div>
      </div>

      <div className="container py-4 md:py-6 px-4 md:px-6 flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="w-full md:w-1/4 space-y-4 md:space-y-6">
          <LibrarySearch onSearch={handleSearch} />

          <Tabs defaultValue="categories" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
            </TabsList>
            <TabsContent value="categories" className="mt-4">
              <LibraryCategories activeCategory={activeCategory} onCategorySelect={handleCategorySelect} />
            </TabsContent>
            <TabsContent value="bookmarks" className="mt-4">
              <LibraryBookmarks onResourceSelect={handleResourceSelect} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex-1 space-y-4 md:space-y-6 overflow-hidden">
          {!selectedResource ? (
            <LibraryResourceList
              searchQuery={searchQuery}
              category={activeCategory}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onResourceSelect={handleResourceSelect}
            />
          ) : (
            <LibraryResourceDetail resourceId={selectedResource} onBack={() => setSelectedResource(null)} />
          )}
        </div>
      </div>
    </div>
  )
}
