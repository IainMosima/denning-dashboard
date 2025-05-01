"use client"

import type React from "react"

import { useState } from "react"
import { Search, Mic, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isListening, setIsListening] = useState(false)
  const [recentSearches, setRecentSearches] = useState([
    "Contract breach remedies in Kenyan law",
    "Employment termination notice period requirements",
    "Land dispute resolution procedures",
  ])
  const [popularTopics, setPopularTopics] = useState([
    { name: "Contract Law", count: 245 },
    { name: "Employment Law", count: 187 },
    { name: "Land Disputes", count: 156 },
    { name: "Intellectual Property", count: 132 },
    { name: "Family Law", count: 98 },
  ])

  // Mock suggestions based on input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    // Show suggestions only if there's input
    if (value.length > 2) {
      // Mock suggestions - in a real app, these would come from an API
      const mockSuggestions = [
        `${value} in contract law`,
        `${value} case precedents`,
        `${value} legal definition`,
        `${value} in Kenyan law`,
        `${value} statutory provisions`,
      ]
      setSuggestions(mockSuggestions)
    } else {
      setSuggestions([])
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
      setSuggestions([])
      // Add to recent searches (in a real app, this would be stored in a database)
      if (!recentSearches.includes(query)) {
        setRecentSearches([query, ...recentSearches.slice(0, 2)])
      }
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    onSearch(suggestion)
    setSuggestions([])
  }

  const handleVoiceSearch = () => {
    // In a real app, this would use the Web Speech API
    setIsListening(true)
    setTimeout(() => {
      setIsListening(false)
      setQuery("Voice search example query")
    }, 2000)
  }

  const handleAIAssist = () => {
    // In a real app, this would open an AI assistant dialog
    setQuery("What are the legal requirements for terminating an employment contract in Kenya?")
  }

  return (
    <Card className="border-muted">
      <CardContent className="pt-6">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Kenyan case law, statutes, legal opinions..."
              className="pl-10 pr-24 py-6 text-lg"
              value={query}
              onChange={handleInputChange}
            />
            <div className="absolute right-2 top-2 flex gap-2">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className={isListening ? "text-primary animate-pulse" : ""}
                onClick={handleVoiceSearch}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button type="button" size="icon" variant="ghost" onClick={handleAIAssist}>
                <Sparkles className="h-4 w-4" />
              </Button>
              <Button type="submit">Search</Button>
            </div>
          </div>

          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-background border rounded-md mt-1 shadow-lg">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-muted cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium mb-2">Recent searches:</p>
              <div className="space-y-2">
                {recentSearches.map((term, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto py-2"
                    onClick={() => {
                      setQuery(term)
                      onSearch(term)
                    }}
                  >
                    <Search className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                    <span className="truncate">{term}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Popular topics:</p>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map((topic) => (
                  <Badge
                    key={topic.name}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary"
                    onClick={() => {
                      setQuery(topic.name)
                      onSearch(topic.name)
                    }}
                  >
                    {topic.name} ({topic.count})
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
