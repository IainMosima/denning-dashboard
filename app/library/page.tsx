import { Suspense } from "react"
import LawLibraryWorkspace from "@/components/library/law-library-workspace"
import { LibrarySkeleton } from "@/components/loading-skeleton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Law Library | Denning Platform",
  description: "Digital law library for legal professionals",
}

export default function LibraryPage() {
  return (
    <Suspense fallback={<LibrarySkeleton />}>
      <LawLibraryWorkspace />
    </Suspense>
  )
}
