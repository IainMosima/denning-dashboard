"use client"

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function WelcomeSection() {
  const [greeting, setGreeting] = useState("Hello")
  const userName = "John Doe" // This would come from user authentication

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good Morning")
    else if (hour < 18) setGreeting("Good Afternoon")
    else setGreeting("Good Evening")
  }, [])

  return (
    <Card className="border-none shadow-none bg-gradient-to-r from-blue-950/50 to-blue-900/30 dark:border dark:border-blue-900/50">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {greeting}, {userName}
            </h1>
            <p className="text-muted-foreground mt-1">
              Tuesday, 26 April 2025 | You have 3 ongoing projects and 2 documents awaiting review
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Weekly Report</Button>
            <Button>New Project</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
