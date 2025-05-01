import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Search, FileText, Scale, Clock } from "lucide-react"

interface AnalyticsSummaryProps {
  timeRange: string
}

export function AnalyticsSummary({ timeRange }: AnalyticsSummaryProps) {
  // Mock data - would come from API in real implementation
  const stats = [
    {
      title: "Research Queries",
      value: timeRange === "7" ? "24" : timeRange === "30" ? "87" : timeRange === "90" ? "246" : "912",
      change: "+12%",
      changeType: "increase",
      icon: Search,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Documents Created",
      value: timeRange === "7" ? "18" : timeRange === "30" ? "64" : timeRange === "90" ? "187" : "743",
      change: "+8%",
      changeType: "increase",
      icon: FileText,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    },
    {
      title: "Active Cases",
      value: timeRange === "7" ? "12" : timeRange === "30" ? "15" : timeRange === "90" ? "22" : "38",
      change: "+3",
      changeType: "increase",
      icon: Scale,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "Billable Hours",
      value: timeRange === "7" ? "42" : timeRange === "30" ? "164" : timeRange === "90" ? "487" : "1,924",
      change: "-2%",
      changeType: "decrease",
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/20",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="dark:border-muted">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div
                className={`flex items-center text-xs font-medium ${
                  stat.changeType === "increase" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.changeType === "increase" ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
