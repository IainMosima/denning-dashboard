import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, DollarSign, Clock, Calendar } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function BillingSummary() {
  // Mock data - would come from API in real implementation
  const billingData = {
    currentMonth: {
      hours: 164,
      target: 180,
      amount: "$41,000",
      outstanding: "$12,500",
    },
    recentClients: [
      {
        id: 1,
        name: "ABC Corporation",
        hours: 42,
        amount: "$10,500",
      },
      {
        id: 2,
        name: "Smith Family Trust",
        hours: 28,
        amount: "$7,000",
      },
      {
        id: 3,
        name: "XYZ Startups Inc.",
        hours: 36,
        amount: "$9,000",
      },
    ],
  }

  const progressPercentage = (billingData.currentMonth.hours / billingData.currentMonth.target) * 100

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-blue-600" />
          Billing Summary
        </CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>View Details</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">April 2025</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {billingData.currentMonth.hours} / {billingData.currentMonth.target} hours
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between text-sm pt-1">
            <div>
              <span className="font-medium">Billed: </span>
              <span className="text-muted-foreground">{billingData.currentMonth.amount}</span>
            </div>
            <div>
              <span className="font-medium">Outstanding: </span>
              <span className="text-muted-foreground">{billingData.currentMonth.outstanding}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Top Clients This Month</h3>
          {billingData.recentClients.map((client) => (
            <div key={client.id} className="flex items-center justify-between p-2 rounded-lg border">
              <div>
                <p className="font-medium">{client.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{client.hours} hours</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{client.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
