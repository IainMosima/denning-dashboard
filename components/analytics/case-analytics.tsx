import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "@/components/ui/chart"

interface CaseAnalyticsProps {
  timeRange: string
  isCompact?: boolean
}

export function CaseAnalytics({ timeRange, isCompact = false }: CaseAnalyticsProps) {
  // Mock data - would come from API in real implementation
  const casesByType = {
    labels: ["Contract", "Intellectual Property", "Corporate", "Employment", "Property", "Other"],
    datasets: [
      {
        label: "Active Cases",
        data: [5, 3, 2, 2, 1, 2],
        backgroundColor: [
          "rgba(168, 85, 247, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(107, 114, 128, 0.7)",
        ],
        borderColor: [
          "rgba(168, 85, 247, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)",
          "rgba(107, 114, 128, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const caseOutcomes = {
    labels: ["Won", "Settled", "Lost", "Withdrawn", "Ongoing"],
    datasets: [
      {
        label: "Case Outcomes",
        data: [12, 8, 3, 2, 15],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(107, 114, 128, 0.7)",
          "rgba(245, 158, 11, 0.7)",
        ],
        borderColor: [
          "rgba(16, 185, 129, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(239, 68, 68, 1)",
          "rgba(107, 114, 128, 1)",
          "rgba(245, 158, 11, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const caseMetrics = [
    { metric: "Average Case Duration", value: "4.2 months" },
    { metric: "Cases Won", value: "75%" },
    { metric: "Settlement Rate", value: "62%" },
    { metric: "Average Documents per Case", value: "24" },
  ]

  if (isCompact) {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Case Analytics</h3>
        <div className="h-64">
          <PieChart
            data={casesByType}
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
          <CardTitle>Case Analytics</CardTitle>
          <CardDescription>Analysis of case types and outcomes</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Cases by Type</h3>
            <div className="h-80">
              <PieChart
                data={casesByType}
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
            <h3 className="text-sm font-medium mb-2">Case Outcomes</h3>
            <div className="h-80">
              <PieChart
                data={caseOutcomes}
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Case Metrics</CardTitle>
          <CardDescription>Performance indicators for your legal cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {caseMetrics.map((item, index) => (
              <Card key={index} className="border-none shadow-none bg-muted/50">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{item.metric}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
