"use client"

import { useState } from "react"
import { SearchBar } from "@/components/research/search-bar"
import { ResearchHistory } from "@/components/research/research-history"
import { ResearchResults } from "@/components/research/research-results"
import { NewResearchRequest } from "@/components/research/new-research-request"
import { AIAssistantPanel } from "@/components/research/ai-assistant-panel"
import { ResearchFilters } from "@/components/research/research-filters"
import { ResearchSavedQueries } from "@/components/research/research-saved-queries"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus, ArrowLeft } from "lucide-react"

export function ResearchWorkspace() {
  const [activeTab, setActiveTab] = useState("search")
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [showNewRequest, setShowNewRequest] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    jurisdiction: [],
    docType: [],
    dateRange: [],
    court: [],
  })

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setShowResults(true)
    setActiveTab("results")
  }

  const handleNewRequest = () => {
    setShowNewRequest(true)
    setActiveTab("new")
  }

  const handleRequestSubmit = () => {
    setShowNewRequest(false)
    setShowResults(true)
    setActiveTab("results")
  }

  const handleFilterChange = (filterType: string, values: string[]) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: values,
    }))
  }

  const handleBackToSearch = () => {
    setActiveTab("search")
    setShowResults(false)
  }

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          {showResults ? (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleBackToSearch}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">Research Results</h1>
                <p className="text-muted-foreground">
                  Results for: <span className="font-medium">{searchQuery}</span>
                </p>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Legal Research</h1>
              <p className="text-muted-foreground">
                Use AI to search through Kenyan case law, statutes, and legal opinions
              </p>
            </>
          )}
        </div>
        <Button onClick={handleNewRequest} className="gap-2">
          <Plus className="h-4 w-4" />
          New Research Request
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2">
          {!showResults && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="search">Quick Search</TabsTrigger>
                <TabsTrigger value="history">Research History</TabsTrigger>
                <TabsTrigger value="new">New Request</TabsTrigger>
              </TabsList>
              <TabsContent value="search" className="mt-4">
                <SearchBar onSearch={handleSearch} />
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <ResearchHistory onSelectQuery={handleSearch} />
              </TabsContent>
              <TabsContent value="new" className="mt-4">
                <NewResearchRequest onSubmit={handleRequestSubmit} />
              </TabsContent>
            </Tabs>
          )}

          {showResults && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              <div className="md:col-span-1">
                <ResearchFilters onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
                <div className="mt-4 md:mt-6">
                  <ResearchSavedQueries onSelectQuery={handleSearch} />
                </div>
              </div>
              <div className="md:col-span-3">
                <ResearchResults query={searchQuery} filters={selectedFilters} />
              </div>
            </div>
          )}
        </div>

        <div>
          <AIAssistantPanel query={searchQuery} />
        </div>
      </div>
    </div>
  )
}
