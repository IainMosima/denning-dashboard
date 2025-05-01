"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface LibrarySearchProps {
  onSearch: (query: string) => void
}

export default function LibrarySearch({ onSearch }: LibrarySearchProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        type="search"
        placeholder="Search legal resources..."
        className="w-full pl-10 bg-background border-border"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Button type="submit" variant="ghost" size="sm" className="absolute right-0 top-0 h-full rounded-l-none">
        Search
      </Button>
    </form>
  )
}
