import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart, LineChart } from "@/components/ui/chart"

interface DocumentAnalyticsProps {
  timeRange: string
  isCompact?: boolean
}

export function DocumentAnalytics({ timeRange, isCompact = false }: DocumentAnalyticsProps) {
  // Mock data - would come from API in real implementation
  const documentsByType = {
    labels: ["Contracts", "Pleadings", "Motions", "Legal Opinions", "Memos", "Other"],
    datasets: [
      {
        label: "Documents Created",
        data: [24, 18, 12, 8, 6, 4],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
        borderColor: "rgba(16, 185, 129, 1)",
        borderWidth: 1,
      },
    ],
  }

  const documentTrends = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Documents Created",
        data: [14, 18, 16, 22],
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Documents Modified",
        data: [22, 25, 18, 30],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const topTemplates = [
    { name: "Employment Contract", uses: 12, category: "Contract" },
    { name: "Non-Disclosure Agreement", uses: 10, category: "Contract" },
    { name: "Motion for Summary Judgment", uses: 8, category: "Motion" },
    { name: "Commercial Lease Agreement", uses: 7, category: "Contract" },
    { name: "Answer to Complaint", uses: 6, category: "Pleading" },
  ]

  if (isCompact) {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Document Analytics</h3>
        <div className="h-64">
          <BarChart
            data={documentsByType}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Document Analytics</CardTitle>
          <CardDescription>Analysis of document creation and usage</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Documents by Type</h3>
            <div className="h-80">
              <BarChart
                data={documentsByType}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Document Activity Trends</h3>
            <div className="h-80">
              <LineChart
                data={documentTrends}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Used Templates</CardTitle>
          <CardDescription>Templates with highest usage frequency</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Template Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Usage Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topTemplates.map((template, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{template.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{template.category}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{template.uses}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
