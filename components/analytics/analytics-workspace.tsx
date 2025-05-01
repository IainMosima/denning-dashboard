"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, PieChart, LineChart, Calendar } from "lucide-react"
import { ResearchAnalytics } from "@/components/analytics/research-analytics"
import { DocumentAnalytics } from "@/components/analytics/document-analytics"
import { CaseAnalytics } from "@/components/analytics/case-analytics"
import { TimeAnalytics } from "@/components/analytics/time-analytics"
import { AnalyticsSummary } from "@/components/analytics/analytics-summary"

export function AnalyticsWorkspace() {
  const [timeRange, setTimeRange] = useState("30")

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Legal Analytics</h1>
          <p className="text-muted-foreground">Insights and metrics to help you understand your legal practice</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Time Range:</span>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <AnalyticsSummary timeRange={timeRange} />

      <Tabs defaultValue="overview">
        <TabsList className="grid grid-cols-4 mb-4 w-full md:w-auto">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="research" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span className="hidden sm:inline">Research</span>
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            <span className="hidden sm:inline">Documents</span>
          </TabsTrigger>
          <TabsTrigger value="time" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Time & Billing</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 md:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>Key metrics across all areas of your legal practice</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <ResearchAnalytics timeRange={timeRange} isCompact />
              <DocumentAnalytics timeRange={timeRange} isCompact />
              <CaseAnalytics timeRange={timeRange} isCompact />
              <TimeAnalytics timeRange={timeRange} isCompact />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-4 md:space-y-6">
          <ResearchAnalytics timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="documents" className="space-y-4 md:space-y-6">
          <DocumentAnalytics timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="time" className="space-y-4 md:space-y-6">
          <TimeAnalytics timeRange={timeRange} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
