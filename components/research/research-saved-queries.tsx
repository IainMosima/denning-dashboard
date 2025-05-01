"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function ResearchSavedQueries() {
  // Mock data - would come from API in real implementation
  const savedQueries = [
    {
      id: 1,
      query: "Contract breach remedies in Kenyan law",
    },
    {
      id: 2,
      query: "Employment termination notice period requirements",
    },
    {
      id: 3,
      query: "Land dispute resolution procedures",
    },
  ]

  return (
    <Card className="border-muted">
      <CardHeader>
        <CardTitle>Saved Queries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {savedQueries.map((item) => (
            <Button key={item.id} variant="ghost" className="w-full justify-start text-left h-auto py-2">
              <Search className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
              <span className="truncate">{item.query}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
