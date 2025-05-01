import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart, LineChart } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"

interface TimeAnalyticsProps {
  timeRange: string
  isCompact?: boolean
}

export function TimeAnalytics({ timeRange, isCompact = false }: TimeAnalyticsProps) {
  // Mock data - would come from API in real implementation
  const timeByActivity = {
    labels: ["Research", "Document Drafting", "Client Meetings", "Court Appearances", "Administrative"],
    datasets: [
      {
        label: "Hours Spent",
        data: [42, 56, 28, 18, 20],
        backgroundColor: "rgba(245, 158, 11, 0.7)",
        borderColor: "rgba(245, 158, 11, 1)",
        borderWidth: 1,
      },
    ],
  }

  const billingTrends = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Billable Hours",
        data: [38, 42, 36, 48],
        borderColor: "rgba(245, 158, 11, 1)",
        backgroundColor: "rgba(245, 158, 11, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Target Hours",
        data: [40, 40, 40, 40],
        borderColor: "rgba(107, 114, 128, 1)",
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
      },
    ],
  }

  const topClients = [
    { name: "ABC Corporation", hours: 42, amount: "$10,500", outstanding: "$0" },
    { name: "Smith Enterprises", hours: 28, amount: "$7,000", outstanding: "$3,500" },
    { name: "XYZ Ltd.", hours: 24, amount: "$6,000", outstanding: "$6,000" },
    { name: "Johnson Family Trust", hours: 18, amount: "$4,500", outstanding: "$1,500" },
    { name: "Tech Innovations Inc.", hours: 16, amount: "$4,000", outstanding: "$2,000" },
  ]

  const billingProgress = {
    current: 164,
    target: 180,
    percentage: (164 / 180) * 100,
  }

  if (isCompact) {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Time & Billing Analytics</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Monthly Billing Target</p>
              <p className="text-sm font-medium">
                {billingProgress.current} / {billingProgress.target} hours
              </p>
            </div>
            <Progress value={billingProgress.percentage} className="h-2" />
          </div>
          <div className="h-40">
            <LineChart
              data={billingTrends}
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
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Time & Billing Analytics</CardTitle>
          <CardDescription>Analysis of time usage and billing metrics</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Time by Activity</h3>
            <div className="h-80">
              <BarChart
                data={timeByActivity}
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
            <h3 className="text-sm font-medium mb-2">Billing Trends</h3>
            <div className="h-80">
              <LineChart
                data={billingTrends}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Top Clients by Billing</CardTitle>
            <CardDescription>Clients with highest billable hours</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client Name</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Outstanding</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topClients.map((client, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>{client.hours}</TableCell>
                    <TableCell>{client.amount}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {client.outstanding}
                        {client.outstanding !== "$0" && (
                          <Badge
                            variant={
                              Number.parseFloat(client.outstanding.replace("$", "").replace(",", "")) > 5000
                                ? "destructive"
                                : "warning"
                            }
                          >
                            Unpaid
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Billing Progress</CardTitle>
            <CardDescription>Current progress toward monthly target</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold">{Math.round(billingProgress.percentage)}%</p>
                      <p className="text-sm text-muted-foreground">Complete</p>
                    </div>
                  </div>
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="text-muted stroke-current"
                      strokeWidth="10"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-amber-500 stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      strokeDasharray={`${billingProgress.percentage * 2.51} 251`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Current</p>
                  <p className="text-sm font-medium">{billingProgress.current} hours</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Target</p>
                  <p className="text-sm font-medium">{billingProgress.target} hours</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Remaining</p>
                  <p className="text-sm font-medium">{billingProgress.target - billingProgress.current} hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
