"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ColleagueSearchProps {
  onSearch: (query: string) => void
}

export function ColleagueSearch({ onSearch }: ColleagueSearchProps) {
  const [query, setQuery] = useState("")
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])

  // Roles for filtering
  const roles = ["Partner", "Associate", "Paralegal", "Legal Assistant", "Intern", "Administrator"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <Card className="border-muted">
      <CardContent className="pt-6">
        <form onSubmit={handleSearch} className="relative">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search colleagues by name, role, or expertise..."
                className="pl-10"
                value={query}
                onChange={handleInputChange}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter by Role
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {roles.map((role) => (
                  <DropdownMenuCheckboxItem
                    key={role}
                    checked={selectedRoles.includes(role)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRoles([...selectedRoles, role])
                      } else {
                        setSelectedRoles(selectedRoles.filter((r) => r !== role))
                      }
                    }}
                  >
                    {role}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button type="submit">Search</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
