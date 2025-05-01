import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, FileText, Users, Clock, ArrowUp, ArrowDown } from "lucide-react"

export function DashboardAnalytics() {
  // Mock data - would come from API in real implementation
  const stats = [
    {
      title: "Active Cases",
      value: "12",
      change: "+2",
      changeType: "increase",
      icon: BarChart,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Documents",
      value: "87",
      change: "+14",
      changeType: "increase",
      icon: FileText,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    },
    {
      title: "Clients",
      value: "24",
      change: "+3",
      changeType: "increase",
      icon: Users,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "Billable Hours",
      value: "164",
      change: "-2",
      changeType: "decrease",
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/20",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Analytics Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.title} className="space-y-2">
              <div className={`p-2 rounded-full w-fit ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div
                    className={`flex items-center text-xs font-medium ${
                      stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.changeType === "increase" ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                    {stat.change}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
