import { ColleaguesWorkspace } from "@/components/colleagues/colleagues-workspace"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Colleagues | Denning Platform",
  description: "Connect and collaborate with your legal team",
}

export default function ColleaguesPage() {
  return <ColleaguesWorkspace />
}
