"use client"
import { useState, useEffect } from "react"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Scale, ExternalLink, BookmarkPlus, Download, Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface ResearchResultsProps {
  query: string
  filters?: Record<string, string[]>
}

export function ResearchResults({ query, filters }: ResearchResultsProps) {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data - would come from API in real implementation
  const mockResults = [
    {
      id: 1,
      title: "Smith v. Johnson & Co. (2022)",
      type: "Case Law",
      icon: Scale,
      summary:
        "The court held that in cases of contract breach, the aggrieved party is entitled to damages that would put them in the position they would have been had the contract been performed, but not to punitive damages unless specifically provided for in the contract.",
      source: "Kenya Law Reports, 2022, Vol. 3, p. 145",
      relevance: "High",
    },
    {
      id: 2,
      title: "Contract Act of Kenya, Section 73",
      type: "Statute",
      icon: BookOpen,
      summary:
        "When a contract has been broken, the party who suffers by such breach is entitled to receive, from the party who has broken the contract, compensation for any loss or damage caused to him thereby, which naturally arose in the usual course of things from such breach.",
      source: "Laws of Kenya, Contract Act, Cap. 23",
      relevance: "High",
    },
    {
      id: 3,
      title: "Remedies for Breach of Contract in Kenyan Law",
      type: "Legal Opinion",
      icon: FileText,
      summary:
        "This comprehensive analysis examines the various remedies available under Kenyan law for breach of contract, including specific performance, damages, and injunctions, with reference to recent case law developments.",
      source: "Kenya Law Review, 2023, Issue 2",
      relevance: "Medium",
    },
    {
      id: 4,
      title: "ABC Corp v. XYZ Ltd (2020)",
      type: "Case Law",
      icon: Scale,
      summary:
        "The court clarified the standard for determining whether a breach is material enough to justify termination of the contract, emphasizing that minor breaches typically do not warrant termination.",
      source: "Kenya Law Reports, 2020, Vol. 2, p. 78",
      relevance: "Medium",
    },
    {
      id: 5,
      title: "International Principles of Contract Law in Kenyan Courts",
      type: "Legal Opinion",
      icon: FileText,
      summary:
        "This article explores how Kenyan courts have incorporated international principles of contract law, such as the UNIDROIT Principles, in their interpretation and application of Kenyan contract law.",
      source: "International Business Law Journal, 2021",
      relevance: "Low",
    },
  ]

  useEffect(() => {
    // Simulate API call with loading state
    setLoading(true)

    // Simulate network delay
    const timer = setTimeout(() => {
      setResults(mockResults)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [query, filters])

  const resultCounts = {
    all: mockResults.length,
    caseLaw: mockResults.filter((r) => r.type === "Case Law").length,
    statutes: mockResults.filter((r) => r.type === "Statute").length,
    opinions: mockResults.filter((r) => r.type === "Legal Opinion").length,
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Research Results
                <span className="inline-flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin ml-2" />
                </span>
              </CardTitle>
              <CardDescription>
                Searching for: <span className="font-medium">{query}</span>
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" disabled>
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all" disabled>
                All Results
              </TabsTrigger>
              <TabsTrigger value="case-law" disabled>
                Case Law
              </TabsTrigger>
              <TabsTrigger value="statutes" disabled>
                Statutes
              </TabsTrigger>
              <TabsTrigger value="opinions" disabled>
                Legal Opinions
              </TabsTrigger>
            </TabsList>

            <div className="mt-4 space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Skeleton className="rounded-full p-2 h-8 w-8 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <Skeleton className="h-5 w-64 mb-1" />
                          <Skeleton className="h-4 w-40" />
                        </div>
                        <Skeleton className="h-6 w-28" />
                      </div>
                      <Skeleton className="h-4 w-full mt-2" />
                      <Skeleton className="h-4 w-full mt-1" />
                      <Skeleton className="h-4 w-2/3 mt-1" />
                      <div className="mt-3 flex items-center justify-between">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-8 w-32" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Research Results</CardTitle>
            <CardDescription>
              Showing results for: <span className="font-medium">{query}</span>
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Results ({resultCounts.all})</TabsTrigger>
            <TabsTrigger value="case-law">Case Law ({resultCounts.caseLaw})</TabsTrigger>
            <TabsTrigger value="statutes">Statutes ({resultCounts.statutes})</TabsTrigger>
            <TabsTrigger value="opinions">Legal Opinions ({resultCounts.opinions})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="space-y-4">
              {results.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="case-law" className="mt-4">
            <div className="space-y-4">
              {results
                .filter((result) => result.type === "Case Law")
                .map((result) => (
                  <ResultCard key={result.id} result={result} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="statutes" className="mt-4">
            <div className="space-y-4">
              {results
                .filter((result) => result.type === "Statute")
                .map((result) => (
                  <ResultCard key={result.id} result={result} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="opinions" className="mt-4">
            <div className="space-y-4">
              {results
                .filter((result) => result.type === "Legal Opinion")
                .map((result) => (
                  <ResultCard key={result.id} result={result} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface ResultCardProps {
  result: {
    id: number
    title: string
    type: string
    icon: React.ElementType
    summary: string
    source: string
    relevance: string
  }
}

function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
      <div className="flex items-start gap-3">
        <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-900/20 mt-1">
          <result.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{result.title}</h3>
              <p className="text-sm text-muted-foreground">{result.source}</p>
            </div>
            <Badge
              variant={result.relevance === "High" ? "success" : result.relevance === "Medium" ? "default" : "outline"}
            >
              {result.relevance} Relevance
            </Badge>
          </div>
          <p className="mt-2 text-sm">{result.summary}</p>
          <div className="mt-3 flex items-center justify-between">
            <Badge variant="outline">{result.type}</Badge>
            <Button variant="ghost" size="sm" className="gap-1">
              <span>View Full Text</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
