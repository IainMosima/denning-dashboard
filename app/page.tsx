import { Suspense } from "react"
import { WelcomeSection } from "@/components/welcome-section"
import { QuickActions } from "@/components/quick-actions"
import { ProjectsSnapshot } from "@/components/projects-snapshot"
import { AiAssistant } from "@/components/ai-assistant"
import { DocumentHistory } from "@/components/document-history"
import { SecurityNotice } from "@/components/security-notice"
import { DashboardAnalytics } from "@/components/dashboard-analytics"
import { UpcomingEvents } from "@/components/upcoming-events"
import { TaskManagement } from "@/components/task-management"
import { TeamMembers } from "@/components/team-members"
import { RecentActivity } from "@/components/recent-activity"
import { BillingSummary } from "@/components/billing-summary"
import { KnowledgeBase } from "@/components/knowledge-base"
import { ClientManagement } from "@/components/client-management"
import { DashboardSkeleton } from "@/components/loading-skeleton"

export default function Dashboard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        <WelcomeSection />

        <DashboardAnalytics />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            <QuickActions />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <UpcomingEvents />
              <TaskManagement />
            </div>
            <ProjectsSnapshot />
            <DocumentHistory />
            <RecentActivity />
          </div>

          <div className="space-y-4 md:space-y-6">
            <AiAssistant />
            <TeamMembers />
            <ClientManagement />
            <BillingSummary />
            <KnowledgeBase />
            <SecurityNotice />
          </div>
        </div>
      </div>
    </Suspense>
  )
}
