import { Suspense } from "react"
import { AnalyticsWorkspace } from "@/components/analytics/analytics-workspace"
import { AnalyticsSkeleton } from "@/components/loading-skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Analytics | Denning Platform",
  description: "Analytics and insights for legal professionals",
}

export default function AnalyticsPage() {
  return (
    <Suspense fallback={<AnalyticsSkeleton />}>
      <AnalyticsWorkspace />
    </Suspense>
  )
}
