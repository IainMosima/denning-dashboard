import { Suspense } from "react"
import { CaseManagementWorkspace } from "@/components/cases/case-management-workspace"
import { CaseManagementSkeleton } from "@/components/loading-skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Management | Denning Platform",
  description: "Case management tools for legal professionals",
}

export default function CasesPage() {
  return (
    <Suspense fallback={<CaseManagementSkeleton />}>
      <CaseManagementWorkspace />
    </Suspense>
  )
}
