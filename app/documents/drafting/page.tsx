import { Suspense } from "react"
import { DraftingWorkspace } from "@/components/drafting/drafting-workspace"
import { DraftingSkeleton } from "@/components/loading-skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Document Drafting | Denning Platform",
  description: "AI-powered document drafting for legal professionals",
}

export default function DraftingPage() {
  return (
    <Suspense fallback={<DraftingSkeleton />}>
      <DraftingWorkspace />
    </Suspense>
  )
}
