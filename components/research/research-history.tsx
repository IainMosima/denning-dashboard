import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Trash2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ResearchHistory() {
  // Mock data - would come from API in real implementation
  const researchHistory = [
    {
      id: 1,
      query: "Contract breach remedies in Kenyan law",
      status: "Completed",
      date: "Today, 10:30 AM",
      results: 24,
    },
    {
      id: 2,
      query: "Employment termination notice period requirements",
      status: "Completed",
      date: "Yesterday, 3:45 PM",
      results: 18,
    },
    {
      id: 3,
      query: "Land dispute resolution procedures",
      status: "In Progress",
      date: "Apr 24, 2025",
      results: null,
    },
    {
      id: 4,
      query: "Intellectual property rights for software in Kenya",
      status: "Completed",
      date: "Apr 22, 2025",
      results: 32,
    },
    {
      id: 5,
      query: "Corporate tax regulations for startups",
      status: "Failed",
      date: "Apr 20, 2025",
      results: 0,
    },
  ]

  if (researchHistory.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground text-center">No research history yet.</p>
          <p className="text-muted-foreground text-center mb-4">Start your first search to see results here.</p>
          <Button>Start Research</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Research</CardTitle>
        <CardDescription>Your recent legal research queries and results</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Query</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Results</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {researchHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.query}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Completed"
                        ? "success"
                        : item.status === "In Progress"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.results !== null ? item.results : "-"}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" disabled={item.status !== "Completed"}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
