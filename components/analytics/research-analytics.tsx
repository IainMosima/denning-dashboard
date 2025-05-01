import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, PieChart } from "@/components/ui/chart"

interface ResearchAnalyticsProps {
  timeRange: string
  isCompact?: boolean
}

export function ResearchAnalytics({ timeRange, isCompact = false }: ResearchAnalyticsProps) {
  // Mock data - would come from API in real implementation
  const researchByType = {
    labels: ["Case Law", "Statutes", "Legal Opinions", "Academic Articles", "Regulations"],
    datasets: [
      {
        label: "Research Queries",
        data: [42, 28, 15, 8, 7],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(168, 85, 247, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(168, 85, 247, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const researchOverTime = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Research Queries",
        data: [18, 25, 22, 30],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  }

  const topSearchTerms = [
    { term: "Contract breach remedies", count: 14 },
    { term: "Employment termination", count: 12 },
    { term: "Land dispute resolution", count: 9 },
    { term: "Intellectual property rights", count: 8 },
    { term: "Corporate tax regulations", count: 7 },
  ]

  if (isCompact) {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Research Analytics</h3>
        <div className="h-64">
          <PieChart
            data={researchByType}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    boxWidth: 12,
                    font: {
                      size: 10,
                    },
                  },
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
          <CardTitle>Research Analytics</CardTitle>
          <CardDescription>Analysis of your legal research activities</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Research by Type</h3>
            <div className="h-80">
              <PieChart
                data={researchByType}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "right",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Research Over Time</h3>
            <div className="h-80">
              <BarChart
                data={researchOverTime}
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
          <CardTitle>Top Search Terms</CardTitle>
          <CardDescription>Most frequently researched legal topics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topSearchTerms.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{index + 1}.</span>
                  <span>{item.term}</span>
                </div>
                <Badge variant="outline">{item.count} searches</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
