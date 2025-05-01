"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, Search, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface CaseListProps {
  onCaseSelect: (caseId: number) => void
  filter: "active" | "archived" | "all"
}

export function CaseList({ onCaseSelect, filter }: CaseListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  // Mock data - would come from API in real implementation
  const cases = [
    {
      id: 1,
      name: "Smith v. Johnson Contract Dispute",
      type: "Contract",
      court: "High Court of Kenya",
      client: "Smith Enterprises",
      status: "Active",
      lastUpdated: "Today, 10:30 AM",
      priority: "High",
    },
    {
      id: 2,
      name: "ABC Corp Intellectual Property Case",
      type: "Intellectual Property",
      court: "Commercial Court",
      client: "ABC Corporation",
      status: "Active",
      lastUpdated: "Yesterday",
      priority: "Medium",
    },
    {
      id: 3,
      name: "Estate of James Wilson",
      type: "Probate",
      court: "Probate Court",
      client: "Wilson Family",
      status: "Active",
      lastUpdated: "2 days ago",
      priority: "Medium",
    },
    {
      id: 4,
      name: "XYZ Ltd. Tax Appeal",
      type: "Tax",
      court: "Tax Appeals Tribunal",
      client: "XYZ Limited",
      status: "Archived",
      lastUpdated: "Last week",
      priority: "Low",
    },
    {
      id: 5,
      name: "Johnson Family Trust Dispute",
      type: "Trust",
      court: "Family Court",
      client: "Johnson Family",
      status: "Active",
      lastUpdated: "3 days ago",
      priority: "High",
    },
  ]

  // Filter cases based on the selected filter
  const filteredCases = cases.filter((c) => {
    if (filter === "active") return c.status === "Active"
    if (filter === "archived") return c.status === "Archived"
    return true // "all" filter
  })

  // Further filter based on search query and selected types
  const displayedCases = filteredCases.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(c.type)
    return matchesSearch && matchesType
  })

  // Get unique case types for filter
  const caseTypes = Array.from(new Set(cases.map((c) => c.type)))

  if (filteredCases.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground text-center">No cases found.</p>
          <p className="text-muted-foreground text-center mb-4">
            {filter === "active"
              ? "You don't have any active cases."
              : filter === "archived"
                ? "You don't have any archived cases."
                : "You don't have any cases yet."}
          </p>
          <Button>Create New Case</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cases</CardTitle>
        <CardDescription>
          {filter === "active"
            ? "Your active legal cases"
            : filter === "archived"
              ? "Your archived legal cases"
              : "All your legal cases"}
        </CardDescription>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cases..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter by Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {caseTypes.map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedTypes([...selectedTypes, type])
                    } else {
                      setSelectedTypes(selectedTypes.filter((t) => t !== type))
                    }
                  }}
                >
                  {type}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case Name</TableHead>
              <TableHead className="hidden md:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Priority</TableHead>
              <TableHead className="hidden lg:table-cell">Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedCases.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell className="hidden md:table-cell">{c.type}</TableCell>
                <TableCell className="hidden md:table-cell">{c.client}</TableCell>
                <TableCell>
                  <Badge variant={c.status === "Active" ? "success" : "default"}>{c.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge
                    variant={c.priority === "High" ? "destructive" : c.priority === "Medium" ? "warning" : "outline"}
                  >
                    {c.priority}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell">{c.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => onCaseSelect(c.id)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
