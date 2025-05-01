"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter } from "lucide-react"

interface ResearchFiltersProps {
  onFilterChange: (filterType: string, values: string[]) => void
  selectedFilters: Record<string, string[]>
}

export function ResearchFilters({ onFilterChange, selectedFilters }: ResearchFiltersProps) {
  // Filter options
  const filters = {
    jurisdiction: [
      { id: "kenya", label: "Kenya" },
      { id: "east-africa", label: "East Africa" },
      { id: "commonwealth", label: "Commonwealth" },
      { id: "international", label: "International" },
    ],
    docType: [
      { id: "case-law", label: "Case Law" },
      { id: "statutes", label: "Statutes" },
      { id: "regulations", label: "Regulations" },
      { id: "legal-opinions", label: "Legal Opinions" },
      { id: "academic", label: "Academic Articles" },
    ],
    dateRange: [
      { id: "last-year", label: "Last Year" },
      { id: "last-5-years", label: "Last 5 Years" },
      { id: "last-10-years", label: "Last 10 Years" },
      { id: "older", label: "Older than 10 Years" },
    ],
    court: [
      { id: "supreme", label: "Supreme Court" },
      { id: "high", label: "High Court" },
      { id: "appeals", label: "Court of Appeals" },
      { id: "commercial", label: "Commercial Court" },
      { id: "employment", label: "Employment & Labor Court" },
    ],
  }

  const handleFilterToggle = (filterType: string, value: string) => {
    const currentValues = selectedFilters[filterType] || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]

    onFilterChange(filterType, newValues)
  }

  const handleClearFilters = (filterType: string) => {
    onFilterChange(filterType, [])
  }

  const handleClearAllFilters = () => {
    Object.keys(selectedFilters).forEach((filterType) => {
      onFilterChange(filterType, [])
    })
  }

  const totalSelectedFilters = Object.values(selectedFilters).flat().length

  return (
    <Card className="border-muted">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </CardTitle>
        {totalSelectedFilters > 0 && (
          <Button variant="ghost" size="sm" onClick={handleClearAllFilters}>
            Clear all
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Jurisdiction Filter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Jurisdiction</h3>
            {selectedFilters.jurisdiction?.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto py-1 px-2 text-xs"
                onClick={() => handleClearFilters("jurisdiction")}
              >
                Clear
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {filters.jurisdiction.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`jurisdiction-${item.id}`}
                  checked={selectedFilters.jurisdiction?.includes(item.id) || false}
                  onCheckedChange={() => handleFilterToggle("jurisdiction", item.id)}
                />
                <label
                  htmlFor={`jurisdiction-${item.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Document Type Filter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Document Type</h3>
            {selectedFilters.docType?.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto py-1 px-2 text-xs"
                onClick={() => handleClearFilters("docType")}
              >
                Clear
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {filters.docType.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`docType-${item.id}`}
                  checked={selectedFilters.docType?.includes(item.id) || false}
                  onCheckedChange={() => handleFilterToggle("docType", item.id)}
                />
                <label
                  htmlFor={`docType-${item.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Date Range Filter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Date Range</h3>
            {selectedFilters.dateRange?.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto py-1 px-2 text-xs"
                onClick={() => handleClearFilters("dateRange")}
              >
                Clear
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {filters.dateRange.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`dateRange-${item.id}`}
                  checked={selectedFilters.dateRange?.includes(item.id) || false}
                  onCheckedChange={() => handleFilterToggle("dateRange", item.id)}
                />
                <label
                  htmlFor={`dateRange-${item.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Court Filter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Court</h3>
            {selectedFilters.court?.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto py-1 px-2 text-xs"
                onClick={() => handleClearFilters("court")}
              >
                Clear
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {filters.court.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`court-${item.id}`}
                  checked={selectedFilters.court?.includes(item.id) || false}
                  onCheckedChange={() => handleFilterToggle("court", item.id)}
                />
                <label
                  htmlFor={`court-${item.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
