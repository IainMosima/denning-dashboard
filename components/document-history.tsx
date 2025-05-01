import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, Search, BarChart } from "lucide-react"

export function DocumentHistory() {
  // Mock data - would come from API in real implementation
  const documents = [
    {
      id: "doc-1",
      title: "Commercial Lease Agreement",
      type: "Draft",
      icon: FileText,
      lastModified: "Today, 10:30 AM",
      status: "In Progress",
    },
    {
      id: "doc-2",
      title: "Intellectual Property Rights Research",
      type: "Research",
      icon: Search,
      lastModified: "Yesterday, 3:45 PM",
      status: "Completed",
    },
    {
      id: "doc-3",
      title: "Corporate Merger Analysis",
      type: "Analysis",
      icon: BarChart,
      lastModified: "Apr 24, 2025",
      status: "Review Needed",
    },
    {
      id: "doc-4",
      title: "Employment Contract Template",
      type: "Draft",
      icon: FileText,
      lastModified: "Apr 22, 2025",
      status: "Completed",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Document & Research History</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Title</TableHead>
              <TableHead className="hidden md:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Last Modified</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <doc.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{doc.title}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{doc.type}</TableCell>
                <TableCell className="hidden md:table-cell">{doc.lastModified}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      doc.status === "Completed" ? "success" : doc.status === "Review Needed" ? "warning" : "default"
                    }
                  >
                    {doc.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
