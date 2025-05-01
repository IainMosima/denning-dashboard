import { Suspense } from "react"
import { ResearchWorkspace } from "@/components/research/research-workspace"
import { ResearchSkeleton } from "@/components/loading-skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Research | Denning Platform",
  description: "AI-powered legal research for legal professionals",
}

export default function ResearchPage() {
  return (
    <Suspense fallback={<ResearchSkeleton />}>
      <ResearchWorkspace />
    </Suspense>
  )
}
